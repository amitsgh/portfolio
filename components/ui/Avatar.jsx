"use client";

import Image from "next/image";
import React, { useState } from "react";

const Avatar = ({ src, alt, fallbackText, className, ...props }) => {
    const [isError, setIsError] = useState(false);

    return (
        <div
            className={`relative flex h-28 w-28 overflow-hidden rounded-xl ${className}`}
        >
            {!isError ? (
                <Image
                    src={src}
                    alt={alt}
                    layout="fill"
                    objectFit="cover"
                    onError={() => setIsError(true)}
                    {...props}
                />
            ) : (
                <div className="flex h-full w-full items-center justify-center bg-secondary">
                    <span className="text-primary">{fallbackText}</span>
                </div>
            )}
        </div>
    );
};

export default Avatar;
