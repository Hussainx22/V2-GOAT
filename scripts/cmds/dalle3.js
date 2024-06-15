const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');
const baseApiUrl = async () => {
  const base = await axios.get(`https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`);
  return base.data.api;
}; 

module.exports = {
  config: {
    name: "dalle3",
    aliases: ["dalle","bing","create"],
    version: "1.0",
    author: "Dipto",
    countDown: 15,
    role: 0,
    description: "Generate images powerby by Dalle3",
    longDescription: "Generate images by Unofficial Dalle3",
    category: "download",
    guide: {
      en: "{pn} prompt"
    }
  },

  onStart: async function ({ api, event, args }) {
  const prompt = event.messageReply?.body.split("dalle")[1] ||  args.join(" ");
  if (!prompt) {
   return api.sendMessage("❌| Wrong Formet .✅ | Use 17/18 years old boy/girl watching football match on tv and written Dipto and 69 on the back of his Dress , 4k",event.threadID,event.messageID);
  }
    try {
const tl = ["1wFVcn7gqiAXxkid2zhUh2O9kuxhAl4qUJUPqPbrkoVJ2lDyNCCz3Lp-nJH_zGByhscXFWs8ctWRl9iqhuIl2taub04ffT4wuB1fH5IWF88UqmyHqVoZyhPUQ9u2necHkO1kSKoTN4BZkic0jpQY5tlv9WFOAEbnmviZejMOTqQ4t42dytybdqkgOdCUEDoOcMjhjF_N_G_rIUmz44fZRpQ","1wFVcn7gqiAXxkid2zhUh2O9kuxhAl4qUJUPqPbrkoVJ2lDyNCCz3Lp-nJH_zGByhscXFWs8ctWRl9iqhuIl2taub04ffT4wuB1fH5IWF88UqmyHqVoZyhPUQ9u2necHkO1kSKoTN4BZkic0jpQY5tlv9WFOAEbnmviZejMOTqQ4t42dytybdqkgOdCUEDoOcMjhjF_N_G_rIUmz44fZRpQ"];
const cookies = tl[Math.floor(Math.random() * tl.length)];
      const w = await api.sendMessage("𝙋𝙧𝙤𝙘𝙚𝙨𝙨𝙞𝙣𝙜 𝙥𝙡𝙚𝙖𝙨𝙚 𝙒𝙖𝙞𝙩 🖤💫", event.threadID);

const response = await axios.get(`${await baseApiUrl()}/dalle?prompt=${prompt}&key=dipto008&cookie=${cookies}`)
      const data = response.data.imgUrls;
      if (!data || data.length === 0) {
        api.sendMessage("Empty response or no images generated.",event.threadID,event.messageID);
      }
      const diptoo = [];
      for (let i = 0; i < data.length; i++) {
        const imgUrl = data[i];
        const imgResponse = await axios.get(imgUrl, { responseType: 'arraybuffer' });
        const imgPath = path.join(__dirname, 'assests', `${i + 1}.jpg`);
        await fs.outputFile(imgPath, imgResponse.data);
        diptoo.push(fs.createReadStream(imgPath));
      }
      await api.unsendMessage(w.messageID);
      await api.sendMessage({
  body: `✅ |Naw Baby Tumar Generated Pic<😘`,
        attachment: diptoo
      },event.threadID, event.messageID);
    } catch (error) {
      console.error(error);
      await api.sendMessage(`Generation failed!\nError: ${error.message}`,event.threadID, event.messageID);
    }
  }
}