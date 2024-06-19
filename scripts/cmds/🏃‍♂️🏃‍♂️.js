const fs = require("fs");
module.exports.config = {
	name: "🏃‍♂️",
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
	if (event.body.indexOf("Bye")==0 ||    event.body.indexOf("Byy")==0 ||
  event.body.indexOf("Tata")==0 ||    
event.body.indexOf("🏃‍♀️")==0 ||
event.body.indexOf("🚴‍♂️")==0 || 
 event.body.indexOf("Byee")==0 || event.body.indexOf("tata")==0) {
		var msg = {
				body: "বায় বায় কলিজা 🫂",
				attachment: fs.createReadStream(__dirname + `/Nazrul/byebye.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤍", event.messageID, (err) => {}, true)
		}
	}
	module.exports.onStart = function({ api, event, client, __GLOBAL }) {

  }
