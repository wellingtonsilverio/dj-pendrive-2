import * as Discord from 'discord.js';
import * as DotEnv from 'dotenv';

function init() {
	DotEnv.config();
	const client = new Discord.Client();

	client.on('ready', () => {
		console.log(`Logged in as ${client?.user?.tag}!`);
	});

	client.on('message', (msg) => {
		if (msg.content === 'ping') {
			msg.reply('Pong!');
		}
	});

	client.login(process.env.discord_bot_token);
}

init();
