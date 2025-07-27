"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Heart, Lightbulb, ExternalLink, Linkedin } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function SocialImpact() {
  const impactMetrics = [
    {
      icon: Users,
      value: "6K+",
      label: "LinkedIn Followers",
      description: "Built a strong professional community",
    },
    {
      icon: TrendingUp,
      value: "Regular",
      label: "Content Publishing",
      description: "Consistent motivational and career content",
    },
    {
      icon: Heart,
      value: "High",
      label: "Engagement Rate",
      description: "Meaningful interactions with audience",
    },
    {
      icon: Lightbulb,
      value: "Creative",
      label: "Content Agency",
      description: "Founded agency for posters & reels",
    },
  ]

  const contentThemes = [
    "Career Development",
    "HR Best Practices",
    "Professional Growth",
    "Motivational Content",
    "Industry Insights",
    "Leadership Tips",
  ]

  return (
    <section id="social-impact" className="py-20">
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
              Social Impact & Personal Brand
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Leveraging content creation and social media to inspire professionals, share HR insights, and build
            meaningful connections in the business community.
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
              Content Creation Journey
            </h3>
            <p className="text-muted-foreground mb-4">
              What started as a passion for sharing knowledge has evolved into a thriving content creation practice.
              Through consistent posting and authentic engagement, I've built a community of professionals who value
              genuine insights and motivational content.
            </p>
            <p className="text-muted-foreground mb-6">
              My content focuses on bridging the gap between HR theory and practical application, helping fellow
              professionals navigate their career journeys while sharing the human side of human resources.
            </p>
            <Button asChild>
              <Link href="https://in.linkedin.com/in/ashiqrahmans" target="_blank">
                <Linkedin className="mr-2 h-4 w-4" />
                View LinkedIn Profile
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {impactMetrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="p-4 text-center">
                  <metric.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                  <div className="font-semibold text-sm mb-1">{metric.label}</div>
                  <div className="text-xs text-muted-foreground">{metric.description}</div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-center bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                Content Themes & Focus Areas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground mb-6">
                My content strategy revolves around providing value to the professional community through insights,
                motivation, and practical advice.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {contentThemes.map((theme, index) => (
                  <Badge key={index} variant="outline" className="text-sm p-2">
                    {theme}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
