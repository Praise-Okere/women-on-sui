"use client"

interface HeroProps {
  onJoinClick: () => void
}

export default function Hero({ onJoinClick }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient with subtle shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          Empowering Women in Web3
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Together on Sui
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          A community fostering innovation, connection, and opportunity for women building on the Sui blockchain.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onJoinClick}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg"
          >
            Join Us
          </button>
          <button className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
