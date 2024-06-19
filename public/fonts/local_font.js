import localFont from "next/font/local";

export const neueMontreal = localFont({
	src: [
		{
			path: "./NeueMontreal-Regular.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./NeueMontreal-Medium.otf",
			weight: "500",
			style: "normal",
		},
		{
			path: "./NeueMontreal-Bold.otf",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-neue-montreal",
});
