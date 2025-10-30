import Image from "next/image"

const teamMembers = [
  {
    id: 1,
    name: "Jenny(Rainbows)",
    role: "Founder",
    image: "/jenny.jpg",
  },
  {
    id: 2,
    name: "JhuVers",
    role: "Community Lead",
    image: "/jhuvers.jpeg",
  },
  {
    id: 3,
    name: "AIZCO",
    role: "Head of Graphics Design",
    image: "/aizco.jpg",
  },
  {
    id: 4,
    name: "Aggy",
    role: "Community Manager/co space host",
    image: "/aggy.jpg",
  },
]

export default function Team() {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Meet the Team</h2>
          <p className="text-muted-foreground text-lg">Passionate women leading the way</p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group text-center animate-fade-in-up"
              style={{ animationDelay: `${member.id * 0.1}s` }}
            >
              <div className="relative h-64 w-full mb-4 overflow-hidden rounded-xl">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-primary font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
