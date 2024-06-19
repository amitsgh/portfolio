import Link from "@/app/components/Link";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

export default function BlogPages() {
	return (
		<section className="flex animate-in flex-col gap-8">
			<div className="space-y-4">
				<Link
					className="group flex items-center gap-2 tracking-tight text-secondary"
					href="/blog"
				>
					Latest blogs
					<ArrowUpRightIcon className="h-5 w-5 text-tertiary transition-all group-hover:text-primary" />
				</Link>
				<p className="max-w-lg text-tertiary">
					I occasionally write about programming, productivity, and
					more. Check me out and subscribe to stay up to date.
				</p>
			</div>
			{/* <PostList posts={blogs} /> */}
		</section>
	);
}
