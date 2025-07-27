"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, TrendingUp, Award } from "lucide-react"
import { motion } from "framer-motion"

export function About() {
  const achievements = [
    {
      icon: Award,
      title: "MBA(HR)",
      description: "Completed comprehensive HR management program",
    },
    {
      icon: Users,
      title: "6K+ LinkedIn Followers",
      description: "Built strong professional network and personal brand",
    },
    {
      icon: TrendingUp,
      title: "Content Creator",
      description: "Founded creative content agency for posters & reels",
    },
    {
      icon: Trophy,
      title: "Consistent Content",
      description: "Regular motivational and career-oriented posts",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">About Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A dedicated HR professional with a passion for people development and organizational growth. My journey from
            Admin Executive to HR Coordinator reflects my commitment to continuous learning and professional excellence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              My Journey
            </h3>
            <p className="text-muted-foreground mb-4">
              My career path has been driven by a genuine passion for human resources and people management. Starting as
              an Admin Executive, I quickly recognized my calling in HR and pursued specialized education to enhance my
              expertise.
            </p>
            <p className="text-muted-foreground mb-4">
              Completed my MBA in Human Resources, I combine academic knowledge with practical experience to
              deliver exceptional results in HR operations, employee relations, and organizational development.
            </p>
            <p className="text-muted-foreground">
              Beyond traditional HR roles, I've embraced content creation as a way to share knowledge, inspire others,
              and build meaningful professional connections. This unique combination of HR expertise and creative skills
              sets me apart in today's dynamic workplace.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Core Values
            </h3>
            <div className="space-y-3">
              <Badge variant="secondary" className="text-sm p-2">
                People-First Approach
              </Badge>
              <Badge variant="secondary" className="text-sm p-2">
                Continuous Learning
              </Badge>
              <Badge variant="secondary" className="text-sm p-2">
                Authentic Communication
              </Badge>
              <Badge variant="secondary" className="text-sm p-2">
                Creative Problem Solving
              </Badge>
              <Badge variant="secondary" className="text-sm p-2">
                Professional Excellence
              </Badge>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <achievement.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
