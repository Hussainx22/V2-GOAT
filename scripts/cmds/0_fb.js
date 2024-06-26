const fs = require('fs-extra');
const axios = require('axios');

module.exports.config = {
  name: "fb",
  version: "1.0.",
  role: 0,
  author: "Nazrul",
  description: "Facebook Video Downloader",
  category: "video downloader",
  usages: "[Fb video link]",
  countDowns: 2
};

module.exports.onStart = async function ({ api, event, args }) {
  let link = args.join(" ");

  if (!link) {
    api.sendMessage("Please put a valid Facebook video link", event.threadID, event.messageID);
    return;
  }

  api.sendMessage("𝐷𝑜𝑤𝑛𝑙𝑜𝑎𝑑𝑖𝑛𝑔 𝐹𝑎𝑐𝑒𝑏𝑜𝑜𝑘 𝑉𝑖𝑑𝑒𝑜 ...!!", event.threadID, event.messageID);

  try {
   let path = __dirname + `/cache/`;
    const response = await axios.get(`https://x5-apis.onrender.com/api/download/facebook?url=${encodeURI(link)}`);
    await fs.ensureDir(path);
   path += 'N4ZR9L.mp4';
    const data = response.data.result;
    const vid = (await axios.get(data.video_sd, { responseType: "arraybuffer" })).data;
    fs.writeFileSync(path, Buffer.from(vid, 'stream'));
    api.sendMessage({
      body: `𝐷𝑜𝑤𝑛𝑙𝑜𝑎𝑑 𝑆𝑢𝑐𝑐𝑠𝑒𝑠𝑠𝐹𝑢𝑙𝑙 🐥💫 `, attachment: fs.createReadStream(path)
    }, event.threadID, () => fs.unlinkSync(path), event.messageID);

  } catch (e) {
    api.sendMessage(`${e}`, event.threadID, event.messageID);
  };
};
