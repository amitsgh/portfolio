import { MailIcon } from "@/components/icons/MailIcon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import EmblaCarousel from "@/components/ui/EmblaCarousel";
import { Section } from "@/components/ui/Section";
import { RESUME_DATA } from "@/data/resume";
import ProfileImage from "@/public/image/profile.jpg";
import Link from "next/link";

const OPTIONS = { loop: false };

export default function Home() {
    return (
        <main className="relative mx-auto flex max-w-3xl scroll-my-12 flex-col gap-y-12 overflow-auto p-4 md:p-16 print:p-12">
            <Section className="space-y-8 print:space-y-6">
                <div className="flex items-center justify-between">
                    <div className="flex-1 space-y-1.5">
                        <h1 className="text-4xl font-bold tracking-wide">
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
                <h2 className="text-2xl font-bold">About</h2>
                <p className="text-pretty font-mono text-secondary">
                    {RESUME_DATA.summary}
                </p>
            </Section>
            {/* 
            <Section>
                <h2 className="text-2xl">Projects</h2>
                <p className="text-pretty text-secondary">
                    {RESUME_DATA.summary}
                </p>
            </Section> */}

            {/* <Project projects={projects} /> */}

            <Section>
                <h2 className="text-2xl font-bold">Experience</h2>
                {RESUME_DATA.work.map((work) => {
                    return (
                        <Card key={work.company}>
                            <CardHeader>
                                <div className="flex items-center justify-between gap-x-2">
                                    <h3 className="inline-flex items-center justify-center gap-x-1 text-xl">
                                        <Link href={work.link}>
                                            {work.company}
                                        </Link>
                                    </h3>
                                    <div className="text-sm text-secondary">
                                        {work.start} - {work.end}
                                    </div>
                                </div>

                                <h4 className="text-sm">{work.title}</h4>
                            </CardHeader>
                            <CardContent className="mt-2 text-pretty text-secondary">
                                <ul
                                    style={{
                                        listStyleType: "disc",
                                        paddingLeft: "20px",
                                    }}
                                >
                                    {work.description.map((line, index) => (
                                        <li key={index}>{line}</li>
                                    ))}
                                </ul>
                            </CardContent>
                            <div className="mb-10 mt-2">
                                <CardContent className="media embla">
                                    <EmblaCarousel
                                        slides={[
                                            ...work.media.videos.map(
                                                (video) => ({
                                                    url: video,
                                                    type: "video",
                                                }),
                                            ),
                                            ...work.media.images.map(
                                                (image) => ({
                                                    url: image,
                                                    type: "image",
                                                }),
                                            ),
                                            ...work.media.linkPreviews.map(
                                                (link) => ({
                                                    url: link,
                                                    type: "link",
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
            </Section>
        </main>
    );
}
