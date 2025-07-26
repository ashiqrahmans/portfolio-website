"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, FileText, MessageSquare, Monitor, Megaphone, Edit3 } from "lucide-react"
import { motion } from "framer-motion"

export function Skills() {
  const skillCategories = [
    {
      icon: Users,
      title: "HR Operations",
      skills: ["Employee Relations", "Offboarding", "HR Lifecycle", "Performance Management", "Policy Implementation"],
    },
    {
      icon: MessageSquare,
      title: "Communication",
      skills: ["Team Management", "Internal Coordination", "Stakeholder Communication", "Conflict Resolution"],
    },
    {
      icon: FileText,
      title: "Documentation",
      skills: ["MS Outlook", "HRMS", "Record Keeping", "Compliance Documentation", "Process Documentation"],
    },
    {
      icon: Megaphone,
      title: "Personal Branding",
      skills: ["LinkedIn Marketing", "Content Strategy", "Professional Networking", "Thought Leadership"],
    },
    {
      icon: Edit3,
      title: "Content Creation",
      skills: ["Poster Design", "Reel Editing", "Social Media Content", "Visual Storytelling"],
    },
    {
      icon: Monitor,
      title: "Digital Skills",
      skills: ["Digital Marketing", "SEO", "Google Analytics", "Social Media Management"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set combining traditional HR expertise with modern digital capabilities and creative
            content creation abilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
