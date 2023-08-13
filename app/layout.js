import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "./globals.css";
import { Rubik } from "next/font/google";
config.autoAddCss = false;

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
    title: "Pitung Store",
    description: "Pusat Belanja Sosial Media Terbaik",
};

export default function RootLayout({ children }) {
    return (
        <html lang="id" className="dark">
            <body className={rubik.className}>{children}</body>
        </html>
    );
}
