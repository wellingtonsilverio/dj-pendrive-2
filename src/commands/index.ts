import playWithYoutubeURL from './youtube/playWithURL';

const commands = (message: any, command: string, args: string[]): void => {
	switch (command) {
		case 'help':
			break;

		default:
			if (command.includes('youtube.com')) playWithYoutubeURL(message, command);
			break;
	}
};

export default commands;
