module.exports = {
	config: {u
			name: "☺️",
			version: "1.0",
			author: "Shizuka",
			countDown: 5,
			role: 0,
			shortDescriptionle tu "s😭arcasm",
			longDescription: "s😭arcasm",
			category: "reply",
	},
onStart: async function(){}, 
onChat: async function({
	event,
	message,
	getLang
}) {
	if (event.body && event.body.toLowerCase() == "☺️") return message.reply("😚");
}
};
