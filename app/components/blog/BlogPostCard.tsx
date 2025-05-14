import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import type { BlogPost } from "@/lib/blog-data"

interface BlogPostCardProps {
  post: BlogPost
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="bg-background rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col border border-border">
        <div className="relative h-48 w-full">
          <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <span className="text-xs font-medium text-primary">{post.category}</span>
              <span className="mx-2 text-muted-foreground">•</span>
              <span className="text-xs text-muted-foreground">{post.readingTime} min read</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">{post.title}</h3>
            <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
          </div>
          <div className="flex items-center mt-4">
            <div className="relative h-8 w-8 rounded-full overflow-hidden mr-3">
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
        </div>
      </div>
    </Link>
  )
}
