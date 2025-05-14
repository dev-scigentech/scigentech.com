"use client"

import { useState } from "react"
import { blogCategories } from "@/lib/blog-data"

export default function BlogCategoryFilter() {
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <div className="flex flex-wrap justify-center gap-3">
      <button
        onClick={() => setActiveCategory("All")}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          activeCategory === "All"
            ? "bg-primary text-primary-foreground"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        }`}
      >
        All
      </button>

      {blogCategories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === category
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
