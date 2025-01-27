"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SunnyIcon, MoonIcon } from "@/components/icons";

const themes = ["light", "dark"];

export const ThemeToggleButton = () => {
	const [mounted, setMounted] = useState(false);
	const { theme: currentTheme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	const handleChangeTheme = () => {
		setTheme(currentTheme === "light" ? "dark" : "light");
	};

	return (
		<div className="flex items-center p-[1px] rounded-3xl bg-primary dark:bg-zinc-600 relative z-10">
			{themes.map((theme) => (
				<button
					key={theme}
					type="button"
					className={`${
						theme === currentTheme && mounted
							? "bg-white text-secondary"
							: "text-white"
					} rounded-3xl p-2`}
					onClick={handleChangeTheme}
					aria-label="Toggle theme">
					{theme === "light" ? <SunnyIcon /> : <MoonIcon />}
				</button>
			))}
		</div>
	);
};
