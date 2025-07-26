import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Certifications } from "@/components/certifications"
import { Skills } from "@/components/skills"
import { SocialImpact } from "@/components/social-impact"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Certifications />
      <Skills />
      <SocialImpact />
      <Contact />
    </main>
  )
}
