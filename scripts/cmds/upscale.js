const axios = require('axios');
const tinyurl = require('tinyurl');

module.exports = {
	config: {
		name: "upscale",
		aliases: ["4k", "remini"],
		version: "1.0",
		author: "Nazrul",
		countDown: 15,
		role: 0,
		longDescription: "Upscale your image.",
		category: "image",
		guide: {
			en: "{pn} reply to an image"
		}
	},

	onStart: async function ({ message, args, event, api }) {
		const getImageUrl = () => {
			if (event.type === "message_reply") {
				const replyAttachment = event.messageReply.attachments[0];
				if (["photo", "sticker"].includes(replyAttachment?.type)) {
					return replyAttachment.url;
				} else {
					throw new Error("𝐘𝐨𝐮 𝐌𝐮𝐬𝐭 𝐑𝐞𝐩𝐥𝐲 𝐚 𝐏𝐡𝐨𝐭𝐨 💫⛱️");
				}
			} else if (args[0]?.match(/(https?:\/\/.*\.(?:png|jpg|jpeg))/g) || null) {
				return args[0];
			} else {
				throw new Error("(⁠┌⁠・⁠。⁠・⁠)⁠┌ | Reply to an image.");
			}
		};

		try {
			const imageUrl = await getImageUrl();
			const shortUrl = await tinyurl.shorten(imageUrl);

			message.reply("𝐏𝐥𝐞𝐚𝐬𝐞 𝐖𝐚𝐢𝐭 𝐄𝐧𝐡𝐚𝐧𝐜𝐢𝐧𝐠 𝐘𝐨𝐮𝐫 𝐏𝐡𝐨𝐭𝐨 💫⛱️⁠");

			const response = await axios.get(`https://www.api.vyturex.com/upscale?imageUrl=${shortUrl}`);
			const resultUrl = response.data.resultUrl;

			message.reply({ body: "𝐈𝐦𝐚𝐠𝐞 𝐔𝐩𝐬𝐜𝐚𝐥𝐞𝐝 𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐅𝐮𝐥𝐥𝐲 ⚡💫", attachment: await global.utils.getStreamFromURL(resultUrl) });
		} catch (error) {
			message.reply("┐⁠(⁠￣⁠ヘ⁠￣⁠)⁠┌ | Error: " + error.message);
			// Log error for debugging: console.error(error);
		}
	}
};
