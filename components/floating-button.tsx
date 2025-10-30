"use client"

import { MessageCircle } from "lucide-react"

interface FloatingButtonProps {
  onClick: () => void
}

export default function FloatingButton({ onClick }: FloatingButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all transform hover:scale-110 flex items-center justify-center z-40"
      aria-label="Join community"
    >
      <MessageCircle size={24} />
    </button>
  )
}
