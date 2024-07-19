const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="sub32259@gmail.com"
global.location="bandung,Indonesia."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/jakarta";
global.github=process.env.GITHUB|| "https://github.com/hoshi2317/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/hoshi2317/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴹᵃᵈᵉ ᵇʸ ʰᵒˢʰᶦ" 


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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,628xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_27_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDY4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDksXG4gICAgICAgIDExMixcbiAgICAgICAgMTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQzLFxuICAgICAgICA4MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjU1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyNixcbiAgICAgICAgMjQxLFxuICAgICAgICAyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEsXG4gICAgICAgIDM3LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzYsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDYxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTczLFxuICAgICAgICA4NSxcbiAgICAgICAgOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDM4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI2LFxuICAgICAgICA5OSxcbiAgICAgICAgNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNSxcbiAgICAgICAgODIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDksXG4gICAgICAgIDUwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDM5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDc0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTIwLFxuICAgICAgICA0MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDUwLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaUhwdGJKQXQvRzREcmRhNkxuUzQybGhyVDVyM2lrV0YwOHcwWFFVOWlRND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI2MjgzMTMyNzQ3OTQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCOTk3M0E4MEYyMEFGQzJFNjY1NTdCQzBFNzJCMThFQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEzNjY4NzFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibTdydTM4RlpSR3lpUERuTlJzbmhSZ1wiLFxuICBcInBob25lSWRcIjogXCJiMTVmZGExNy1jYjJiLTRjNjItYWRlNS02NjZkNWZhYmZhN2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMxLFxuICAgICAgMTI2LFxuICAgICAgNTYsXG4gICAgICAxODYsXG4gICAgICAxMzQsXG4gICAgICAyMDEsXG4gICAgICAxODMsXG4gICAgICA3NyxcbiAgICAgIDUwLFxuICAgICAgMjE1LFxuICAgICAgMTczLFxuICAgICAgMTY4LFxuICAgICAgMTksXG4gICAgICAyMjEsXG4gICAgICAyNDMsXG4gICAgICA2OSxcbiAgICAgIDIwMixcbiAgICAgIDYwLFxuICAgICAgNDEsXG4gICAgICAxMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTUsXG4gICAgICAyMTgsXG4gICAgICAyNDEsXG4gICAgICAxODQsXG4gICAgICAxMjcsXG4gICAgICAyMDgsXG4gICAgICAxODIsXG4gICAgICA5OSxcbiAgICAgIDEzNixcbiAgICAgIDQyLFxuICAgICAgMTY3LFxuICAgICAgOTIsXG4gICAgICAxOTcsXG4gICAgICAyMzYsXG4gICAgICAxMzAsXG4gICAgICAxMjMsXG4gICAgICA3LFxuICAgICAgNixcbiAgICAgIDIzOCxcbiAgICAgIDIxM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyV0pWQ0FIWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNjI4MzEzMjc0Nzk0NDoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIll1a2lcIixcbiAgICBcImxpZFwiOiBcIjIyMzQyOTA2NDU4MTkwOjE2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0orbHhmc0ZFTTd5NTdRR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZ1BabGtSOUZhNlZ0Mk5ab28rTndlMkJnYmxmT0NMK2lDK24rZndQZE56az1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI1VmxtMnBldGtQWE93b3ZMUk5jU1FncXI4SHJXTVpicnFTYlJKNUJLMmhHaVNHZjFxdDBXQkRyYlRsd1ZIZnl1aUY2aVRUN3VwSXhiOUVDNEwzVHBCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoVDVCeEpydGVaNXU2NlZXUkIzNWlXWjFpQTRXTFVjeVdubndzQm9nSDVLR2s0UXRGYTJBbHJaMkJ5d3NwWDV3dDNZOE1JWnJtb3NiM2dZVmYzeENCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI2MjgzMTMyNzQ3OTQ0OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzY2ODY2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSUVKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJRUouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJUNTlDdkxYRlRHU1VXMzVpWFVCU09rc3BZREVkRnZMZ3VyT1NUTGdEVDJBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MDEyNjIyMzgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEyMjQ4OTMyNzRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "HALLO SEMUA NAMA SAYA YUKI" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "HOSHI PACK",
  packname: process.env.PACK_NAME || "YUKI",
  botname : process.env.BOT_NAME  || "Yuki",
  ownername:process.env.OWNER_NAME|| "Hoshi",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "nNCzmJZi9MaJb98A2cufjtgn",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-I3WMau9lqUQH83iHopUST3BlbkFJUhJuceAVMACpeCLUEWOA",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-5e842785-5d2e-46a5-8fd6-181b764835d3",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "botwa001",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "sk_e5ffcc4d8bd684889a7d2ed4778d5c90a1cd98dace15bf3d";
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
