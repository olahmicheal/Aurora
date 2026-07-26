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
  }
  // Add more creators here:
  // toluwanimi: { ... },
  // olatunbosun: { ... },
  // kabiru: { ... },
  // jogbodo: { ... }
};

export const creatorList = Object.entries(creators).map(([slug, data]) => ({
  slug,
  name: data.fullName,
  role: data.role
}));