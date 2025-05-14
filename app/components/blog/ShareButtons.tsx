"use client"

import { useState } from "react"
import { Twitter, Linkedin, Facebook, LinkIcon, Check } from "lucide-react"

interface ShareButtonsProps {
  title: string
  slug: string
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const baseUrl = typeof window !== "undefined" ? window.location.origin : ""
  const url = `${baseUrl}/blog/${slug}`

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mb-12">
      <h3 className="text-lg font-semibold text-foreground mb-4">Share this article</h3>
      <div className="flex space-x-3">
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-secondary rounded-full text-secondary-foreground hover:bg-secondary/80 transition-colors"
          aria-label="Share on Twitter"
        >
          <Twitter size={18} />
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-secondary rounded-full text-secondary-foreground hover:bg-secondary/80 transition-colors"
          aria-label="Share on LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-secondary rounded-full text-secondary-foreground hover:bg-secondary/80 transition-colors"
          aria-label="Share on Facebook"
        >
          <Facebook size={18} />
        </a>
        <button
          onClick={copyToClipboard}
          className="p-3 bg-secondary rounded-full text-secondary-foreground hover:bg-secondary/80 transition-colors"
          aria-label="Copy link"
        >
          {copied ? <Check size={18} className="text-green-500" /> : <LinkIcon size={18} />}
        </button>
      </div>
    </div>
  )
}
