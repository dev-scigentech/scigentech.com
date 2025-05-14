import Image from "next/image"
import type { Author } from "@/lib/blog-data"

interface AuthorCardProps {
  author: Author
}

export default function AuthorCard({ author }: AuthorCardProps) {
  return (
    <div className="border border-border rounded-xl p-6 mb-12 bg-background/50">
      <div className="flex items-center">
        <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
          <Image src={author.avatar || "/placeholder.svg"} alt={author.name} fill className="object-cover" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">{author.name}</h3>
          <p className="text-sm text-muted-foreground">{author.role}</p>
        </div>
      </div>
      <p className="mt-4 text-foreground">{author.bio}</p>
    </div>
  )
}
