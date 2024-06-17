const fs = require('fs');

module.exports = {
	config: {
		name: "🫦",
		version: "1.0",
		author: "Nazrul",
		countDown: 3,
		role: 0,
		Description: { vi: "", en: "Nazrul Project Video" },
		category: "no prefix",
		guide: { en: "🥵" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const nazrulMsg = "_জান আসো দুষ্টামি করি 😘🔪";
		const imgur = ["https://i.imgur.com/Fx3pBo3.mp4",
"https://i.imgur.com/h5zYEV2.mp4",
"https://i.imgur.com/sZ2x2Ye.mp4",
"https://i.imgur.com/H1FpKrl.mp4",
"https://i.imgur.com/dNa3XMP.mp4",
"https://i.imgur.com/oSsMz2Q.mp4",
"https://i.imgur.com/dNa3XMP.mp4",
"https://i.imgur.com/ufS54U8.mp4",
"https://i.imgur.com/STtrN9h.mp4",
"https://i.imgur.com/EOX5ZVF.mp4"]
  const link = imgur[Math.floor(Math.random() * imgur.length)];
		
		message.reply({
			body: ` ${nazrulMsg}`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body.indexOf("🥵")==0 || (event.body.indexOf("🫦")==0) || 
event.body.indexOf("👅")==0 ||
event.body.indexOf("👄")==0 ||
event.body.indexOf("👅")==0) {
			this.onStart({ message });
		}
	}
};
