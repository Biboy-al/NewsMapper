import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { NewsGrid } from "@/components/news-grid"
import { NewsSidebar } from "@/components/news-sidebar"

export default function DashboardPage() {
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
                <h1 className="text-3xl font-serif font-black text-foreground mb-2">Latest News</h1>
                <p className="text-muted-foreground">Stay informed with the latest stories from trusted sources</p>
              </div>
              <NewsGrid />
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
