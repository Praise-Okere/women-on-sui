"use client"

import type React from "react"

import { useState } from "react"
import { Check } from "lucide-react"

export default function JoinForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    telegram: "",
    xHandle: "",
    description: "",
    scheduleCall: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: "",
        phone: "",
        email: "",
        telegram: "",
        xHandle: "",
        description: "",
        scheduleCall: false,
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Join the Women on Sui Community</h2>
          <p className="text-muted-foreground text-lg">Be part of something amazing</p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-4"></div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Telegram Handle</label>
              <input
                type="text"
                name="telegram"
                value={formData.telegram}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                placeholder="@yourhandle"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">X Handle</label>
            <input
              type="text"
              name="xHandle"
              value={formData.xHandle}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
              placeholder="@yourhandle"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">What best describes you?</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white resize-none"
              placeholder="e.g., Developer, Designer, Marketer, Founder..."
              rows={3}
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="scheduleCall"
              name="scheduleCall"
              checked={formData.scheduleCall}
              onChange={handleChange}
              className="w-4 h-4 rounded border-input cursor-pointer"
            />
            <label htmlFor="scheduleCall" className="text-sm text-foreground cursor-pointer">
              Schedule a call with the founder (optional)
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
          >
            {submitted ? (
              <>
                <Check size={20} />
                Submitted Successfully!
              </>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </section>
  )
}
