import * as ytdl from 'ytdl-core';

const playWithYoutubeURL = async (message: any, url: string) => {
	console.log('url', url);
	const voiceChannel = message.member.voice.channel;

	if (!voiceChannel) {
		return message.channel.send('Vai la na sala e me chama denovo! eu não sou adivinha para saber onde tocar.');
	}

	const permissions = voiceChannel.permissionsFor(message.client.user);

	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send('Cade meus vips e minha pulseira de DJ? fala para os seguranças me liberar lá!');
	}

	const songInfo = await ytdl.getInfo(url);
	const song = {
		title: songInfo.videoDetails.title,
		url: songInfo.videoDetails.video_url,
	};

	console.log('song', song);
};

export default playWithYoutubeURL;
