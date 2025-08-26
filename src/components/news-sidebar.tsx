import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Clock } from "lucide-react"

const trendingTopics = [
  { topic: "Climate Change", count: 24 },
  { topic: "Artificial Intelligence", count: 18 },
  { topic: "Global Economy", count: 15 },
  { topic: "Space Exploration", count: 12 },
  { topic: "Healthcare", count: 10 },
]

const recentArticles = [
  {
    title: "Breaking: Major Policy Announcement Expected",
    source: "CNN",
    time: "15 min ago",
  },
  {
    title: "Market Analysis: Tech Stocks Surge",
    source: "Wall Street Journal",
    time: "32 min ago",
  },
  {
    title: "Scientific Discovery Shakes Physics Community",
    source: "Science Daily",
    time: "1 hour ago",
  },
]

export function NewsSidebar() {
  return (
    <div className="space-y-6">
      {/* Trending Topics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg font-serif font-bold">
            <TrendingUp className="mr-2 h-5 w-5 text-primary" />
            Trending Topics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {trendingTopics.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground hover:text-primary cursor-pointer">
                {item.topic}
              </span>
              <Badge variant="outline" className="text-xs">
                {item.count}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recent Updates */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg font-serif font-bold">
            <Clock className="mr-2 h-5 w-5 text-primary" />
            Recent Updates
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentArticles.map((article, index) => (
            <div key={index} className="space-y-1">
              <h4 className="text-sm font-medium text-foreground hover:text-primary cursor-pointer line-clamp-2">
                {article.title}
              </h4>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{article.source}</span>
                <span>{article.time}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Newsletter Signup */}
      <Card className="bg-muted">
        <CardContent className="p-6 text-center space-y-3">
          <h3 className="font-serif font-bold text-lg">Stay Informed</h3>
          <p className="text-sm text-muted-foreground">Get the latest news delivered to your inbox</p>
          <div className="space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-sm border border-border rounded-md bg-background"
            />
            <button className="w-full bg-primary text-primary-foreground text-sm font-medium py-2 rounded-md hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
