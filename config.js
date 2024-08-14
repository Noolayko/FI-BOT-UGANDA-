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
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Kampala";
global.github = process.env.GITHUB || "https://github.com/Noolayko/FI-BOT-UGANDA-";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VajvAYL7YScvdKu2dA1r";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VajvAYL7YScvdKu2dA1r";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/ca3524b5910d72a0844b7.jpg";
global.devs = "256704376077";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "256742366969";
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

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUdTTVZVRCtwTXhZOGxYUmkxS3RTdUgweHlVNEprN0gzSGZUN0pwUlNIOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGFzS3BKeXpSZ0xOOHQ0cm5pa1ZibGhPVVA2Tk5FZUFsV283SDZlbjVWQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3RDFHejZIRStlRkJMY042b2NleWJBdXM4dkQwNlQ5ZjhWUHA3K0NabTNNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyTjI2dVN1VmJLaHgzd24yS2h3ZFdzVzIyb0pDeHo5aDBlbmprNWJBTWlNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1JV1MzN2E4Q0JnT0hwUVV5cldVV2Z2QWU2YW5lanhwVHJBYmxLaVhJMEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlUwUFRsVk5zcEhLZFRVQ2MwdDQydjFIRjhBUThkVnM4RHFtYi9zR2VRRms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUd2cmFBUmVqNFZsL0I4VnRWaFYwOEVzNU5QejNzeWJXQjBoMGNhSW9rUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTm0xazB2dmh2enZybFhlMUpMZnc5emJUdjg0b2xtWlJsN3RlZitJOFJoYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhR01ZenZJZk9BQzFMYVRCanUwRExLQTE1WDVtVVdUcmwzYkJ5MzZYdHNLWmJzSjBEWEVlWWdjNzNsVHc5LzduS2g0U2o5YWFpUFl5NFRDZmNzbER3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODAsImFkdlNlY3JldEtleSI6IlRIY2Zoa1c1RFhCd3oyblNtMkNUdDQ2RmZsbzlzMU4xSys2WUZlUGJtbTg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InJydi1QT1FoUlpHX3FQTFZ1a3RqTVEiLCJwaG9uZUlkIjoiMDQyZTFlNzUtODliMi00ZWRmLWIwZmYtODIwNWU1OWJkOWIxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhQbU9PUkc4Rjd2Z3c5eFFER1lueENqemhUOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVVWd6MHZ1T0dFczZqT2k0OTdOVFIxMGRlWTg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSjVMVzJLMVQiLCJtZSI6eyJpZCI6IjI1Njc1MTYxNzc4ODo5MUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS0dDL3g0UXY2dnp0UVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWlAwMi9tRHVXZG1UenoxNFdSdXVJNzNjOFhHV2RDNkhhVUoyM0JwTVhtZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoibVYzMXNxdGcrL2NjVStQdzc4eUJMMldmYVZ2Vkt4U2dNc0xFQkYrRFVab0ZWamhveFY0UGtiS002SmNhTmFIc1V5c0VwVlBQb3l0dUt4WmVDVFVoQkE9PSIsImRldmljZVNpZ25hdHVyZSI6IlNDT1IzMTVCRG1KU0Rtdi80N0EwSGZGL0lWR0p4VmJCY0RyZjcxUjRhZXhkSGFIMW8yRDQyajFMVkh6UGNuZ2NUZ0ZGSzhPcExHaGlpSXB6aDZJcUJ3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU2NzUxNjE3Nzg4OjkxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldUOU52NWc3bG5aazg4OWVGa2JyaU85M1BGeGxuUXVoMmxDZHR3YVRGNW8ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM2NTE1MzMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTG1CIn0="
module.exports = {
  menu: process.env.MENU || "4",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`FI-BOT-UGANDA-™`",
  author: process.env.PACK_AUTHER || "FI-BOT-UGANDA-",
  packname: process.env.PACK_NAME || "F I B O T",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "Private",
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
