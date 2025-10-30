import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg flex items-center justify-center">
                <Image src="/sui women.jpg" alt="Women on Sui logo" width={20} height={20} className="object-contain" />
              </div>
              <span className="font-bold text-lg">Women on Sui</span>
            </div>
            <p className="text-sm opacity-80">Empowering women in Web3</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="opacity-80 hover:opacity-100 transition-opacity">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="opacity-80 hover:opacity-100 transition-opacity">
                  About
                </a>
              </li>
              <li>
                <a href="#gallery" className="opacity-80 hover:opacity-100 transition-opacity">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#team" className="opacity-80 hover:opacity-100 transition-opacity">
                  Team
                </a>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#merch" className="opacity-80 hover:opacity-100 transition-opacity">
                  Merch
                </a>
              </li>
              <li>
                <a href="#join-section" className="opacity-80 hover:opacity-100 transition-opacity">
                  Join Us
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  X/Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                <Mail size={20} />
              </a>

            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
         <a href="https://x.com/P_Tech_" className="opacity-80 hover:opacity-100 transition-opacity">
                Built by P_Tech_
                </a>
          <p>Copyright © {currentYear} Women on Sui. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
