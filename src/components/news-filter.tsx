"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { X, Filter } from "lucide-react"

interface NewsFilterProps {
  selectedCategory: string
  selectedSource: string
  selectedTimeframe: string
  onCategoryChange: (category: string) => void
  onSourceChange: (source: string) => void
  onTimeframeChange: (timeframe: string) => void
  onClearFilters: () => void
}

const categories = ["All", "World", "Business", "Technology", "Sports", "Health", "Science"]
const sources = ["All", "Reuters", "Financial Times", "Associated Press", "Bloomberg", "CNN", "Nature", "The Lancet"]
const timeframes = ["All Time", "Last Hour", "Last 24 Hours", "Last Week", "Last Month"]

export function NewsFilter({
  selectedCategory,
  selectedSource,
  selectedTimeframe,
  onCategoryChange,
  onSourceChange,
  onTimeframeChange,
  onClearFilters,
}: NewsFilterProps) {
  const hasActiveFilters = selectedCategory !== "All" || selectedSource !== "All" || selectedTimeframe !== "All Time"

  return (
    <div className="bg-card border border-border rounded-lg p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-primary" />
          <h3 className="font-medium text-foreground">Filter News</h3>
        </div>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4 mr-1" />
            Clear
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Category</label>
          <Select value={selectedCategory} onValueChange={onCategoryChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Source</label>
          <Select value={selectedSource} onValueChange={onSourceChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select source" />
            </SelectTrigger>
            <SelectContent>
              {sources.map((source) => (
                <SelectItem key={source} value={source}>
                  {source}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Time</label>
          <Select value={selectedTimeframe} onValueChange={onTimeframeChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent>
              {timeframes.map((timeframe) => (
                <SelectItem key={timeframe} value={timeframe}>
                  {timeframe}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {selectedCategory !== "All" && (
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              Category: {selectedCategory}
            </Badge>
          )}
          {selectedSource !== "All" && (
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              Source: {selectedSource}
            </Badge>
          )}
          {selectedTimeframe !== "All Time" && (
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              Time: {selectedTimeframe}
            </Badge>
          )}
        </div>
      )}
    </div>
  )
}
