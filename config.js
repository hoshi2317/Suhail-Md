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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "6283159699851";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_15_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDYxLFxuICAgICAgICA0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQsXG4gICAgICAgIDIsXG4gICAgICAgIDcyLFxuICAgICAgICA0NyxcbiAgICAgICAgMixcbiAgICAgICAgNzAsXG4gICAgICAgIDU0LFxuICAgICAgICA1NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDMwLFxuICAgICAgICA0NixcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICA0MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExLFxuICAgICAgICA0MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAzMyxcbiAgICAgICAgNzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc0LFxuICAgICAgICA0NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzNCxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTksXG4gICAgICAgIDgxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTYwLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OCxcbiAgICAgICAgMjE2LFxuICAgICAgICA0NixcbiAgICAgICAgNTgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDMyLFxuICAgICAgICA1LFxuICAgICAgICA2NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDg0LFxuICAgICAgICA4MixcbiAgICAgICAgOTgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjA0LFxuICAgICAgICA0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDM0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDM1LFxuICAgICAgICAzMSxcbiAgICAgICAgNDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg1LFxuICAgICAgICAyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjksXG4gICAgICAgIDk0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDg0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTExLFxuICAgICAgICA1OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg4LFxuICAgICAgICA0MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM5LFxuICAgICAgICA3MixcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDksXG4gICAgICAgIDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDgyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODcsXG4gICAgICAgIDg2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY1LFxuICAgICAgICA1OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInE5MzkrcWhvRm5pRUg2MElOUmZldHNTclcvYjhrdk5OUnRLRHJYZW8wczQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkQtUXZEUEJCVDM2NnJ2M1k1eGxYRUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjNhYTg2NDctOWVmNy00NDAzLWJkZjctNzczODRhYTliZmYxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNCxcbiAgICAgIDE4MSxcbiAgICAgIDMyLFxuICAgICAgMTc5LFxuICAgICAgMTMzLFxuICAgICAgMTksXG4gICAgICAzLFxuICAgICAgMTc1LFxuICAgICAgMTk5LFxuICAgICAgMjMxLFxuICAgICAgMjcsXG4gICAgICAxODEsXG4gICAgICAxOTYsXG4gICAgICA0MixcbiAgICAgIDE1MSxcbiAgICAgIDg0LFxuICAgICAgODIsXG4gICAgICAxOTcsXG4gICAgICA5MCxcbiAgICAgIDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYzLFxuICAgICAgMTE1LFxuICAgICAgOTgsXG4gICAgICAxNDEsXG4gICAgICAyMDUsXG4gICAgICAzOCxcbiAgICAgIDYxLFxuICAgICAgMTM4LFxuICAgICAgMjA4LFxuICAgICAgMSxcbiAgICAgIDE3LFxuICAgICAgMTYxLFxuICAgICAgMzQsXG4gICAgICA4NSxcbiAgICAgIDE1MCxcbiAgICAgIDE0OSxcbiAgICAgIDg2LFxuICAgICAgMjA4LFxuICAgICAgMTA4LFxuICAgICAgMTMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjQ0NkNKWTM4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI2MjgzMTMyNzQ3OTQ0OjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiWXVraVwiLFxuICAgIFwibGlkXCI6IFwiMjIzNDI5MDY0NTgxOTA6MjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0NseGZzRkVORGE2clFHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJnUFpsa1I5RmE2VnQyTlpvbytOd2UyQmdibGZPQ0wraUMrbitmd1BkTnprPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIktXUUdBblVKeElSeVRCYk9ySnUrQkcxSmVVQUVHS2huZDBxS3JYNVNzbzNtdkZBbUZJK2VCQjhIcW5BTmNaUytDQ1BETkorMWlKWE5CM3Vockl4RUJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkpEOHR2TkRTNUlCWThLWk9iWm1JbFNQZ0V4NmRZNTU4UkQ2RnZWb1NmVzNyTVYwc0NJSkRVNTVPTk5KaTNhY1BVM1pydGpPSWgwU0p1STlLNHlLV2dRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjYyODMxMzI3NDc5NDQ6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE0MTI5NDgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJRVJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlFUi5qc29uIjogIntcImtleURhdGFcIjpcIlVveUFXMXNXcCtuR2tMcVF2bzJyb055alFjazQ5VGMxSmlOU1NpL0UvU2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTYwMTI2MjIzOSxcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsNl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
