import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { NewsGrid } from "@/components/news-grid"
import { NewsSidebar } from "@/components/news-sidebar"
import { notFound } from "next/navigation"

const validCategories = ["world", "business", "technology", "sports", "health", "science"]

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params

  if (!validCategories.includes(category.toLowerCase())) {
    notFound()
  }

  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1)

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />

      <DashboardHeader />

      <div className="ml-64 px-6 py-6">
        <div className="flex gap-6">
          {/* Main content area */}
          <main className="flex-1">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-serif font-black text-foreground mb-2">{categoryTitle} News</h1>
                <p className="text-muted-foreground">
                  Latest {categoryTitle.toLowerCase()} stories from trusted sources
                </p>
              </div>
              <NewsGrid category={categoryTitle} />
            </div>
          </main>

          {/* Sidebar */}
          <aside className="w-80 hidden lg:block">
            <NewsSidebar />
          </aside>
        </div>
      </div>
    </div>
  )
}
