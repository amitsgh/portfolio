import Card from "@/app/components/custom-card";
import Link from "@/app/components/custom-link";
import SocialLinks from "@/app/components/social-link";
import CoverImage from "@/public/image/cover.jpg";
import ProfileImage from "@/public/image/profile.jpg";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const projects = [
    {
        slug: "project-1",
        image: CoverImage,
        title: "Project One",
        summary: "This is a summary of Project One.",
    },
    {
        slug: "project-2",
        image: CoverImage,
        title: "Project Two",
        summary: "This is a summary of Project Two.",
    },
    {
        slug: "project-3",
        image: CoverImage,
        title: "Project Three",
        summary: "This is a summary of Project Three.",
    },
];

export default function Home() {
    return (
        <main className="mx-auto flex min-h-screen max-w-xs flex-col items-start justify-between gap-64 pt-32">
            {/* <section className="flex flex-col items-start gap-8">
                <div className="flex flex-row items-center justify-center gap-6 text-xl">
                    <Image
                        className="group h-16 w-16 cursor-pointer rounded-lg bg-[var(--jade-2)] p-1 text-[var(--jade-11)] ring-2 ring-[var(--jade-7)] transition-all hover:scale-[1.15] active:scale-105 active:bg-[var(--jade-3)]"
                        src={ProfileImage}
                        alt="profile image"
                    />
                    <h4 className="text-2xl tracking-wide">Amit Singh</h4>
                </div>

                <div className="flex flex-col gap-3">
                    <h1 className="text-4xl leading-snug">
                        Data Scientics & Full-Stack Developer
                    </h1>
                    <p className="text-lg leading-relaxed text-secondary">
                        I am a software engineer who builds for the web with a
                        design-oriented approach.
                    </p>
                </div>

                <SocialLinks />
            </section> */}

            <section className="animate-in flex flex-col gap-8">
                <p className="tracking-tight text-secondary">Pinned Projects</p>
                <Card projects={projects} />
            </section>

            <section className="animate-in flex flex-col gap-8">
                <div className="space-y-4">
                    <Link
                        className="group flex items-center gap-2 tracking-tight text-secondary"
                        href="/blog"
                    >
                        Latest blogs
                        <ArrowUpRightIcon className="h-5 w-5 text-tertiary transition-all group-hover:text-primary" />
                    </Link>
                    <p className="max-w-lg text-tertiary">
                        I occasionally write about programming, productivity,
                        and more. Check me out and subscribe to stay up to date.
                    </p>
                </div>
                {/* <PostList posts={blogs} /> */}
            </section>
        </main>
    );
}
