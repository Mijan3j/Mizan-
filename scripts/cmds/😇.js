 module.exports = {
 config: {
	 name: "😇",
	 version: "1.0",
	 author: "Joy-ahmed",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "😇") {
 return message.reply({
 body: "     「🌻༉༊𝗬𝗼𝘂 𝗔𝗿𝗲 𝗦𝗼𝗺𝗲 𝗢𝗻𝗲 𝗖𝗹𝗼𝘀𝗲 𝗧𝗼 𝗠𝗲 𝗙𝗮𝗿 𝗔𝘄𝗮𝘆ღ༊🥀🥰\n\n🖤🌸༊আপনি༊আমার༊দুরে༊থাকা༊ভিষণ༊কাছের༊কেউ༊ღ࿐😽\n\n••\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n𝗠𝗗 𝐌𝐈𝐙𝐀𝐍 𝐀𝐍𝐃 𝐑𝐀𝐊𝐈𝐁」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/sXQgbth.mp4")
 });
 }
 }
}
