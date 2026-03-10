"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { ServiceProvider } from "@/lib/providers-data"
import {
  Star,
  MapPin,
  Clock,
  BadgeCheck,
  X,
  UserPlus,
  MessageCircle,
  MoreHorizontal,
  Briefcase,
  Users,
} from "lucide-react"

interface ProviderCardProps {
  provider: ServiceProvider
  onConnect: (id: string) => void
  onRemove: (id: string) => void
}

export function ProviderCard({ provider, onConnect, onRemove }: ProviderCardProps) {
  const [isConnected, setIsConnected] = useState(false)
  const [isRemoved, setIsRemoved] = useState(false)

  if (isRemoved) return null

  const handleConnect = () => {
    setIsConnected(true)
    onConnect(provider.id)
  }

  const handleRemove = () => {
    setIsRemoved(true)
    onRemove(provider.id)
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      plumbing: "bg-sky-500/10 text-sky-600 border-sky-500/20",
      electrical: "bg-amber-500/10 text-amber-600 border-amber-500/20",
      painting: "bg-rose-500/10 text-rose-600 border-rose-500/20",
      beautician: "bg-fuchsia-500/10 text-fuchsia-600 border-fuchsia-500/20",
    }
    return colors[category] || "bg-gray-500/10 text-gray-600 border-gray-500/20"
  }

  return (
    <div className="group relative bg-white rounded-2xl border border-zinc-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-zinc-300/80 transition-all duration-300 overflow-hidden">
      
      {/* Cover gradient */}
      <div className="h-20 bg-gradient-to-br from-zinc-100 via-zinc-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.02)_0%,transparent_50%)]" />
        
        <div className="absolute top-2 right-2 flex gap-1">
          
          {/* Remove button */}
          <button
            onClick={handleRemove}
            aria-label="Remove provider"
            className="p-1.5 rounded-full bg-white/80 backdrop-blur-sm text-zinc-400 hover:text-zinc-600 hover:bg-white transition-all opacity-0 group-hover:opacity-100"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          {/* More options */}
          <button
            aria-label="More options"
            className="p-1.5 rounded-full bg-white/80 backdrop-blur-sm text-zinc-400 hover:text-zinc-600 hover:bg-white transition-all opacity-0 group-hover:opacity-100"
          >
            <MoreHorizontal className="w-3.5 h-3.5" />
          </button>

        </div>
      </div>

      {/* Avatar section */}
      <div className="px-4 -mt-10 relative z-10">
        <div className="relative inline-block">
          <Avatar className="w-20 h-20 border-4 border-white shadow-lg ring-2 ring-zinc-100">
            <AvatarImage src={provider.avatar} alt={provider.name} className="object-cover" />
            <AvatarFallback className="text-lg font-semibold bg-zinc-100 text-zinc-600">
              {provider.name.split(" ").map(n => n[0]).join("")}
            </AvatarFallback>
          </Avatar>

          {provider.isOnline && (
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />
          )}

          {provider.isVerified && (
            <span className="absolute -top-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
              <BadgeCheck className="w-5 h-5 text-sky-500 fill-sky-500" />
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pt-3 pb-4">

        {/* Name */}
        <div className="mb-2">
          <h3 className="font-semibold text-zinc-900 text-[15px] leading-tight flex items-center gap-1.5">
            {provider.name}
          </h3>
          <p className="text-sm text-zinc-500 mt-0.5">
            {provider.profession}
          </p>
        </div>

        {/* Category */}
        <Badge className={`${getCategoryColor(provider.category)} text-[11px] font-medium mb-3 capitalize`}>
          {provider.category}
        </Badge>

        {/* Rating + Location */}
        <div className="flex items-center gap-3 text-xs text-zinc-500 mb-3">
          <span className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="font-medium text-zinc-700">{provider.rating}</span>
            <span>({provider.reviewCount})</span>
          </span>

          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            {provider.location}
          </span>
        </div>

        {/* Experience */}
        <div className="flex items-center gap-4 text-xs text-zinc-500 mb-3">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {provider.experience} yrs exp
          </span>

          <span className="flex items-center gap-1">
            <Briefcase className="w-3.5 h-3.5" />
            {provider.completedJobs} jobs
          </span>
        </div>

        {/* Mutual connections */}
        {provider.mutualConnections > 0 && (
          <div className="flex items-center gap-1.5 text-xs text-zinc-500 mb-4 bg-zinc-50 rounded-lg px-2.5 py-1.5">
            <Users className="w-3.5 h-3.5" />
            <span>{provider.mutualConnections} mutual connections</span>
          </div>
        )}

        {/* Price */}
        <div className="mb-4">
          <span className="text-lg font-bold text-zinc-900">
            ${provider.hourlyRate}
          </span>
          <span className="text-sm text-zinc-400">/hr</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          {isConnected ? (
            <>
              <Button
                variant="secondary"
                className="flex-1 h-9 text-sm font-medium bg-zinc-100 hover:bg-zinc-200 text-zinc-700"
              >
                <MessageCircle className="w-4 h-4 mr-1.5" />
                Message
              </Button>

              <Button
                variant="outline"
                className="h-9 text-sm font-medium text-zinc-600"
              >
                View Profile
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={handleConnect}
                className="flex-1 h-9 text-sm font-medium bg-zinc-900 hover:bg-zinc-800 text-white"
              >
                <UserPlus className="w-4 h-4 mr-1.5" />
                Connect
              </Button>

              <Button
                variant="outline"
                onClick={handleRemove}
                aria-label="Remove provider"
                className="h-9 px-3 text-zinc-500 hover:text-zinc-700 hover:bg-zinc-100"
              >
                <X className="w-4 h-4" />
              </Button>
            </>
          )}
        </div>

      </div>
    </div>
  )
}