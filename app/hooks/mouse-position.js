import { useEffect, useState } from "react";

export default function useMousePosition(ref) {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    useEffect(() => {
        const updateMousePosition = (event) => {
            if (ref.current) {
                setMousePosition({
                    x: event.clientX - ref.current.getBoundingClientRect().left,
                    y: event.clientY - ref.current.getBoundingClientRect().top,
                });
            }
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, [ref]);

    return mousePosition;
}
