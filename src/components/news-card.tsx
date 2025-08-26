import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Article {
  id: number
  title: string
  excerpt: string
  source: string
  publishedAt: string
  category: string
  imageUrl: string
  readTime: string
}

interface NewsCardProps {
  article: Article
}

export function NewsCard({ article }: NewsCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-200 border-border bg-card">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <Image
            src={article.imageUrl || "/placeholder.svg"}
            alt={article.title}
            width={400}
            height={200}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
          />
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-primary text-primary-foreground">
              {article.category}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-3">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="font-medium">{article.source}</span>
          <div className="flex items-center space-x-2">
            <Clock className="h-3 w-3" />
            <span>{article.readTime}</span>
          </div>
        </div>

        <h3 className="font-serif font-bold text-lg leading-tight text-card-foreground group-hover:text-primary transition-colors">
          <Link href={`/article/${article.id}`} className="line-clamp-2">
            {article.title}
          </Link>
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">{article.excerpt}</p>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-muted-foreground">{article.publishedAt}</span>
          <Link
            href={`/article/${article.id}`}
            className="inline-flex items-center text-xs text-primary hover:text-primary/80 font-medium"
          >
            Read more
            <ExternalLink className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
