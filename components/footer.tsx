"use client"

import { Linkedin, Heart, Twitter, Instagram, Youtube } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">© {new Date().getFullYear()} Ashiq Rahman. All rights reserved.</p>
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-1 mt-1">
              Made with <Heart className="h-4 w-4 text-red-500" /> for the HR community
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://in.linkedin.com/in/ashiqrahmans"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://x.com/AshiqRahman2002?t=EUMaGqI7f4W-0Bs2LwvHKg&s=09"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.instagram.com/ashiqrahmans/profilecard/?igsh=cm9idTljcnE3M29m"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://youtube.com/@ashiqrahmans?si=treioWY314cY15bS"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Youtube className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
