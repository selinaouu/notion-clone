import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Motion",
  description: "Notion but more",
  icons:{
    icon:[
      {
        media:"(prefers-color-scheme:light)",
        url:"/notion.png",
        href:"/notion.png",
      },
      {
        media:"(prefers-color-scheme:dark)",
        url:"/notion.png",
        href:"/notion.png",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    //prevent hydration warnings from changing the default theme
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="motion-theme">
          {children}
        </ThemeProvider>
        
      </body>
    </html>
  );
}

//sidebar + navigation bar will be included(reusable)