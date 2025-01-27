import { SpainFlagIcon, UnitedStatesFlagIcon } from "@/components/icons";
import type { Locale } from "@/constants/i18n";

export function getFlagFromLanguage(language: Locale) {
	switch (language) {
		case "es":
			return <SpainFlagIcon />;
		case "en":
			return <UnitedStatesFlagIcon />;
		default:
			return <UnitedStatesFlagIcon />;
	}
}
