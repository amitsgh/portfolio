import Link from "@/app/components/Link";
import ProfileImage from "@/public/image/profile.jpg";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function HeroPage() {
	return (
		<section className="flex flex-col items-start gap-8">
			<div className="flex flex-row items-center justify-center gap-6 text-xl">
				<Image
					className="w-16 h-16 rounded-xl shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]"
					src={ProfileImage}
					alt="profile image"
				/>
				<h4 className="text-2xl tracking-wide text-primary">
					Amit Singh
				</h4>
			</div>
			<div className="flex flex-col gap-3">
				<h1 className="text-4xl text-primary leading-snug">
					Data Scientics & Full-Stack Developer
				</h1>
				<p className="text-lg text-secondary leading-relaxed">
					I am a software engineer who builds for the web with a
					design-oriented approach.
				</p>
			</div>

			<div className="flex animate-in gap-4 text-sm">
				<Link
					className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
					href="https://linkedin.com/in/amitsgh1911"
				>
					Linkedin
					<ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
				</Link>
				<Link
					className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
					href="https://twitter.com/amitsgh18"
				>
					Tweets
					<ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
				</Link>
				<Link
					href="mailto:amitsingh1911nov@gmail.com"
					className="flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
				>
					Gmail
					<ArrowUpRightIcon className="h-4 w-4 text-tertiary" />
				</Link>
			</div>
		</section>
	);
}
