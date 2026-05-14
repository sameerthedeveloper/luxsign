import { Cormorant_Garamond, DM_Sans, Bebas_Neue } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ui",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-accent",
});

export const metadata = {
  title: "LuxSign | Neuglass Architecture",
  description: "Premium LED Technology & Video Processors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${bebas.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#0a0a0f] text-[#f0ede8] font-ui antialiased selection:bg-[rgba(201,168,76,0.15)] selection:text-[#c9a84c]">
        {children}
      </body>
    </html>
  );
}
