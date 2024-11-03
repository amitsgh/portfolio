import Link from "@/components/custom-link";
import { MailIcon } from "@/components/icons/MailIcon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import EmblaCarousel from "@/components/ui/EmblaCarousel";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { RESUME_DATA } from "@/data/resume";
import CoverImage from "@/public/image/cover.jpg";
import ProfileImage from "@/public/image/profile.jpg";

const OPTIONS = { loop: true };

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
        <main className="relative mx-auto flex max-w-4xl scroll-my-12 flex-col gap-y-12 overflow-auto p-4 md:p-16 print:p-12">
            <Section className="space-y-8 print:space-y-6">
                <div className="flex items-center justify-between">
                    <div className="flex-1 space-y-1.5">
                        <h1 className="text-6xl tracking-wide">
                            {RESUME_DATA.name}
                        </h1>
                        <p className="max-w-md text-pretty font-mono text-secondary">
                            {RESUME_DATA.about}
                        </p>
                        <div className="flex gap-x-4 pt-4 font-mono text-sm text-secondary print:hidden">
                            {RESUME_DATA.contact.email ? (
                                <Button
                                    className="h-8 w-8"
                                    variant="ghost"
                                    size="icon"
                                    asChild
                                >
                                    <a
                                        href={`mailto:${RESUME_DATA.contact.email}`}
                                    >
                                        <MailIcon className="h-6 w-6" />
                                    </a>
                                </Button>
                            ) : null}
                            {RESUME_DATA.contact.social.map((social) => (
                                <Button
                                    key={social.name}
                                    className="h-8 w-8"
                                    variant="ghost"
                                    size="icon"
                                    asChild
                                >
                                    <a href={social.url}>
                                        <social.icon className="h-6 w-6" />
                                    </a>
                                </Button>
                            ))}
                        </div>
                    </div>

                    <Avatar className="h-28 w-28 bg-secondary">
                        <AvatarImage
                            alt={RESUME_DATA.name}
                            src={ProfileImage}
                        />
                        <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
                    </Avatar>
                </div>
            </Section>

            <Section>
                <h2 className="text-2xl">About</h2>
                <p className="text-pretty font-mono text-secondary">
                    {RESUME_DATA.summary}
                </p>
            </Section>

            <Section>
                <h2 className="text-2xl">Projects</h2>
                <p className="text-pretty font-mono text-secondary">
                    {RESUME_DATA.summary}
                </p>
            </Section>

            {/* <Project projects={projects} /> */}
            {RESUME_DATA.work.map((work) => {
                return (
                    <Card key={work.company}>
                        <CardHeader>
                            <div className="flex items-center justify-between gap-x-2 text-base">
                                <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                                    <a
                                        className="hover:underline"
                                        href={work.link}
                                    >
                                        {work.company}
                                    </a>

                                    <span className="inline-flex gap-x-1">
                                        {work.badges.map((badge) => (
                                            <Badge
                                                variant="secondary"
                                                className="ml-1 align-middle text-[10px]"
                                                key={badge}
                                            >
                                                {badge}
                                            </Badge>
                                        ))}
                                    </span>
                                </h3>
                                <div className="text-sm tabular-nums text-gray-500">
                                    {work.start} - {work.end}
                                </div>
                            </div>

                            <h4 className="font-mono text-sm leading-none">
                                {work.title}
                            </h4>
                        </CardHeader>
                        <CardContent className="mt-2 text-sm">
                            {work.description.split("\n").map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                        </CardContent>
                        <div className="mb-6 mt-2">
                            <CardContent className="media embla">
                                <EmblaCarousel
                                    slides={[
                                        ...work.media.videos.map((video) => ({
                                            url: video,
                                            type: "video", // Explicitly type as "video"
                                        })),
                                        ...work.media.images.map((image) => ({
                                            url: image,
                                            type: "image", // Explicitly type as "image"
                                        })),
                                        ...work.media.linkPreviews.map(
                                            (link) => ({
                                                url: link,
                                                type: "link", // Explicitly type as "link"
                                            }),
                                        ),
                                    ]}
                                    options={OPTIONS}
                                />
                            </CardContent>
                        </div>
                    </Card>
                );
            })}

            <section className="flex animate-in flex-col gap-8">
                <div className="space-y-4">
                    <Link
                        className="group flex items-center gap-2 tracking-tight text-secondary"
                        href="/blog"
                    >
                        Latest blogs
                        {/* <ArrowUpRightIcon className="h-5 w-5 text-tertiary transition-all group-hover:text-primary" /> */}
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
