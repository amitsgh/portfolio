import Link from "./components/custom-link";

export const metadata = {
	title: "404 | Amit Singh",
	description: "Uh oh! This page does not exist",
};

export default function Custom404() {
	return (
		<div className="flex min-h-screen max-w-xs mx-auto flex-col items-start gap-4 pt-32">
			<h1 className="text-5xl font-bold tracking-wider text-primary">
				404
			</h1>
			<p className="text-secondary">
				Uh oh! This page does not exists, maybe you clicked an old link
				or misspelled. Please try again…
			</p>

			<Link className="mt-16" href="/" underline>
				Return Home
			</Link>
		</div>
	);
}
