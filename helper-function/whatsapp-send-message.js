const accountSid = 'AC2f49daba592ba4e88a135ec6804e3617'; //Enter your Twilio Account SID in place of process.env.TWILIO_ACCOUNT_SID
const authToken = 'cc27fe689e47b7fea3fcec9e1ca39aa8'; //Enter your Twilio Auth Token in place of process.env.TWILIO_ACCOUNT_SID

const client = require('twilio')(accountSid, authToken, { 
    lazyLoading: true 
});

// Function to send message to WhatsApp
const sendMessage = async (message, senderID) => {

    try {
        await client.messages.create({
            to: senderID,
            mediaUrl: message,
            from: `whatsapp:+14155238886`
        });
    } catch (error) {
        console.log(`Error at sendMessage --> ${error}`);
    }
};

module.exports = {
    sendMessage
}