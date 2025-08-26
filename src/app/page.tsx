import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-2">
          <h1 className="text-4xl font-serif font-black text-primary">NewsHub</h1>
          <p className="text-lg text-muted-foreground">Your trusted news aggregator</p>
        </div>

        <div className="space-y-4">
          <p className="text-foreground">Stay informed with the latest news from trusted sources worldwide</p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/signup">Create Account</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
