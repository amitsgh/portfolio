"use client";

import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import useSound from "use-sound";

const links = [
    {
        href: "https://linkedin.com/in/amitsgh1911",
        text: "Linkedin",
        color: "blue",
    },
    {
        href: "https://twitter.com/amitsgh18",
        text: "Tweets",
        color: "gray",
    },
    {
        href: "mailto:amitsingh1911nov@gmail.com",
        text: "Gmail",
        color: "red",
    },
];

const SocialLinks = () => {
    const [playOnHover] = useSound("/sounds/click.wav");

    return (
        <section className="animate-in flex gap-4 text-sm">
            {links.map(({ href, text, color }, index) => (
                <Link
                    key={index}
                    onMouseEnter={() => playOnHover()}
                    href={href}
                    className={`flex bg-[var(--${color}-2)] border-[var(--${color}-7)] active:bg-[var(--${color}-3)] text-[var(--${color}-11)] group w-fit cursor-pointer items-center rounded-md border-[1.35px] px-3 py-1 font-medium no-underline transition-all hover:scale-[1.15] active:scale-105`}
                >
                    {text}
                    <ArrowUpRightIcon className="h-4 w-4" />
                </Link>
            ))}
        </section>
    );
};

export default SocialLinks;
