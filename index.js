require('dotenv').config();

const tmi = require('tmi.js');

const client = new tmi.Client({
	options: { debug: true },
	connection: {
		secure: true,
		reconnect: true
	},
	identity: {
        username: process.env.TWITCH_BOT_USERNAME,
        password: process.env.TWITCH_OAUTH_TOKEN
      },
	channels: ["Ech0riath"]
});

client.connect();

client.on("message", (channel, tags, message, self) => {
	if (self) return; // bot kendi gönderdiği mesajları görmezden gelmeli.

	if (message == "selam") {
		client.say(channel, "@" + tags["username"] + " Selam, hoş geldin");
	}
});