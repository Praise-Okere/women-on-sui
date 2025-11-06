"use client"

export default function JoinForm() {
  return (
    <section className="flex flex-col items-center justify-center py-20 bg-white/80 backdrop-blur-sm text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">Join Our Community 🌸</h2>
      <p className="text-gray-700 mb-6 max-w-xl">
        Be part of the Women on Sui network — learn, build, and grow with other amazing women in Web3.
      </p>

      <a
        href="https://forms.gle/9KNYCHwC9HxAB59a7"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition"
      >
        Fill the Google Form
      </a>
    </section>
  )
}
