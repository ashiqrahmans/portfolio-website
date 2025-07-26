"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function Certifications() {
  const certifications = [
    {
      title: "Fundamentals of Digital Marketing",
      issuer: "Google",
      date: "February 2023",
      description: "Comprehensive certification covering digital marketing strategies, SEO, SEM, and analytics.",
      skills: ["Digital Marketing", "SEO", "Google Analytics", "Online Advertising"],
      verified: true,
      certificateImage: "/images/certificates/digital-marketing.jpg",
      verifyUrl: "https://learndigital.withgoogle.com/link/1qsdpcedm9s9U8VY4F2U",
    },
    {
      title: "Human Resources Management",
      issuer: "Great Learning",
      date: "January 2025",
      description:
        "Specialized program covering recruitment, job analysis, performance management, and HR best practices.",
      skills: ["Recruitment", "Job Analysis", "Performance Management", "HR Operations"],
      verified: true,
      certificateImage: "/images/certificates/human-resource-management.jpg",
      verifyUrl: "https://www.mygreatlearning.com/certificate/MPBSIEKD",
    },
    {
      title: "Social Media Marketing",
      issuer: "Great Learning",
      date: "June 2024",
      description:
        "Comprehensive course covering social media strategy, content creation, and digital marketing best practices.",
      skills: ["Social Media Strategy", "Content Marketing", "Digital Advertising", "Brand Management"],
      verified: true,
      certificateImage: "/images/certificates/social-media-marketing.jpg",
      verifyUrl: "https://verify.mygreatlearning.com/WZFUGECL",
    },
  ]

  return (
    <section id="certifications" className="py-20">
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
              Professional Certifications
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that enhance my expertise and demonstrate commitment to continuous learning and
            industry best practices.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{cert.title}</CardTitle>
                        <div className="flex items-center gap-2 mb-2">
                          <p className="font-semibold text-primary">{cert.issuer}</p>
                          {cert.verified && (
                            <Badge variant="secondary" className="text-xs">
                              Verified
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {cert.date}
                        </div>
                      </div>
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {/* Certificate Image */}
                    <div className="mb-4 rounded-lg overflow-hidden border">
                      <Image
                        src={cert.certificateImage || "/placeholder.svg"}
                        alt={`${cert.title} Certificate`}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <p className="text-muted-foreground mb-4">{cert.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Skills Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, idx) => (
                          <Badge key={idx} variant="outline">
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
    </section>
  )
}
