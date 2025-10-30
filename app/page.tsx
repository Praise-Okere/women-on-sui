"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Gallery from "@/components/gallery"
import Team from "@/components/team"
import Merch from "@/components/merch"
import JoinForm from "@/components/join-form"
import Footer from "@/components/footer"
import FloatingButton from "@/components/floating-button"

export default function Home() {
  const [showJoinForm, setShowJoinForm] = useState(false)

  const scrollToJoin = () => {
    const element = document.getElementById("join-section")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main
      className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50"
      style={{
        backgroundImage: "url(WIS-298.jpg)",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="fixed inset-0 bg-gradient-to-b from-blue-50/95 via-white/90 to-blue-50/95 pointer-events-none" />

      <div className="relative z-10">
        <Navigation onJoinClick={scrollToJoin} />
        <Hero onJoinClick={scrollToJoin} />
        <About />
        <Gallery />
        <Team />
        <Merch />
        <div id="join-section">
          <JoinForm />
        </div>
        <Footer />
        <FloatingButton onClick={scrollToJoin} />
      </div>
    </main>
  )
}
