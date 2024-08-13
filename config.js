//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "donhacker@gamil.com";
global.location = "Jinja, Uganda";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/madhyapradesh";
global.github = process.env.GITHUB || "https://github.com/Noolayko/FI-BOT-UGANDA-";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VajvAYL7YScvdKu2dA1r";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VajvAYL7YScvdKu2dA1r";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/ca3524b5910d72a0844b7.jpg";
global.devs = "256704376077";
global.sudo = process.env.SUDO || "919630863919,918827062791";
global.owner = process.env.OWNER_NUMBER || "919630863919";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ca3524b5910d72a0844b7.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID = "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEhvZzQ0YlQ1TkFKTXFldUR0SmtkMGJLYTB4NlhJRDNJVWlIQWJzcUNrTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiblF6QWJUdnpnQ3JoWmszTTRibzZ0azBsQzhxUGZZK1EwaTQ3VnFvbnhBbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZRnRPTkpqSGY2c0toUlo3Q3lFTFo3UWdFb2dxRTFBTDh4M3JuWE9waEdZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJONytZSVlvM3FzRENQa0I1QktXSFZaRGdTbFhJQkU5QVJNNUFlK1RmR2l3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1OMFhpMWk4dXRMRDdXRjcrMVBGeDFSQlFaVkM5clhIZDlQNkx5MVVkbDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlQT0FyLzRYSjdHaExmVk9LdmdSdjE5eE9qQ1NweklTYmhyQTBYaFVWRzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkRhSnJDVEtUdll5WU1LUUQ1RkFzQktzU1FYWG5Hc1pSQjd4SGdtMDZGTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGFaM2tFTkdxelVKcVpYRDlYajB6b01NTG5VT2YrYTRlUkZNNDlXUkJpMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImwwclNnV3doSm9VQUFkMFhTTGdNa3V1aXdYK2trNHFnWG1DMW5OaWRlZEIyVDl2U1hPSlIrZ2RLaUZaU005Y3V1TnlPaWp4YUVnMGNGYXlCU3ZleUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg3LCJhZHZTZWNyZXRLZXkiOiJlek05SUJhSCtGVWkyaFdlWDFVa3p6WG1TbXA1RGpBdWl5eDVScWxtak5zPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxNzA2NzQzMjE5OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwRDc2REFCNjM4OUY3RTY0REJEMTk5NjgxNDkxMkVDQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIzNTU2OTU1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTcwNjc0MzIxOThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjNBMTVBOEZCODg3OTlBMkVCN0JCQkUzRjJBNTc5OEUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMzU1Njk1NX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiUnF1bHRxLUpTUm1yVDQxd0ItNXZKUSIsInBob25lSWQiOiJkNTU4NTMyMi04YTM4LTQyNTQtYTczYS01NjllMjBkNTFhZGYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVBnMTlrMXBGUlJkMTdPMUovQ3U1cjJsQWhRPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InI2ZlhHL2E1KzVpcU9jQUo5Y3lZTWwzMHhDZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJOVkxZQVE1RSIsIm1lIjp7ImlkIjoiOTE3MDY3NDMyMTk4OjIyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCflqTij6TNn82fzZ7NniDDl82cw5cg4bSEzaLNos2iyoDJquG0jcmqybThtIDKn+C/kCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHlFa080RUVNdkk3YlVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYlM4Um1URXMzTVlrdFp4NThNOVBaUVgwTUkzUi95bG5EK3hBYVZrTStSOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTFpsKzhCWS9HNWNxVm91MURrZTlDaHpPRDljWE9zejhrZVNPUXVJa1BVL0hEUlllWEs4WUxsN3VmVWhmdE9uUnVoczdQS0NvZnZMcEsveThqdHBDQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6Imd4VEFnTk40c2I4RytVdnZEcnJVek5RN0xhMXBaU0xNaVNrMm1LNExTY0IrRmlBbDY0WGk0bGpVNUhiMVg4b28zWVpycm4zNXkzNnFOc1BZNU5YeERBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE3MDY3NDMyMTk4OjIyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlcwdkVaa3hMTnpHSkxXY2VmRFBUMlVGOURDTjBmOHBady9zUUdsWkRQa2YifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM1NTY5NTIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQjI5In0="
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "4",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`FI-BOT-UGANDA-™`",
  author: process.env.PACK_AUTHER || "•⏤⵿༄ 𝆺𝅥⃝⃪⃜❤️ᴄ͢͢͢ʀɪᴍɪɴᴀʟ𓆪ꪾ❦︎ 𝆺𝅥⃝🍷",
  packname: process.env.PACK_NAME || "meow",
  botname: process.env.BOT_NAME || "🤖FI-BOT-UGANDA-🤖",
  ownername: process.env.OWNER_NAME || "𝑫𝑶𝑵 𝑯𝑨𝑪𝑲𝑬𝑹💥",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "Privat",
  LANG: (process.env.THEME || "F I").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
