"use client"

import { Button } from "@/components/ui/button"
import { Bell, User } from "lucide-react"
import { DarkModeToggle } from "./dark-mode-toggle"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-30 bg-background border-b border-border shadow-sm ml-64">
      <div className="px-6">
        <div className="flex items-center justify-end h-16">
          {/* User actions */}
          <div className="flex items-center space-x-4">
            <DarkModeToggle />

            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-accent rounded-full"></span>
            </Button>

            {/* User menu */}
            <Button variant="ghost" size="sm">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
