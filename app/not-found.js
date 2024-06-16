import Link from "./components/Link";

export const metadata = {
	title: "404 | Amit Singh",
	description: "Uh oh! This page does not exist",
};

export default function Custom404() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen gap-2">
			<h1 className="text-3xl font-bold tracking-tight text-primary">
				404
			</h1>
			<p className="text-secondary">
				Uh oh! This page does not exists, maybe you clicked an old link
				or misspelled. Please try again…
			</p>
			<div className="h-2" />
			<Link href="/" underline>
				Return Home
			</Link>
		</div>
	);
}
