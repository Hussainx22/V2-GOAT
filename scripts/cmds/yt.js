const fs = require('fs-extra');
const axios = require('axios');

module.exports.config = {
  name: "yt",
  version: "1.0.",
  role: 0,
  author: "Nazrul",
  description: "Youtube Video Downloader",
  category: "video downloader",
  usages: "[youtube video link]",
  countDowns: 2
};

module.exports.onStart = async function ({ api, event, args }) {
  let link = args.join(" ");

  if (!link) {
    api.sendMessage("Please put a valid Youtube video link", event.threadID, event.messageID);
    return;
  }

  api.sendMessage("𝐷𝑜𝑤𝑛𝑙𝑜𝑎𝑑𝑖𝑛𝑔 𝑌𝑜𝑢𝑡𝑢𝑏𝑒 𝑉𝑖𝑑𝑒𝑜 ⛱️", event.threadID, event.messageID);

  try {
   let path = __dirname + `/cache/`;
    const response = await axios.get(`https://apis-x5.onrender.com/ytv?url=${encodeURI(link)}&apikey=syugg`);
    await fs.ensureDir(path);
   path += 'N4ZR9L.mp4';
    const data = response.data.result;
    const vid = (await axios.get(data.url, { responseType: "arraybuffer" })).data;
    fs.writeFileSync(path, Buffer.from(vid, 'stream'));
    api.sendMessage({
      body: `𝐷𝑜𝑤𝑛𝑙𝑜𝑎𝑑 𝑆𝑢𝑐𝑐𝑠𝑒𝑠𝑠𝐹𝑢𝑙𝑙 🖤⛱️`, attachment: fs.createReadStream(path)
    }, event.threadID, () => fs.unlinkSync(path), event.messageID);

  } catch (e) {
    api.sendMessage(`${e}`, event.threadID, event.messageID);
  };
};