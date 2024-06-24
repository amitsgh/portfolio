import ThemeProvider from "@/app/components/theme-provider";
import ThemeSwitcher from "@/app/components/theme-switcher";
import { neueMontreal } from "@/public/fonts/local-font";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const myFont = neueMontreal;

export const metadata = {
    metadataBase: new URL("https://www.amti.com"),
    title: "Amit Singh",
    description:
        "India-based Data Scientist, diving into data to uncover cool insights and spark innovation",
    openGraph: {
        title: "Amit Singh",
        url: "#",
        images: [{ url: "", alt: "amitgh.io" }],
    },
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            suppressContentEditableWarning
            className={`${myFont.className} ${inter.className}`}
        >
            <body className="width-full absolute inset-0 h-full w-full bg-contrast bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] text-primary antialiased dark:bg-primary">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                    <ThemeSwitcher className="h-4 w-4 transition-all group-active:scale-105" />
                </ThemeProvider>
            </body>
        </html>
    );
}
