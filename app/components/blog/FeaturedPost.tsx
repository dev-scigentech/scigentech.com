import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import type { BlogPost } from "@/lib/blog-data"

interface FeaturedPostProps {
  post: BlogPost
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl overflow-hidden shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-64 md:h-auto">
          <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>
        <div className="p-8 flex flex-col justify-center">
          <span className="text-sm font-medium text-primary mb-2">{post.category}</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{post.title}</h2>
          <p className="text-muted-foreground mb-6">{post.excerpt}</p>
          <div className="flex items-center mb-6">
            <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
              <Image
                src={post.author.avatar || "/placeholder.svg"}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">{post.author.name}</p>
              <p className="text-xs text-muted-foreground">{formatDate(post.date)}</p>
            </div>
          </div>
          <Link href={`/blog/${post.slug}`} className="apple-button inline-flex items-center self-start">
            Read Article
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
