import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ashiq Rahman - HR Coordinator & Content Creator",
  description:
    "Professional portfolio of Ashiq Rahman, Human Resources Coordinator and Content Creator based in Bengaluru, India.",
  keywords: ["HR Coordinator", "Human Resources", "Content Creator", "MBA HR", "Bengaluru"],
  authors: [{ name: "Ashiq Rahman" }],
  openGraph: {
    title: "Ashiq Rahman - HR Coordinator & Content Creator",
    description: "Professional portfolio showcasing HR expertise and content creation achievements.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
