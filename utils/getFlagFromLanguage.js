import { SpainFlagIcon, UsaFlagIcon } from '../components/icons';

export function getFlagFromLanguage(lang) {
	switch (lang) {
		case 'es':
			return <SpainFlagIcon />;
		case 'en':
			return <UsaFlagIcon />;
		default:
			return <UsaFlagIcon />;
	}
}
