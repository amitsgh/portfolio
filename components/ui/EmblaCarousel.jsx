"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React from "react";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { useDotButton } from "./EmblaCarouselDotButton";
import LinkPreview from "./LinkPreview";

const EmblaCarousel = (props) => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    const hasLinks = slides.some(
        (slide) => typeof slide !== "string" && slide.type === "link",
    );

    const hasSlides = slides.length > 1;

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((slide, index) => (
                        <div className="embla__slide" key={index}>
                            {typeof slide !== "string" &&
                            slide.type === "link" ? (
                                <LinkPreview url={slide.url} />
                            ) : typeof slide !== "string" &&
                              slide.type === "video" ? (
                                <iframe
                                    width="460"
                                    height="300"
                                    src={slide.url}
                                    title={`slide-${index}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    style={{
                                        borderRadius: "12px", // Same border radius as LinkPreview
                                    }}
                                ></iframe>
                            ) : typeof slide !== "string" &&
                              slide.type === "image" ? (
                                <div className="flex items-center justify-center w-full h-full overflow-hidden rounded-md bg-white p-2">
                                    <Image
                                        src={slide.url}
                                        alt={`slide-${index}`}
                                        width={500}
                                        height={400}
                                        className="rounded-sm"
                                    />
                                </div>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>

            {hasSlides && hasLinks && (
                <div className="embla__controls">
                    <div className="embla__buttons">
                        <PrevButton
                            onClick={onPrevButtonClick}
                            disabled={prevBtnDisabled}
                        />
                        <NextButton
                            onClick={onNextButtonClick}
                            disabled={nextBtnDisabled}
                        />
                    </div>

                    {/* <div className="embla__dots">
                        {scrollSnaps.map((_, index) => (
                            <DotButton
                                key={index}
                                onClick={() => onDotButtonClick(index)}
                                className={"embla__dot".concat(
                                    index === selectedIndex
                                        ? "embla__dot--selected"
                                        : "",
                                )}
                            />
                        ))}
                    </div> */}
                </div>
            )}
        </section>
    );
};

export default EmblaCarousel;
