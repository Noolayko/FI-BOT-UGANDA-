//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "donhacker@gamil.com";
global.location = "Iganga, Uganda";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Kampala";
global.github = process.env.GITHUB || "https://github.com/Noolayko/FI-BOT-UGANDA-";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VajvAYL7YScvdKu2dA1r";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VajvAYL7YScvdKu2dA1r";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/fd2dd4ff0da3dca59f992.jpg";
global.devs = "234906628353";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "256742366969";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/fd2dd4ff0da3dca59f992.jpg";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUxOMTNMVjZZZ2NyY2pjdEc5b0c2WHpSWGxoVnoxL1NUd3ZRdlJVRFRIZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVlAzQitySm9adjFSQnBUdXlXVnZxYjd5L2Y4K3pYUUg0QmwwVmJYNExoQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjR1ZrK3VSekNOU1NKMGdGWi9BaytBRUtreGRBVmZER1B5TFl1dFZOUUdrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4UzhyK01zNDlUTEhHMERFSU56bGE0Wnp2NmJWSmRYaFJaMkVJdE1uaUhzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVIdjdEanAyOXdRUDRMTHV0Zi9iR09ZcisrMGxFMy9Hc1pVQmRxK2tpSDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZ2dWF6MGlZeXRWOTliLytwVGU5MUo3b0l4dHNLaGdBbVYrVzU5ekd2WDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0xWb0FVbEppU0szdEUyUWwyMXBtSmwxdVVRWDhiNW1FSGt2TGRhdkxXND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNGhvS1VkNU9xYVBqNlpaZXdWUHNESTJJeGs1ZHc1OXlkM1Y3dUJaMy9DVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNxbHpTZ2gxMXVWd2tRQjRQVWhyMDh0ZzVST25IQll4QWUzaEdmSGU0Y2hFZkNTWW5uSFdiOHNXVzE5Y01rRzZ0cSsrcVE0NVNpOWx0aHpzNEJFckFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTYsImFkdlNlY3JldEtleSI6IkpUclVBckJXbFF1U2VQMDNXVmd6bzRXM2ovc1JYRHF1SnJqMkRjZjF0MnM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik04T1FEdEJWVGFlUllrQ0F1MVJQMGciLCJwaG9uZUlkIjoiMjYxZjZjNGMtNTNmOC00MWM1LTkzZDMtODQwNGY0Mjk5ZGY4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9LbU9YbEcvcGZTWmIveWg0TnBVQXdKelN1MD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJckVaS2pDUUhaUElZeTRZRzRWS1pnbkNZR0U9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTkFFRTJHS0siLCJtZSI6eyJpZCI6IjI1Njc0MjM2Njk2OTozN0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCD8J2QjvCdkI0g8J2Qh/CdkIDwnZCC8J2QivCdkITwnZCR4bWB4bSzIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQN295T2tIRUtTamtMVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIvT2M0Z3ZIZzA0Y0lzVW1MVHE0azc3WlFEVFlKOUFneFA3ZlVJbVdCbEFNPSIsImFjY291bnRTaWduYXR1cmUiOiI5akJYeDMzdjAyMjd5UnJob2M0UnljWTd2STRsdUU5WnpPdUtPbHRaMmxwdG1HNkYrSnN6dlFLM2lWWURxR1NIeDRJa2p6V3BHN0RQVjFMUG9qVUVEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoibUsyYTlveUFGTnh4R2hZdUJsWTl6Uk1lNStYRk56R3ZrUXhHZnlZSDMwT2FuV05vTURvb05jU2hPSEVhbXJjaE4wZlZXTDlWcGhIZ3ZKdkhhOUJtQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTY3NDIzNjY5Njk6MzdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZnpuT0lMeDROT0hDTEZKaTA2dUpPKzJVQTAyQ2ZRSU1UKzMxQ0psZ1pRRCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjAyODQ2NX0="
module.exports = {
  menu: process.env.MENU || "4",
  HANDLERS: process.env.PREFIX || "/",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`FI-BOT-UGANDA-™`",
  author: process.env.PACK_AUTHER || "FI-BOT-UGANDA-",
  packname: process.env.PACK_NAME || "F I B O T",
  botname: process.env.BOT_NAME || "👑 FI-BOT-UGANDA-👑",
  ownername: process.env.OWNER_NAME || "👑DON HACKER 👑",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
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
