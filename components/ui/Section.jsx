import { cn } from "@/lib/utils.js";

export function Section({ className, ...props }) {
    return (
        <section
            className={cn("flex min-h-0 flex-col gap-y-3", className)}
            {...props}
        />
    );
}
