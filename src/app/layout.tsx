import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { profile } from "@/data/profile";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Portfolio of Suraj Pandey, Fullstack Developer from Delhi — Next.js, Node.js, PHP, payment gateways, dashboards and premium UI.",
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description:
      "Next.js, Node.js, payment gateways, trading platforms and premium dashboards.",
    images: [profile.photoFull],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${geistMono.variable}`}
    >
      <body className="bg-neutral-100 font-sans antialiased dark:bg-neutral-950">
        <ThemeProvider>
          <main className="relative bg-neutral-100 dark:bg-neutral-950">
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
