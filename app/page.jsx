import { MailIcon } from "@/components/icons/MailIcon";
import Avatar from "@/components/ui/Avatar";

import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import EmblaCarousel from "@/components/ui/EmblaCarousel";
import { Section } from "@/components/ui/Section";
import { RESUME_DATA } from "@/data/resume";
import Link from "next/link";

const OPTIONS = { loop: false };

export default function Home() {
    return (
        <main className="relative mx-auto mt-4 flex max-w-2xl flex-col gap-y-16 overflow-x-hidden p-4 md:p-16">
            <Section>
                <div className="flex items-start justify-between">
                    <div className="flex-1 space-y-2">
                        <h1 className="text-4xl font-bold tracking-wide md:text-6xl">
                            {RESUME_DATA.name}
                        </h1>
                        <p className="max-w-md text-pretty font-mono text-lg font-medium text-secondary">
                            {RESUME_DATA.about}
                        </p>
                        <div className="flex gap-x-4 pt-4 font-mono text-secondary">
                            {RESUME_DATA.contact.email ? (
                                <Button
                                    className="h-8 w-8 hover:text-primary"
                                    variant="ghost"
                                    size="icon"
                                    asChild
                                >
                                    <Link
                                        href={`mailto:${RESUME_DATA.contact.email}`}
                                    >
                                        <MailIcon className="h-6 w-6" />
                                    </Link>
                                </Button>
                            ) : null}
                            {RESUME_DATA.contact.social.map((social) => (
                                <Button
                                    key={social.name}
                                    className="h-8 w-8 hover:text-primary"
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

                    <Avatar
                        src={RESUME_DATA.avatarUrl}
                        alt={RESUME_DATA.name}
                        fallbackText={RESUME_DATA.initials}
                        className=""
                    />
                </div>
            </Section>

            <Section>
                <h2 className="pb-10 before:absolute before:text-8xl before:font-bold before:text-secondary before:opacity-10 before:content-['About']"></h2>
                <p className="text-pretty font-mono text-secondary">
                    {RESUME_DATA.summary}
                </p>
            </Section>

            <Section>
                <h2 className="pb-10 before:absolute before:text-8xl before:font-bold before:text-secondary before:opacity-10 before:content-['Experience']"></h2>
                {RESUME_DATA.work.map((work) => {
                    return (
                        <Card key={work.company} className="mb-2">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <h3 className="inline-flex items-center justify-center gap-x-1 text-lg font-bold leading-none">
                                        {/* <Link
                                            className="after:content-['_↗']"
                                            href={work.link}
                                        > */}
                                        {work.company}
                                        {/* </Link> */}
                                    </h3>

                                    <div className="text-sm text-secondary">
                                        {work.start} - {work.end}
                                    </div>
                                </div>

                                <h4 className="text-sm leading-none">
                                    {work.title}
                                </h4>
                            </CardHeader>
                            <CardContent className="mt-2 text-pretty text-secondary">
                                <ul
                                    style={{
                                        listStyleType: "disc",
                                        paddingLeft: "20px",
                                    }}
                                >
                                    <em className="text-sm text-primary">
                                        This text is italicized using the em
                                        tags
                                    </em>
                                    {work.description.map((line, index) => (
                                        <li
                                            key={index}
                                            className="leading-relaxed"
                                        >
                                            {line}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    );
                })}
            </Section>

            <Section>
                <h2 className="pb-10 before:absolute before:text-8xl before:font-bold before:text-secondary before:opacity-10 before:content-['Project']"></h2>
                {RESUME_DATA.project.map((project) => {
                    return (
                        <Card key={project.name} className="mb-2">
                            <CardHeader className="text-lg font-bold">
                                <Link
                                    className="after:content-['_↗']"
                                    href={project.link}
                                    target="_blank"
                                >
                                    {project.name}
                                </Link>
                            </CardHeader>
                            <CardContent className="mt-2 text-pretty text-secondary">
                                <ul
                                    style={{
                                        listStyleType: "disc",
                                        paddingLeft: "20px",
                                    }}
                                >
                                    {project.description.map((line, index) => (
                                        <li
                                            key={index}
                                            className="leading-relaxed"
                                        >
                                            {/* {line.split(" ").map((word, i) => {
                                                if (word === "Tech:") {
                                                    return (
                                                        <span
                                                            key={i}
                                                            className="text-primary"
                                                        >
                                                            Tech:
                                                        </span>
                                                    );
                                                } else {
                                                    return " " + word + " ";
                                                }
                                            })} */}
                                            {line}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <div className="mt-4">
                                <CardContent className="media embla">
                                    <EmblaCarousel
                                        slides={[
                                            ...project.media.videos.map(
                                                (video) => ({
                                                    url: video,
                                                    type: "video",
                                                }),
                                            ),
                                            ...project.media.images.map(
                                                (image) => ({
                                                    url: image,
                                                    type: "image",
                                                }),
                                            ),
                                            ...project.media.linkPreviews.map(
                                                (link) => ({
                                                    url: link,
                                                    type: "link",
                                                }),
                                            ),
                                        ]}
                                        options={OPTIONS}
                                        className="aspect-video"
                                    />
                                </CardContent>
                            </div>
                        </Card>
                    );
                })}
            </Section>

            {/* <Section>
                <ul className="animated-list grid grid-cols-2 gap-8">
                    {RESUME_DATA.project.map((project) => (
                        <li
                            key={project.name}
                            className="col-span-1 min-w-64 snap-start transition-opacity"
                        >
                            <Link href={project.link} className="space-y-4">
                                <div className="
                                 overflow-hidden rounded-md bg-secondary">
                                    <Image
                                        src={ProfileImage}
                                        alt={project.name}
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <p className="font-medium leading-tight">
                                        {project.name}
                                    </p>
                                    <p className="text-secondary">
                                        {project.description}
                                    </p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </Section> */}
        </main>
    );
}
