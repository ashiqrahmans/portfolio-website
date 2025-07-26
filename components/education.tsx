"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export function Education() {
  const education = [
    {
      degree: "MBA – Human Resources",
      institution: "RDB College",
      duration: "July 2023 – April 2025",
      location: "Bengaluru, India",
      description:
        "Comprehensive program focusing on strategic HR management, organizational behavior, and leadership development.",
      highlights: [
        "Strategic HR Management",
        "Organizational Behavior",
        "Leadership Development",
        "Employee Relations",
        "Performance Management",
      ],
    },
    {
      degree: "BBA – General Management",
      institution: "RDB College",
      duration: "Aug 2020 – April 2023",
      location: "Bengaluru, India",
      description:
        "Foundation program in business administration with focus on management principles and business operations.",
      highlights: [
        "Business Administration",
        "Management Principles",
        "Business Operations",
        "Communication Skills",
        "Team Leadership",
      ],
    },
  ]

  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic foundation in business management and specialized expertise in human resources, providing the
            knowledge base for professional excellence.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                        <p className="text-lg font-semibold text-primary mb-2">{edu.institution}</p>
                        <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {edu.duration}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {edu.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{edu.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Key Areas of Study:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, idx) => (
                          <Badge key={idx} variant="outline">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
