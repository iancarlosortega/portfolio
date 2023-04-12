export function getFlagFromLanguage(lang) {
	switch (lang) {
		case 'es':
			return '/icons/spain.svg';
		case 'en':
			return '/icons/usa.svg';
		default:
			return '/icons/spain.svg';
	}
}
