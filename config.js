const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_12_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxODYsXG4gICAgICAgIDgsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDY3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDMzLFxuICAgICAgICA4MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM5LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIyLFxuICAgICAgICA3NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDgwLFxuICAgICAgICA4NyxcbiAgICAgICAgMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2LFxuICAgICAgICA1MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxODksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTksXG4gICAgICAgIDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI1LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTEsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDkwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTYyLFxuICAgICAgICA4NixcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAzMixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMyxcbiAgICAgICAgMTEwLFxuICAgICAgICA2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA1LFxuICAgICAgICA2OCxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA1NixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTI5LFxuICAgICAgICA3NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI1LFxuICAgICAgICA2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgODAsXG4gICAgICAgIDQxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MixcbiAgICAgICAgNjUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJVQU1OaDNaTEswSGZxNjR0NlJaTUMwdU1idXpmU0N5MWc4YVdGNUU3eVRjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJndGRNeVJrNFRubW1hT0ttY0JhR29RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJjYWFmZTQzLTZlNzAtNDM3Yi1hZmE5LWQzMmI0YTY5NzNiNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MCxcbiAgICAgIDc4LFxuICAgICAgMixcbiAgICAgIDE0NixcbiAgICAgIDE2MCxcbiAgICAgIDExOCxcbiAgICAgIDIyNCxcbiAgICAgIDE4MyxcbiAgICAgIDE1OSxcbiAgICAgIDIwOSxcbiAgICAgIDEyLFxuICAgICAgMTkyLFxuICAgICAgMTU0LFxuICAgICAgMTM4LFxuICAgICAgMTA1LFxuICAgICAgNzUsXG4gICAgICAyMjAsXG4gICAgICAyNTMsXG4gICAgICAxNzMsXG4gICAgICAyMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOSxcbiAgICAgIDEyNSxcbiAgICAgIDE5MixcbiAgICAgIDM1LFxuICAgICAgMTUsXG4gICAgICAyMDQsXG4gICAgICAzLFxuICAgICAgMTkxLFxuICAgICAgMTksXG4gICAgICAxMTIsXG4gICAgICAyMyxcbiAgICAgIDU3LFxuICAgICAgMTQ4LFxuICAgICAgODksXG4gICAgICAyMzIsXG4gICAgICAyNDIsXG4gICAgICAyMTYsXG4gICAgICA4OSxcbiAgICAgIDE4OSxcbiAgICAgIDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSDJIN0pZRUNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyNTk1MTMyODI2OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg3Njg2NTA1MzIwNjI1OjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0dscG93RUVNMmc2clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwQjZMcUdTRnZyK29wQklvN2VCc2toUmw1dEhnNnRuVmtwbUVkblZRQkJjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjl5ZU5QWjZwWUp1ZWZjYVZPeTVmcnAyZUgyME9QTkxtcERxREZ4ejQ0YThhSjQvL0VyUExONTA4VzI3STVGaHZnNTl1SzZpZ0hFRm1nMXVXSUtFNEN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlZFZ2c1RVlkbVdyejMwOEQzejgyd2EyRUJINExCQndERWEraFg3R3d3d05NZG9nTnFnNFdhSkhEcXFLVWlyMFoyTU1NQXE0NVpRSmRnaE5OTGZRdURnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNTk1MTMyODI2OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNDA1NTI1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
