"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export function Experience() {
  const experiences = [
    {
      company: "Sundus",
      position: "HR Coordinator",
      duration: "Feb 2025 – Present",
      location: "Bengaluru, India",
      responsibilities: [
        "Managing employee offboarding processes and documentation",
        "Overseeing complete HR lifecycle management",
        "Maintaining accurate employee records and compliance",
        "Supporting HR operations and policy implementation",
      ],
      skills: ["HR Operations", "Employee Relations", "Documentation", "Compliance"],
    },
    {
      company: "Glora Diamonds",
      position: "Admin Executive cum HR",
      duration: "Feb 2024 – Jan 2025",
      location: "Bengaluru, India",
      responsibilities: [
        "Handled comprehensive HR operations and employee support",
        "Managed internal coordination and communication",
        "Supported recruitment and onboarding processes",
        "Maintained administrative systems and procedures",
      ],
      skills: ["HR Operations", "Administration", "Employee Support", "Internal Coordination"],
    },
  ]

  return (
    <section id="experience" className="py-20">
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
              Professional Experience
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A progressive career journey in human resources and administration, building expertise in employee relations
            and organizational operations.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>

                  <Card className="md:ml-16">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <CardTitle className="text-xl">{exp.position}</CardTitle>
                          <p className="text-lg font-semibold text-primary">{exp.company}</p>
                        </div>
                        <div className="flex flex-col sm:items-end gap-1">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Skills Applied:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, idx) => (
                            <Badge key={idx} variant="secondary">
                              {skill}
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
      </div>
    </section>
  )
}
