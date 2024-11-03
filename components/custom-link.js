import clsx from "clsx";
import NextLink from "next/link";

export default function Link({ href, underline, ...rest }) {
    const isInternal = href && href.startsWith("/");

    return (
        <NextLink
            href={href}
            {...rest}
            className={clsx(
                "underline-offset-8",
                (!isInternal || underline) && "underline",
                rest.className,
            )}
            target={isInternal ? undefined : "_blank"}
        >
            {rest.children}
        </NextLink>
    );
}
