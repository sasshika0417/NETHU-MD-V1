const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "LdNFXLaJ#RpS5Em6zubd1aW2V2d5bOe5uxIHTvK-qhbwvazEKbzg ",
ALIVE_IMG: process.env.ALIVE_IMG || "https://ibb.co/R0CngQ9",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello I'm alive now Sabee",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
SUDO_NB: process.env.SUDO_NB || "94758437638",
OWNER_NAME: process.env.OWNER_NAME || "Sasshika Indusara",
BOT_NAME: process.env.BOT_NAME || "Sabee-MD",
AUTO_VOICE: process.env.AUTO_VOICE || "true"

};

