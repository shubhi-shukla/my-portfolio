const express = require('express');
const mongoose = require('mongoose');
const Message = require('./schema/messageSchema');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path : './config.env'});
const app = express();
app.use(express.json());

//require('./db/conn');
const DB = process.env.DATABASE;
const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.DATABASE);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }
const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname,'./client/build')));

app.get('*', function (_, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'), function(error) {
        res.status(500).send(error);
    })
})

app.get('/', (req, res) => {
    res.send('hello from the portfolio home');
});

app.post('/message', async (req, res) => {
    try{
        const{name, email, subject, message} = req.body;
        if(!name || !email || !subject || !message){
            return res.json({status : '400', message : 'Required Fields Missing'});
        }

        const user = new Message({name, email, subject, message});
        await user.save();
        const accountSid = process.env.ACCOUNT_ID;
        const authToken = process.env.AUTH_TOKEN;
        const client = require('twilio')(accountSid, authToken);
        const messagebody = `Subject : ${subject} \n Message : ${message} \n From : ${name} \n Email : ${email}`;
        client.messages
            .create({
                body: messagebody,
                from: 'whatsapp:+14155238886',
                to: 'whatsapp:+918839559738'
            })
            .then(message => console.log("message sent successfully"))

        return res.json({status:'201', message: 'Data Saved Successfully'});
    }catch(error){
        console.log(error);
    }
})

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})