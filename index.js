const accountSid = 'AC2f49daba592ba4e88a135ec6804e3617'; //Enter your Twilio Account SID in place of process.env.TWILIO_ACCOUNT_SID
const authToken = 'cc27fe689e47b7fea3fcec9e1ca39aa8'; //Enter your Twilio Auth Token in place of process.env.TWILIO_ACCOUNT_SID

const express = require('express');

const app = express();
const path = require("path")
const client = require('twilio')(accountSid, authToken);

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.render('home');
});

const WA = require('./helper-function/whatsapp-send-message');

app.post('/whatsapp', async (req, res) => {
  console.log(req.body);

let message = req.body.whatsappmessage;
    let senderID = 'whatsapp:'+req.body.phone;

    console.log(message);
    console.log(senderID);

    // Write a function to send message back to WhatsApp
    await WA.sendMessage(message, senderID);

  });

app.listen(3000, () => {
  console.log('Server Started');
});