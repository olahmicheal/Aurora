export const creators = {
  joe: {
    name: "Joe",
    fullName: "Joseph Ogoliegune",
    role: "Product Designer & Project Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop",
    bio: [
      "I'm an Industrial Designer turned UX Designer based in Lagos, Nigeria. My passion is in creating human-centered designs that can improve our daily lives while creating a cross-cultural impact.",
      "My past experience lends me the ability to communicate effectively across multiple divisions and collaborate efficiently in an agile working environment. That's why I would love to work with the next product team to design solutions that we are all proud of."
    ],
    connectText: "Let's connect!",
    history: [
      {
        company: "Aurora Creative",
        logo: "A",
        logoColor: "bg-red-600",
        role: "UX/UI Designer",
        type: "Design",
        date: "Jan 2025 - Present",
        points: [
          "Designed end-to-end product experiences for web and mobile applications.",
          "Delivered branding, web, and mobile design assets for 20+ clients using Adobe XD, Figma, and Illustrator."
        ]
      },
      {
        company: "Globus Bank",
        logo: "G",
        logoColor: "bg-red-500",
        role: "UX/UI Designer",
        type: "Intern",
        date: "2024",
        points: [
          "Supported the design team in developing UI layouts for mobile and web apps.",
          "Assisted in user research, prototyping, and creating visual assets, and Contributed to brand consistency and improved usability in multiple design"
        ]
      },
      {
        company: "Freelance",
        logo: "F",
        logoColor: "bg-green-500",
        role: "UX/UI Designer",
        type: "Freelance",
        date: "Sep 2021 - 2023",
        points: [
          "Designed intuitive web and mobile interfaces that improved user experience and aligned with business goals across multiple client projects.",
          "Conducted user research, created wireframes, prototypes, and high-fidelity designs in Figma, ensuring seamless and user-centered digital experiences."
        ]
      }
    ],
    skills: [
      "User Interface Design",
      "User experience Design",
      "Product Design",
      "Mobile Apps Design",
      "Web Design",
      "Design system",
      "Project management"
    ],
    tools: [
      { name: "Figma", color: "bg-purple-100" },
      { name: "Adobe XD", color: "bg-pink-100" },
      { name: "Sketch", color: "bg-yellow-100" },
      { name: "Principal", color: "bg-blue-100" },
      { name: "Slack", color: "bg-green-100" },
      { name: "Framer", color: "bg-gray-100" },
      { name: "Canva", color: "bg-cyan-100" },
      { name: "Photoshop", color: "bg-blue-100" },
      { name: "Illustrator", color: "bg-orange-100" },
      { name: "Corel", color: "bg-green-100" }
    ],
    certifications: [
      {
        company: "Google",
        logo: "Google",
        logoColor: "text-blue-500",
        title: "UX Design Certificate",
        date: "October 2023 | Coursera"
      },
      {
        company: "IBM",
        logo: "IBM",
        logoColor: "text-blue-600",
        title: "IBM Enterprise Design Thinkin..",
        date: "September 2024"
      }
    ],
    languages: [
      { name: "English", flag: "🇬🇧" }
    ]
  },
  kabiru: {
    name: "Sheriff",
    fullName: "Sheriff Kabiru",
    role: "Electrical Design Engineer (MEP)",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=700&fit=crop",
    bio: [
      "I'm Sheriff Kabiru, an electrical MEP engineer with expertise in power distribution, ELV systems, and renewable energy integration for building projects. I design distribution, lighting, fire alarm, and backup power systems, all compliant with Nigerian engineering standards.",
      "I size solar PV systems (off-grid, on-grid, and hybrid) and explore innovative piezoelectric energy harvesting for smart building power. My goal is to make buildings energy-efficient, safe, and grid-resilient."
    ],
    connectText: "Let's connect!",
    history: [
      {
        company: "MEP Engineering Consultants",
        logo: "M",
        logoColor: "bg-red-600",
        role: "Lead Electrical MEP & Renewable Engineer",
        type: "Full-time",
        date: "2022 - Present",
        points: [
          "Design electrical distribution systems (switchgear, main distribution boards, sub-panels, transformers) per NESIS 2015 standards.",
          "Size backup power systems including generators, UPS, and Automatic Transfer Switches (ATS) per NERC and DisCo requirements."
        ]
      },
      {
        company: "Power & Renewable Solutions Nigeria",
        logo: "P",
        logoColor: "bg-blue-600",
        role: "Electrical Systems & Solar PV Design Engineer",
        type: "Contract",
        date: "2020 - 2022",
        points: [
          "Integrated renewable energy into MEP designs to reduce grid dependency and operational generator fuel expenses.",
          "Explored piezoelectric energy harvesting for smart building and floor-integrated micro-power applications."
        ]
      },
      {
        company: "Building Services Engineering Ltd",
        logo: "B",
        logoColor: "bg-green-600",
        role: "Engineering",
        type: "Full-time",
        date: "2018 - 2020",
        points: [
          "Coordinated directly with Electricity Distribution Companies (DisCos) for service entrances and metering compliance.",
          "Ensured full compliance with NBC, NESIS, NERC, and COREN engineering standards across commercial and residential projects."
        ]
      }
    ],
    skills: [
      "Electrical Layouts (Lighting, Socket)",
      "Schematic Diagrams (SLDs & Panel)",
      "Mechanical Systems (HVAC, Water)",
      "Power Distribution Design (NESIS 2015)",
      "Solar PV System Sizing (On-grid, Off-grid)",
      "Backup Power & ATS Sizing (Generator)",
      "Electricity DisCo Service Integration"
    ],
    tools: [
      { name: "AutoCAD", color: "bg-red-100" },
      { name: "Microsoft Excel", color: "bg-green-100" },
      { name: "VFD Software", color: "bg-blue-100" },
      { name: "PVsyst", color: "bg-yellow-100" },
      { name: "DIALux", color: "bg-gray-100" },
      { name: "MATLAB / ETAP", color: "bg-orange-100" }
    ],
    certifications: [
      {
        company: "COREN",
        logo: "COREN",
        logoColor: "text-green-600",
        title: "Council for the Regulation of Engineering in Nigeria",
        date: "2021"
      },
      {
        company: "NERC",
        logo: "NERC",
        logoColor: "text-blue-600",
        title: "Nigerian Electricity Regulatory Commission",
        date: "2022"
      }
    ],
    languages: [
      { name: "English", flag: "🇬🇧" }
    ]
  }
};

export const creatorList = Object.entries(creators).map(([slug, data]) => ({
  slug,
  name: data.fullName,
  role: data.role
}));