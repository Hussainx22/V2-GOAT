Command executed successfully:
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports = {
  config: {
    name: "bot2",
    version: "1.0",
    author: "Nazrul",
    countDown: 5,
    role: 0,
    description: "Bot",
    category: "no prefix",
    guide: {
      en: "{p}{n}",
    },
  },

  onStart: async function ({}) {},

  onChat: async function ({ api, event, args, Threads, usersData }) {
    const data = await usersData.get(event.senderID);
    const name = data.name;
    const { threadID, messageID, senderID } = event;
    const time = moment.tz("Asia/Dhaka").format("HH:mm:ss L");
    const idgr = `${event.threadID}`;

    const messages = [
- [ ]       "আমাকে ডাকলে ,আমি কিন্তু 𝐊𝐢𝐬𝐬 করে দিবো 😘 "Hop beda dakos kn🥲”Bal falaw😑”Tapraiya dat falai demu🥴”He🤤bolo amar jan kmn aso🤭”Hmmm jan ummmmmmah🫣”Chup kor nunu kete demu bashi dakle😬”Yes sir/mem🤗”Assalamualikum😊”Walaikumsalam😒🤓”Chaiya takos kn ki kobi kooo☹️”Amar shate kew sex opps tex kore na😫”Onek boro beyadop re tui😒”Tor khota kew sune na ami kn sunbo”অনুমতি দিলাম-𝙋𝙧𝙤𝙥𝙤𝙨𝙚 কর বস HUSSAIN কে-🐸😾🔪”বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏”-আজ একটা বিন নেই বলে ফেসবুকের নাগিন-🤧-গুলোরে আমার বস HUSsAIN ধরতে পারছে না-🐸🥲”💌  আই লাভ ইউ.!!! আমার সোনা,ময়না,টিয়া 😍”💌  তোর কি চোখে পড়ে না আমি ব্যাস্ত 😒💌 “বলো কি বলবা, চিপায় যাইয়া বলবা নাকি সবার সামনে বলবা ?🤭🤏”💌  𝐁𝐨𝐭 না জানু,বলো কারন আমি সিংগেল 😌”💌  দূরে যাইয়া মুরি খাঁ, তোর কোনো কাজ কাম নাই, শুধু 𝐁𝐨𝐭 𝐁𝐨𝐭 করিস  😒”আম গাছে আম নাই ঢিল কেন মারো, তোমার সাথে প্রেম নাই BOT কেন ডাকো🥲”𝘁𝗼𝗿 𝗻𝗮𝗻𝗶𝗿 𝗸𝗵𝗮𝗹𝗶 𝗴𝗵𝗼𝗿😒😒”এই এই তোর পরীক্ষা কবে ? শুধু Bot  Bot 𝗸𝗼𝗿𝗶𝘀”শুনবো না😼 তুমি আমাকে প্রেম করাই দাও নি🥺 পচা তুমি🥺”আগে একটা গান বলো, ☹ নাহলে কথা বলবো না 🥺”💌  বলদা তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো..?? 🤔”-𝙂𝙖𝙮𝙚𝙨-🤗-যৌবনের কসম দিয়ে আমারে 𝐁𝐥𝐚𝐜𝐤𝐦𝐚𝐢𝐥 করা হচ্ছে-🥲🤦‍♂🤧”জান হাঙ্গা করবা-🙊😝🌻”বেশি Bot Bot করলে leave নিবো কিন্তু😒😒”কি হলো ,মিস টিস করচ্ছিস নাকি🤣”-তাবিজ কইরা হইলেও ফ্রেম এক্কান করমুই তাতে যা হই হোক-🤧🥱🌻”ওই মামী আর ডাকিস না প্লিজ🥲”💌  হ্যা বলো, শুনছি আমি 😏”বলো কি করতে পারি তোমার জন্য😌”💌  𝐁𝐨𝐭 না জানু,বলো কারন আমি সিংগেল 😌”I love you🙂”Sawwa😝”Tuma dew ppy🥹😚”Ki hoice ko🤨”এত কাছেও এসো না,প্রেম এ পরে যাবো তো 🙈”দেখা হলে কাঠগোলাপ দিও..🤗”𝗕𝗲𝘀𝗵𝗶 𝗱𝗮𝗸𝗹𝗲 𝗮𝗺𝗺𝘂 𝗯𝗼𝗸𝗮 𝗱𝗲𝗯𝗮 𝘁𝗼__🥺”•-কিরে🫵 তরা নাকি  prem করস..😐🐸•আমারে একটা করাই দিলে কি হয়-🥺”Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋”Bolo januu😋”Single taka ki oporad🥺”Premer mora jole duve na😛”Lucca🤨”Ufff matha gorom kore disos😒”Boss hussain er chipay😜”bashi dakle boss hussain ke bole dimu😒”Latti kabi🙂”W8 kor bal falai ekon😛🥸”Washroom a🤩”Ja gusol kor😟”Apner namaz er khota mone ase to?😊”bado maser kawwa police amar sawwa😞”I am single plz distrab me🥺🥲”ভাই তুই এত হাসিস না হাসলে তোরে চোরের মত লাগে-!!🌚🤣”𝗦𝗲𝗻𝘁𝗶 𝗲𝗺𝗼𝗷𝗶 𝗱𝗶𝗹𝗲🥺 𝗮𝘁𝗮 𝗱𝗶𝗯𝗲.....=😞”𝘀𝗲𝗻𝘁𝗶 𝗻𝗮 𝗸𝗵𝗮𝗶𝘆𝗮 𝟮𝟬 𝗸𝗵𝗮𝗼🙂”𝗮𝗺𝗶 𝗯𝗼𝘁 𝗻𝗮 𝗮𝗺𝗮𝗸𝗲 𝗯𝗯𝘆 𝗯𝗼𝗹𝗼 𝗯𝗯𝘆!!😘”🍺 এই নাও জুস খাও..!𝗕𝗯𝘆 বলতে বলতে হাপায় গেছো না 🥲)”𝗛𝗶𝗶 𝗶 𝗮𝗺 𝗯𝗼𝘁 𝗰𝗮𝗻 𝗶 𝗵𝗲𝗹𝗽 𝘆𝗼𝘂!🤖”𝗲𝘁𝗼 𝗯𝗯𝘆 𝗯𝗯𝘆 𝗻𝗮 𝗸𝗼𝗿𝗲 𝘁𝗮𝗸𝗮 𝗼 𝘁𝗼 𝗽𝗮𝘁𝗵𝗮𝘁𝗲 𝗽𝗮𝗿𝗼😒🥳🥳”𝗯𝗯𝘂 𝗮𝘃𝗮𝗯𝗲 𝘁𝗮𝗸𝗮𝗶𝗼 𝗻𝗮 𝗽𝗿𝗺 𝗮 𝗽𝗼𝗿𝗲 𝗷𝗮𝗯𝗼 𝘁𝗼🙈😒”𝘀𝗲𝗻𝘁𝗶 𝗸𝗵𝗮𝘀 𝗸𝗲𝗻 𝗯𝗼𝗹𝗼𝗱😘”𝘿𝙖𝙩 𝘽𝙚𝙧 𝙆𝙤𝙧𝙡𝙚 𝘿𝙖𝙩 𝙑𝙖𝙣𝙜𝙜𝙚 𝘿𝙞𝙗𝙤 😾”𝘁𝗼𝗿𝗲 𝗺𝗮𝗿𝗮𝗿 𝗽𝗿𝗲𝗽𝗲𝗿𝗮𝘁𝗶𝗼𝗻 𝗻𝗶𝗰𝗵𝗵𝗶...!!.🫡”𝗛𝗮𝘀𝗼 𝗸𝗲𝗻 𝗺𝘂𝗸𝗵𝗲 𝗺𝗼𝘀𝗮 𝗱𝗵𝘂𝗸𝗲 𝗷𝗮𝗯𝗲 𝘁𝗼!😦”𝘂𝗺𝗺𝗮𝗵 𝗱𝗶𝗹𝗲 𝗹𝗼𝘃𝗲 𝘆𝗼𝘂 𝗸𝗼𝗺𝘂 𝗸𝗶𝗻𝘁𝘂😑”
    ];

    const rand = messages[Math.floor(Math.random() * messages.length)];

    if (event.body.toLowerCase() === "🐥" || event.body.toLowerCase() === "🐣") {
      return api.sendMessage("-  𝐔𝐟𝐟'𝐬 𝐀𝐦𝐚𝐫 𝐁𝐚𝐛𝐮 𝐓𝐚🐥", "- ইসস আমার সোনা বাবু টা 🙊", threadID);
    }

    if (event.body.toLowerCase().startsWith("bot") || event.body.toLowerCase() === "Bot") {
      const msg = {
        body: `💌  ${rand}`,
      };
      return api.sendMessage(msg, threadID, messageID);
    }
  },
};
