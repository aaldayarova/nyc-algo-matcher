import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ShowNavWrapper from "@/components/ui/ShowNavWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "NYC AlgoMatcher",
    template: "%s | NYC AlgoMatcher",
  },
  description:
    "Discover which New York City algorithmic tools may be using your data",
  openGraph: {
    title: {
      default: "NYC AlgoMatcher",
      template: "%s | NYC AlgoMatcher",
    },
    description:
      "Discover which New York City algorithmic tools may be using your data",
    images: [
      {
        url: "https://nyc-algo-matcher.vercel.app/NYC-Algomatcher_Logo.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "en_US",
    url: "https://nyc-algo-matcher.vercel.app/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Import Nunito with multiple weights */}
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ShowNavWrapper />
        {children}
      </body>
    </html>
  );
}
