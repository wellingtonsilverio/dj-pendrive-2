import * as Discord from 'discord.js';
import * as DotEnv from 'dotenv';
import commands from './commands';

const PREFIX = '@dj';

function init() {
	DotEnv.config();
	const client = new Discord.Client();

	client.on('ready', () => {
		console.log(`Logged in as ${client?.user?.tag}!`);
	});

	client.on('message', (message) => {
		if (message.author.bot) return;
		if (message.channel.type === 'dm') return;
		if (!message.content.startsWith(PREFIX)) return;

		const args: string[] = message.content.slice(PREFIX.length).trim().split(/ +/g);

		if (!args) return;

		const command: string | undefined = args?.shift()?.toLowerCase();

		if (!command || command === '') return;

		if (command) commands(command, args);

		return;
	});

	client.login(process.env.discord_bot_token);
}

init();
