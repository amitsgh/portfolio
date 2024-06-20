"use client";

import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import useSound from "use-sound";

export default function ThemeSwitcher({ ...props }) {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();
	const [playLight] = useSound("/sounds/light-on.mp3");
	const [playDark] = useSound("/sounds/light-off.mp3");

	useEffect(() => {
		setMounted(true);
	}, []);

	function handleToggle(value) {
		if (value == "dark") playLight();
		else playDark();

		setTheme(value);
	}

	if (!mounted) {
		return (
			<Image
				src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
				width={36}
				height={36}
				sizes="36x36"
				alt="Loading Light/Dark Toggle"
				priority={false}
				title="Loading Light/Dark Toggle"
			/>
		);
	}

	return (
		<button
			onClick={() =>
				resolvedTheme === "dark"
					? handleToggle("light")
					: handleToggle("dark")
			}
			className="cursor-pointer group hover:scale-[1.15] active:scale-105 fixed bottom-10 right-8 flex flex-col items-center justify-between p-4 bg-secondary hover:bg-tertiary rounded-xl transition-all"
		>
			{resolvedTheme === "dark" ? (
				<MoonIcon {...props} />
			) : (
				<SunIcon {...props} />
			)}
		</button>
	);
}
