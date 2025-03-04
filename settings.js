// Bot settings

// You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep

const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0JRd3UyVEN5bG9XQjlKQ0FEa0pGNlg4eDByU2plemxJU2lYdWFiL0ZsWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieHFUME9xVXpseFFONEJneVRFSTlRNlA0TWVnMVlwNjJSWG82eGRZZXVrbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtRzJkK3FOUVRpNVQyanVhUUdXRncrZ05vUEJmTXR6OFBYUEhGcW5majBRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFd0xhN0VGR3RUS09FSjd5bzFIbDNJZkQxdG1FSXRva2doTTRURk4yYjJvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtOU1YxekVBVE85eG94YkVqdzczajZ0L2pIOUtQeGNWMmdLTmtvQkhOMEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZXb0dzN2xxMCt1emJlclVGdHFsOCttNE90WktnRlFuYjdmN3B5YUlTemM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1BYZlJaV0VUQ0FycDIzUkNEczdxaVhSSHlqd08vWXFKYTVqQUNCc0hHcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEhxRzZtbGpETVNDSVUxZlQvM2FZTWgvK0xEUTNtaXJBUXNlY2tJS1V5Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZHTGgyWGduOHBmUXdiVUpYamdrVnY0dDBpV09DVUhINHZBTWx6bko2YXNGL0x5Q3hvT21yck5vWS9vaHUxYU5ueUpqWktlZ1ZTUFFuOG9BQlRYZWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIyLCJhZHZTZWNyZXRLZXkiOiI4MXJKTkg2MUhYZGhQeG9sTjlaNVpzUjhrTGFsTUtJNU1XMVN6TmpaM1FrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc5NTg5MTcxMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1OUE5MENFMkUxRjJGQzJDNjQxMUVGMjUwQUNGQ0ZGQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQxMTExMjkxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3OTU4OTE3MTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjNBNjU4RjQyNTk3NUJGNzFFN0U0Q0M3RkEwRDAyNUIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0MTExMTI5MX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiOUxzWkFvcWNSem15YWc5Z2ZyOUpJdyIsInBob25lSWQiOiIzMjA1YjQyOS02M2M1LTRkNjktYjYxNy04YmQzYTUwODRkZTMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0l4cHk3SWJ6TTZsM1ExdXNnNjBubmNmSUZvPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImN1TUdDUWVpOTNrNlI2eTd6SlNQRGxjQm5rUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJLTkdWUThBNCIsIm1lIjp7ImlkIjoiMjU0Nzk1ODkxNzExOjEwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IirCsMKpT3JuZWgjXCLwn5GMIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOS1VrNEFDRU9uL25MNEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJhUWMvSGRMTFI2eGxPS2hXa3F3ME8wVEdyQmtLcldWWWtma2NrTEVxWFR3PSIsImFjY291bnRTaWduYXR1cmUiOiJoWExjeUpBK09xVzNsTnRPMCswajRhd0p3NnBoZU9PUWM4SHl2eU9idGJTRUg2MlJkN1REWUZ6T3hwMzFvRU1RZnovYlBOSWNDdmNhU05UcEdQQllDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQVIzU1VmaTFTc2tUSWt2K09GdkRkZTR0ZWREVDhwSzgveFBtN1RHYWxGblhQOURwelJpRTlDS093SWl1UnhpMkR3TW9QUEVoT3pYWDl2dE5lU2RDZ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3OTU4OTE3MTE6MTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV2tIUHgzU3kwZXNaVGlvVnBLc05EdEV4cXdaQ3ExbFdKSDVISkN4S2wwOCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0MTExMTI4OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMRDIifQ==';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.OWNER_NAME || 'CORNEH';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.OWNER_NUMBER || '254735663787';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || '';
const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';
const reactemoji = process.env.EMOJI || '💚';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'true';
const anticallmsg = process.env.ANTICALL_MSG || 'Keith declined your 🤙 call';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  reactemoji,
  autobio,
  antilink: groupControl,  // Use groupControl for antilink
  antibad: groupControl,   // Use groupControl for antibad
  mode,
  prefix,
  anticall,
  autolike,
  anticallmsg,
  mycode,
  author,
  herokuAppname,
  herokuapikey,
  url,
  gurl,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  session,
  antitag,
  antidelete
};
