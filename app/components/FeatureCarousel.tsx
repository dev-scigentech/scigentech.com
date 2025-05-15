"use client"

import { motion } from "framer-motion"
import { Dna, FlaskConical, Users, BarChart3, ShieldCheck, ScrollText } from "lucide-react"

const features = [
  {
    title: "Scientific Expertise",
    description: "Our team combines deep scientific knowledge with software engineering excellence.",
    icon: Dna,
  },
  {
    title: "Research-Driven",
    description: "Solutions built on peer-reviewed methodologies and cutting-edge research.",
    icon: FlaskConical,
  },
  {
    title: "User-Centric Design",
    description: "Intuitive interfaces that scientists and researchers can navigate effortlessly.",
    icon: Users,
  },
  {
    title: "Scalable Architecture",
    description: "Systems that grow with your research needs, from lab to global deployment.",
    icon: BarChart3,
  },
  {
    title: "Data Security",
    description: "Enterprise-grade protection for your sensitive research and clinical data.",
    icon: ShieldCheck,
  },
  {
    title: "Regulatory Compliance",
    description: "Software that meets international standards for research and clinical applications.",
    icon: ScrollText,
  },
]

export default function FeatureCarousel() {
  return (
    <div className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why Choose SciGen</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="p-8 bg-background rounded-3xl shadow-lg flex flex-col h-full hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
            >
              <div className="mb-6 text-primary">
                <feature.icon size={42} className="stroke-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
