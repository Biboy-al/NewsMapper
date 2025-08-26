"use client"

import { NewsCard } from "@/components/news-card"
import { NewsFilter } from "@/components/news-filter"
import { useState, useMemo } from "react"

const mockNews = [
  {
    id: 1,
    title: "Global Climate Summit Reaches Historic Agreement on Carbon Emissions",
    excerpt:
      "World leaders unite on ambitious new targets to combat climate change, with binding commitments from major economies.",
    source: "Reuters",
    publishedAt: "2 hours ago",
    category: "World",
    imageUrl: "/climate-summit-leaders.png",
    readTime: "4 min read",
    timestamp: Date.now() - 2 * 60 * 60 * 1000,
  },
  {
    id: 2,
    title: "Tech Giants Report Strong Q4 Earnings Despite Market Volatility",
    excerpt:
      "Major technology companies exceed expectations with robust revenue growth driven by AI and cloud services.",
    source: "Financial Times",
    publishedAt: "4 hours ago",
    category: "Business",
    imageUrl: "/technology-earnings-business-charts.png",
    readTime: "3 min read",
    timestamp: Date.now() - 4 * 60 * 60 * 1000,
  },
  {
    id: 3,
    title: "Breakthrough in Quantum Computing Promises Revolutionary Applications",
    excerpt:
      "Scientists achieve new milestone in quantum error correction, bringing practical quantum computers closer to reality.",
    source: "Nature",
    publishedAt: "6 hours ago",
    category: "Technology",
    imageUrl: "/quantum-computing-laboratory-technology.png",
    readTime: "5 min read",
    timestamp: Date.now() - 6 * 60 * 60 * 1000,
  },
  {
    id: 4,
    title: "Olympic Games Preparation Enters Final Phase with New Security Measures",
    excerpt:
      "Host city implements comprehensive safety protocols as athletes from around the world prepare for competition.",
    source: "Associated Press",
    publishedAt: "8 hours ago",
    category: "Sports",
    imageUrl: "/olympic-games-stadium-preparation.png",
    readTime: "3 min read",
    timestamp: Date.now() - 8 * 60 * 60 * 1000,
  },
  {
    id: 5,
    title: "Renewable Energy Investment Reaches Record High in 2024",
    excerpt:
      "Global investment in clean energy technologies surpasses previous records, signaling shift toward sustainable future.",
    source: "Bloomberg",
    publishedAt: "10 hours ago",
    category: "Business",
    imageUrl: "/renewable-energy-solar-wind-power.png",
    readTime: "4 min read",
    timestamp: Date.now() - 10 * 60 * 60 * 1000,
  },
  {
    id: 6,
    title: "Medical Researchers Develop New Treatment for Rare Genetic Disease",
    excerpt: "Innovative gene therapy shows promising results in clinical trials, offering hope to patients worldwide.",
    source: "The Lancet",
    publishedAt: "12 hours ago",
    category: "Health",
    imageUrl: "/medical-research-laboratory-gene-therapy.png",
    readTime: "6 min read",
    timestamp: Date.now() - 12 * 60 * 60 * 1000,
  },
  {
    id: 7,
    title: "International Trade Negotiations Resume After Month-Long Hiatus",
    excerpt:
      "Major economies return to negotiating table with renewed focus on sustainable trade practices and digital commerce.",
    source: "Reuters",
    publishedAt: "14 hours ago",
    category: "World",
    imageUrl: "/international-trade-negotiations-meeting.png",
    readTime: "4 min read",
    timestamp: Date.now() - 14 * 60 * 60 * 1000,
  },
  {
    id: 8,
    title: "AI Startup Raises $500M in Largest Series B Round This Year",
    excerpt:
      "Artificial intelligence company focused on healthcare applications secures massive funding from top-tier investors.",
    source: "Bloomberg",
    publishedAt: "16 hours ago",
    category: "Technology",
    imageUrl: "/ai-startup-funding-technology-office.png",
    readTime: "3 min read",
    timestamp: Date.now() - 16 * 60 * 60 * 1000,
  },
  {
    id: 9,
    title: "Championship Finals Set Record Viewership Numbers Worldwide",
    excerpt:
      "Global audience tunes in for thrilling championship match, breaking previous streaming and broadcast records.",
    source: "Associated Press",
    publishedAt: "18 hours ago",
    category: "Sports",
    imageUrl: "/championship-sports-stadium-crowd.png",
    readTime: "2 min read",
    timestamp: Date.now() - 18 * 60 * 60 * 1000,
  },
]

interface NewsGridProps {
  category?: string
}

export function NewsGrid({ category }: NewsGridProps) {
  const [selectedCategory, setSelectedCategory] = useState(category || "All")
  const [selectedSource, setSelectedSource] = useState("All")
  const [selectedTimeframe, setSelectedTimeframe] = useState("All Time")

  const filteredNews = useMemo(() => {
    return mockNews.filter((article) => {
      // Category filter
      if (selectedCategory !== "All" && article.category !== selectedCategory) {
        return false
      }

      // Source filter
      if (selectedSource !== "All" && article.source !== selectedSource) {
        return false
      }

      // Timeframe filter
      if (selectedTimeframe !== "All Time") {
        const now = Date.now()
        const articleTime = article.timestamp
        const timeDiff = now - articleTime

        switch (selectedTimeframe) {
          case "Last Hour":
            if (timeDiff > 60 * 60 * 1000) return false
            break
          case "Last 24 Hours":
            if (timeDiff > 24 * 60 * 60 * 1000) return false
            break
          case "Last Week":
            if (timeDiff > 7 * 24 * 60 * 60 * 1000) return false
            break
          case "Last Month":
            if (timeDiff > 30 * 24 * 60 * 60 * 1000) return false
            break
        }
      }

      return true
    })
  }, [selectedCategory, selectedSource, selectedTimeframe])

  const handleClearFilters = () => {
    setSelectedCategory("All")
    setSelectedSource("All")
    setSelectedTimeframe("All Time")
  }

  return (
    <div className="space-y-6">
      <NewsFilter
        selectedCategory={selectedCategory}
        selectedSource={selectedSource}
        selectedTimeframe={selectedTimeframe}
        onCategoryChange={setSelectedCategory}
        onSourceChange={setSelectedSource}
        onTimeframeChange={setSelectedTimeframe}
        onClearFilters={handleClearFilters}
      />

      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {filteredNews.length} article{filteredNews.length !== 1 ? "s" : ""}
          {selectedCategory !== "All" && ` in ${selectedCategory}`}
        </p>
      </div>

      {filteredNews.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No articles found matching your filters.</p>
          <button
            onClick={handleClearFilters}
            className="mt-2 text-primary hover:text-primary/80 font-medium underline underline-offset-4"
          >
            Clear filters to see all articles
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  )
}
