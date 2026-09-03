import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Okasha Sameer | Software Engineer",
  description: "Portfolio of Okasha Sameer — D365 F&O, Power Platform, SQL, Python and web development.",
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
