import HeroPage from "@/app/Pages/Hero";
import BlogPage from "./Pages/Blog";
import ProjectPage from "./Pages/Project";

export default function Home() {
	return (
		<main className="flex min-h-screen max-w-xs mx-auto flex-col items-start justify-between gap-64 pt-32">
			<HeroPage />
			<ProjectPage />
			<BlogPage />
			{/* <div>
				<EllipsisHorizontalCircleIcon className="w-8 h-8 animate-spin anim text-tertiary fixed right-8 bottom-16" />
			</div> */}
		</main>
	);
}
