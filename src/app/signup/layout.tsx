import "@/app/globals.css";
import { CircularStd } from "@/font-loader";

export const metadata = {
    title: "Sign up - Spotify",
    description: "Generated by Next.js",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={CircularStd.className}>{children}</body>
        </html>
    );
}
