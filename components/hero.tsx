"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Linkedin, Download, Twitter, Instagram, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export function Hero() {
  const handleDownloadResume = () => {
    // Direct download from Google Drive
    const googleDriveDownloadUrl = "https://drive.google.com/uc?export=download&id=1XlktYVaCs9sNSQYzPfkU2dPfxvPUXPzP"

    const link = document.createElement("a")
    link.href = googleDriveDownloadUrl
    link.download = "Ashiq_Rahman_Resume.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-transparent to-secondary/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                Ashiq Rahman
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent font-normal mt-2">
                Human Resources Coordinator
              </span>
            </h1>

            <p className="text-lg text-muted-foreground mb-4">MBA HR | HR Operations | Content Creator</p>

            <div className="flex items-center justify-center lg:justify-start mb-6">
              <MapPin className="h-5 w-5 text-muted-foreground mr-2" />
              <span className="text-muted-foreground">Bengaluru, India</span>
            </div>

            <p className="text-xl mb-8 max-w-2xl">
              Passionate HR Professional with a creative edge in content creation, building meaningful connections and
              driving organizational success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" onClick={handleDownloadResume}>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://in.linkedin.com/in/ashiqrahmans" target="_blank">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://x.com/AshiqRahman2002?t=EUMaGqI7f4W-0Bs2LwvHKg&s=09" target="_blank">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.instagram.com/ashiqrahmans/profilecard/?igsh=cm9idTljcnE3M29m" target="_blank">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://youtube.com/@ashiqrahmans?si=treioWY314cY15bS" target="_blank">
                  <Youtube className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Ashiq Rahman - Professional Photo"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-full p-4">
                <Linkedin className="h-8 w-8" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
