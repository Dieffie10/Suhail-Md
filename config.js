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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_41_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODQsXG4gICAgICAgIDUzLFxuICAgICAgICA4MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDc2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDksXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcxLFxuICAgICAgICA4NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMSxcbiAgICAgICAgODUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgODAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ5LFxuICAgICAgICA0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDM5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDY1LFxuICAgICAgICA1NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA4LFxuICAgICAgICA0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQyLFxuICAgICAgICA1NixcbiAgICAgICAgMTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTUzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDk3LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA3MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkxLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTksXG4gICAgICAgIDQzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDU2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDczLFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI4LFxuICAgICAgICA2OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzksXG4gICAgICAgIDU3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDgyLFxuICAgICAgICAxODMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMixcbiAgICAgICAgNTksXG4gICAgICAgIDE3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJKcHZIRlAxTWx6M1RGM2hyZkxwVDUyek1ObTZSZGFQWTJNVGU4eXcyTTNrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyNTk1MTMyODI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBOEQzODI2MUVEMUJFRDgxMzcxQzkxMTYyMUM0RTc2OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEzMTczMDdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWHR2NDRoc1RRc3FhTHhrRXhBVXUtd1wiLFxuICBcInBob25lSWRcIjogXCJmZjZhZTMzOS03ZDU4LTQ1ZTctYjE5MS01MDk1MTI4ODI3MTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE3LFxuICAgICAgMTM3LFxuICAgICAgMTA5LFxuICAgICAgMjQ0LFxuICAgICAgMzEsXG4gICAgICAyMDgsXG4gICAgICAxMixcbiAgICAgIDE1OSxcbiAgICAgIDgwLFxuICAgICAgMjQ0LFxuICAgICAgMjEsXG4gICAgICAyNixcbiAgICAgIDgwLFxuICAgICAgMTQzLFxuICAgICAgMjI0LFxuICAgICAgMjA2LFxuICAgICAgMjA3LFxuICAgICAgMTkwLFxuICAgICAgMTg2LFxuICAgICAgNjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzMsXG4gICAgICAyMyxcbiAgICAgIDQwLFxuICAgICAgNjYsXG4gICAgICAwLFxuICAgICAgNzYsXG4gICAgICAyNixcbiAgICAgIDIxMSxcbiAgICAgIDE1MCxcbiAgICAgIDc3LFxuICAgICAgMjA5LFxuICAgICAgMTI5LFxuICAgICAgMjYsXG4gICAgICAyMTcsXG4gICAgICA2OCxcbiAgICAgIDE1MixcbiAgICAgIDE3OSxcbiAgICAgIDE3OSxcbiAgICAgIDE1OSxcbiAgICAgIDg3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkU0QVdWQVpFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjU5NTEzMjgyNjo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4NzY4NjUwNTMyMDYyNTo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0orbHBvd0VFTEh2NUxRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMEI2THFHU0Z2citvcEJJbzdlQnNraFJsNXRIZzZ0blZrcG1FZG5WUUJCYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI5NFRNd1dSWjl1bFY5NVR2QTdFQ3N1WU5hdHBzbzNiSzVweXI0QnhiSFRqL1ZCd25sSXdMa1VpNVk4ZXNyL3pWK1UzWm1hanQxTHVpamlUSERkV2REdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJnRUxZci9pQkF0MFZOWFE0NmR6eFYvczRNQVRYZGdvU1RpaGo5TXdHNStrZXZKTjNyV01vdFMrdGRRMDd5ZWVBSVFsZE1ncE9mZ2JURHRLYVREZFpoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjU5NTEzMjgyNjo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTMxNzMwMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9xcVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT3FxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSWdxS2FtZmxhMm0wblE2ZHVYU0wzK09iMTN3ekhRMHFiQUQ4dndCRGRYaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDk5NTM1MDA2LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIxMzE2OTM0NTAyXCJ9Igp9"  // PUT your SESSION_ID 


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
