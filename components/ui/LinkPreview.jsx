"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

async function fetchMetaTags(url) {
    const response = await fetch(
        `/api/extractMetaTags?url=${encodeURIComponent(url)}`,
    );
    if (!response.ok) {
        throw new Error("Failed to fetch metadata");
    }
    return response.json();
}

const LinkPreview = ({ url }) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchMetaTags(url)
            .then(setData)
            .catch((err) => setError(err.message));
    }, [url]);

    if (error) {
        return <p>Failed to fetch link preview: {error}</p>;
    }

    if (!data) {
        return (
            <div className="h-full w-full animate-pulse rounded-md bg-secondary"></div>
        );
    }

    const extractBeforeColon = (text) => {
        const indexOfColon = text.indexOf(":");
        return indexOfColon !== -1
            ? text.slice(0, indexOfColon).trim()
            : text.trim();
    };

    return (
        <Link
            href={url}
            target="_blank"
            className="flex cursor-pointer flex-col items-center overflow-hidden rounded-lg bg-secondary"
            style={{ textDecoration: "none" }}
        >
            <div className="w-full">
                <img
                    src={data.image}
                    alt=""
                    className="h-full w-full object-cover object-top"
                />
            </div>
            <div
                className="flex w-full flex-col justify-between rounded-b-lg p-4"
                style={{ minHeight: "150px", maxHeight: "150px" }}
            >
                <h3 className="text-md mb-1 font-semibold">
                    {extractBeforeColon(data.title)}
                </h3>
                <p className="mb-1 line-clamp-3 text-sm">
                    {/* {data.description.length > 75
                        ? `${data.description.substring(0, 75)}...`
                        : data.description} */}
                    {data.description}
                </p>
                <span className="text-xs text-secondary">
                    {url.substring(0, 50)}
                </span>
            </div>
        </Link>
    );
};

export default LinkPreview;
