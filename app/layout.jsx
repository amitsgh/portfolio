import ThemeProvider from "@/components/theme/Provider";
import ThemeSwitcher from "@/components/theme/Switch";
import { RESUME_DATA } from "@/data/resume";
import { neueMontreal } from "@/public/fonts/local-font";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const myFont = neueMontreal;

export const metadata = {
    metadataBase: new URL("https://www.amit.com"),
    title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
    description: RESUME_DATA.summary,
    openGraph: {
        title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
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
            <body className="0px -50px 36px -28px inset; width-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] antialiased">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    {children}
                    <ThemeSwitcher className="h-4 w-4 transition-all group-active:scale-105" />
                </ThemeProvider>
            </body>
            {/* <Analytics /> */}
        </html>
    );
}
