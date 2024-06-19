const fs = require("fs");
module.exports.config = {
	name: "🚬",
   version: "1.0.1",
	role: 0,
	author: "Nazrul",
	description: "Voice No Prefix ",
	category: "Voice",
	usages: "??",
    countDowns: 5, 
};

module.exports.onChat = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🚬")==0 ||    event.body.indexOf("🚬")==0 ||
  event.body.indexOf("🍷")==0 ||     
 event.body.indexOf("🚬")==0 || event.body.indexOf("🍾")==0) {
		var msg = {
				body: "কি হয়ছে গো সেন্টি খাচ্ছো কেন  🤨",
				attachment: fs.createReadStream(__dirname + `/Nazrul/sentikawkno.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤨", event.messageID, (err) => {}, true)
		}
	}
	module.exports.onStart = function({ api, event, client, __GLOBAL }) {

  }
