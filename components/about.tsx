export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">About Us</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To connect, educate, and empower women in the Sui ecosystem through mentorship, collaboration, and
                opportunities.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A thriving network of women leading innovation in the Sui blockchain world.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-foreground mb-4">Founder's Story</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Women on Sui was founded with a vision to create a safe, inspiring space for women in the Sui ecosystem.
              We believe that diversity drives innovation, and we're committed to building a community where every woman
              can thrive, learn, and lead.
            </p>
            <a
              href="https://x.com/WomenOnSui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Follow Us on X
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
