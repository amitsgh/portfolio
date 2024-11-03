import { Section } from "@/components/ui/Section.jsx";
import Image from "next/image";
import Link from "next/link";

export default function Project({ projects }) {
    return (
        <Section className="flex animate-in flex-col gap-8">
            <p className="tracking-tight text-secondary">Pinned Projects</p>
            <ul className="animated-list flex snap-x snap-mandatory grid-cols-2 flex-nowrap gap-8 overflow-x-scroll">
                {projects.map((project) => (
                    <li
                        key={project.slug}
                        className="col-span-1 min-w-64 snap-start transition-opacity"
                    >
                        <Link
                            href={`/projects/${project.slug}`}
                            className="space-y-4"
                        >
                            <div className="aspect-video overflow-hidden rounded-md bg-secondary">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="space-y-1">
                                <p className="font-medium leading-tight">
                                    {project.title}
                                </p>
                                <p className="text-secondary">
                                    {project.summary}
                                </p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </Section>
    );
}
