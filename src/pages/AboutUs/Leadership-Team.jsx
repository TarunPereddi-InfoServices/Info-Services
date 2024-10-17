import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Linkedin } from 'lucide-react'

const teamMembers = [
  { id: 1, name: "John Lubig", role: "VP", title: "VP - Head of Digital Strategy", linkedin: "https://linkedin.com/in/johnlubig" },
  { id: 2, name: "Jane Doe", role: "Director", title: "Director of Marketing", linkedin: "https://linkedin.com/in/janedoe" },
  { id: 3, name: "Bob Smith", role: "Manager", title: "Product Manager", linkedin: "https://linkedin.com/in/bobsmith" },
  { id: 4, name: "Alice Johnson", role: "Advisor", title: "Technical Advisor", linkedin: "https://linkedin.com/in/alicejohnson" },
  { id: 5, name: "Charlie Brown", role: "VP", title: "VP of Engineering", linkedin: "https://linkedin.com/in/charliebrown" },
  { id: 6, name: "Diana Prince", role: "Director", title: "Director of Operations", linkedin: "https://linkedin.com/in/dianaprince" },
]

const filters = ["VPs", "Directors", "Managers", "Advisors"]

function LeadershipTeam() {
  const [activeFilter, setActiveFilter] = useState("VPs")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768)
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  const filteredMembers = teamMembers.filter(member => 
    activeFilter === "VPs" ? member.role === "VP" :
    activeFilter === "Directors" ? member.role === "Director" :
    activeFilter === "Managers" ? member.role === "Manager" :
    activeFilter === "Advisors" ? member.role === "Advisor" :
    true
  )

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121212] text-white p-4 sm:p-8 md:p-16 lg:p-20 sticky top-0 rounded-t-[50px]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-center mb-4">Leadership Team</h1>
        <p className="text-center text-gray-400 mb-8 sm:mb-12 lg:mb-16 max-w-2xl mx-auto text-sm sm:text-base">
          Illuminating instances of achievement.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8 sm:mb-12 lg:mb-16">
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 sm:px-8 lg:px-12 py-2 sm:py-3 rounded-full text-sm sm:text-base lg:text-lg ${
                activeFilter === filter 
                  ? "bg-gradient-to-r from-[#684FB2] via-[#9023AE] to-[#405F9E] text-white border-none" 
                  : "bg-transparent text-gray-400 border border-gray-700 hover:bg-gray-800"
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 justify-items-center">
  {filteredMembers.map((member) => (
    <div key={member.id} className="relative w-full sm:w-48 rounded-3xl overflow-hidden">
      {isMobile ? (
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="block">
          <div className="aspect-w-3 aspect-h-2 sm:aspect-h-4 bg-gray-300 mb-2">
            <img
              src={`https://via.placeholder.com/225x300?text=${encodeURIComponent(member.name)}`}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-2">
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-400">{member.title}</p>
          </div>
        </a>
      ) : (
        <div className="group h-40 sm:h-60">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div 
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'grey',
              color: '#333',
              fontSize: '14px',
              fontWeight: 'bold'
            }}
            className="group-hover:blur-sm transition-all duration-300"
          >
            {member.name}
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-lg font-semibold text-center">{member.name}</h3>
            <p className="text-sm text-center mt-2">{member.title}</p>
            <Button 
              variant="secondary"
              size="sm"
              className="mt-4"
            >
              <a 
                href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
  ))}
</div>
      </div>
    </div>
  )
}

export default LeadershipTeam