import { JSDOM } from "jsdom";
import { NextResponse } from "next/server";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const url = searchParams.get("url");

    if (typeof url !== "string") {
        return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch the URL");
        }
        const html = await response.text();
        const dom = new JSDOM(html);
        const document = dom.window.document;
        const metaTags = Array.from(document.querySelectorAll("meta")).reduce(
            (tags, meta) => {
                const metaElement = meta;
                const name =
                    metaElement.getAttribute("name") ||
                    metaElement.getAttribute("property") ||
                    metaElement.getAttribute("itemprop");
                const content = metaElement.getAttribute("content");
                if (name && content) {
                    tags[name] = content;
                }
                return tags;
            },
            {},
        );

        const data = {
            title:
                document.title ||
                metaTags["og:title"] ||
                metaTags["twitter:title"] ||
                "",
            description:
                metaTags["description"] ||
                metaTags["og:description"] ||
                metaTags["twitter:description"] ||
                "",
            image:
                metaTags["image"] ||
                metaTags["og:image"] ||
                metaTags["twitter:image"] ||
                "",
        };

        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error("Error fetching Open Graph details", error);
        return NextResponse.json(
            { error: "Failed to fetch metadata" },
            { status: 500 },
        );
    }
}
