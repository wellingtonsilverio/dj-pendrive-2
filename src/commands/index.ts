import playWithYoutubeURL from './youtube/playWithURL';

const commands = (command: string, args: string[]): void => {
	switch (command) {
		case 'help':
			break;

		default:
			if (command.includes('youtube.com')) playWithYoutubeURL(command);
			break;
	}
};

export default commands;
