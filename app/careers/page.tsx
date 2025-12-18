"use client"

import { useState } from "react"
import { Briefcase, MapPin, Clock, Mail } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState<"active" | "archived">("active")

  const activeJobs = [
    {
      id: "1",
      title: "Software Developer (Backend / Full Stack)",
      location: "Thessaloniki, Greece",
      product: "ePostersLive Pro",
      type: "Contract or Fixed-term",
      duration: "23 months",
      employment: "Part or Full time",
      description: "Development and support of ePostersLive Pro platform features, with emphasis on backend and APIs.",
      requirements: [
        "Degree in Computer Science or related field or equivalent experience",
        "Experience in web application development",
        "Knowledge of backend technologies (e.g., Node.js, PHP, Python or similar)",
      ],
      preferred: ["Experience in cloud environments", "Knowledge of REST APIs", "Experience with SaaS platforms"],
      documents: ["CV", "Brief description of experience"],
    },
    {
      id: "2",
      title: "Frontend / UI Developer",
      location: "Thessaloniki, Greece",
      product: "ePostersLive Pro",
      type: "Contract or Fixed-term",
      duration: "23 months",
      employment: "Part or Full time",
      description: "Design and implementation of user interfaces (UI/UX) for the ePostersLive Pro platform.",
      requirements: [
        "Experience with HTML, CSS, JavaScript",
        "Experience with modern frameworks (e.g., React, Vue or similar)",
      ],
      preferred: ["Experience in responsive design", "Collaboration with backend teams"],
      documents: ["CV", "Brief description of experience"],
    },
    {
      id: "3",
      title: "Technical Support / QA",
      location: "Thessaloniki, Greece",
      product: "ePostersLive Pro",
      type: "Fixed-term or Contract",
      duration: "23 months",
      employment: "Part or Full time",
      description: "Support for testing, functionality checks, and platform documentation.",
      requirements: [
        "Basic computer science knowledge",
        "Ability to test applications and record errors",
        "Good knowledge of Greek and English",
      ],
      preferred: ["Experience in QA or software support"],
      documents: ["CV"],
    },
    {
      id: "4",
      title: "Administrative / Documentation Support",
      location: "Thessaloniki, Greece",
      product: "ePostersLive Pro",
      type: "Fixed-term or Contract",
      duration: "23 months",
      employment: "Part or Full time",
      description: "Support for project management, data collection, documentation, and report support.",
      requirements: [
        "Organizational skills",
        "Good use of MS Office / Google Docs",
        "Ability to maintain files and procedures",
      ],
      preferred: [],
      documents: ["CV"],
    },
  ]

  const archivedJobs: typeof activeJobs = []

  const currentJobs = activeTab === "active" ? activeJobs : archivedJobs

  return (
    <div className="min-h-screen bg-background">
      {/* Header Spacer */}
      <div className="h-20" />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-muted-foreground">
            Be part of a team that is transforming scientific research through innovative technology solutions.
          </p>
        </div>
      </section>

      {/* Tabs and Jobs */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex gap-2 mb-8 border-b">
            <button
              onClick={() => setActiveTab("active")}
              className={`px-6 py-3 font-medium transition-colors relative ${
                activeTab === "active" ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Active Positions
              {activeTab === "active" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
            </button>
            <button
              onClick={() => setActiveTab("archived")}
              className={`px-6 py-3 font-medium transition-colors relative ${
                activeTab === "archived" ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Archived Positions
              {activeTab === "archived" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
            </button>
          </div>

          {/* Job Listings */}
          {currentJobs.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No {activeTab} positions at the moment.</p>
            </div>
          ) : (
            <Accordion type="single" collapsible className="space-y-4">
              {currentJobs.map((job) => (
                <AccordionItem key={job.id} value={job.id} className="border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-start gap-4 text-left pr-4">
                      <div className="p-2 bg-primary/10 rounded-lg mt-1">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium">
                            <MapPin className="h-3 w-3" />
                            {job.location}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs font-medium">
                            <Briefcase className="h-3 w-3" />
                            {job.product}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-md text-xs font-medium">
                            <Clock className="h-3 w-3" />
                            {job.employment}
                          </span>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6 pt-4">
                      {/* Description */}
                      <div>
                        <h4 className="font-semibold mb-2">Position Description</h4>
                        <p className="text-muted-foreground">{job.description}</p>
                      </div>

                      {/* Contract Details */}
                      <div>
                        <h4 className="font-semibold mb-2">Contract Details</h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          <li>Type: {job.type}</li>
                          <li>Duration: {job.duration}</li>
                          <li>Employment: {job.employment}</li>
                        </ul>
                      </div>

                      {/* Required Qualifications */}
                      <div>
                        <h4 className="font-semibold mb-2">Required Qualifications</h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          {job.requirements.map((req, idx) => (
                            <li key={idx}>{req}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Preferred Qualifications */}
                      {job.preferred.length > 0 && (
                        <div>
                          <h4 className="font-semibold mb-2">Preferred Qualifications</h4>
                          <ul className="list-disc list-inside text-muted-foreground space-y-1">
                            {job.preferred.map((pref, idx) => (
                              <li key={idx}>{pref}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Required Documents */}
                      <div>
                        <h4 className="font-semibold mb-2">Required Documents</h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          {job.documents.map((doc, idx) => (
                            <li key={idx}>{doc}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Apply Button */}
                      <div className="pt-4">
                        <a
                          href="mailto:careers@scigentech.com"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                        >
                          <Mail className="h-4 w-4" />
                          Apply via Email
                        </a>
                        <p className="text-sm text-muted-foreground mt-2">
                          Send your CV and cover letter to careers@scigentech.com
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}

          {/* EU funding disclaimer in Greek */}
          <div className="mt-12 pt-8 border-t">
            <p className="text-xs text-muted-foreground leading-relaxed">
              Η εταιρεία SciGen Technologies IKE, στο πλαίσιο υλοποίησης της Πράξης που χρηματοδοτείται από τη Δράση
              «ΕΡΕΥΝΩ–ΚΑΙΝΟΤΟΜΩ» του Προγράμματος «Ανταγωνιστικότητα 2021–2027», με τη συγχρηματοδότηση της Ευρωπαϊκής
              Ένωσης, προτίθεται να συνεργαστεί με έκτακτο προσωπικό για την κάλυψη των αναγκών του έργου.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
