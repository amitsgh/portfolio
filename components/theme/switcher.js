"use client";

import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import useSound from "use-sound";

export default function ThemeSwitcher(props) {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();
	const [playLight] = useSound("/sounds/light-on.mp3");
	const [playDark] = useSound("/sounds/light-off.mp3");

	useEffect(() => {
		setMounted(true);
	}, []);

	const handleToggle = useCallback(() => {
		const newTheme = resolvedTheme === "dark" ? "light" : "dark";
		if (newTheme === "dark") playLight();
		else playDark();
		setTheme(newTheme);
	}, [resolvedTheme, playLight, playDark, setTheme]);

	if (!mounted) {
		return null;
	}

	return (
		<button
			onClick={handleToggle}
			className="bg-[var(--lime-2)] ring-2 text-[var(--lime-11)] active:bg-[var(--lime-3)] ring-[var(--lime-7)] cursor-pointer group hover:scale-[1.15] active:scale-105 fixed bottom-10 right-8 flex flex-col items-center justify-center p-2 rounded-full transition-all"
			aria-label="Toggle theme"
			title="Toggle theme"
		>
			{resolvedTheme === "dark" ? (
				<MoonIcon {...props} />
			) : (
				<SunIcon {...props} />
			)}
		</button>
	);
}
