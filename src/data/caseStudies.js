export const caseStudies = {
  paypulse: {
    title: "Paypulse",
    subtitle: "Financial App",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
    services: ["UX Design", "UI Design", "Graphic design", "Interaction design"],
    overview: "The objective of this project is to create a convenient and user-friendly app that provide users with a secure, simple, and reliable platform for managing finances, tracking expenses, setting savings goals, and making informed financial decisions.",
    launchDate: "Sep 2024",
    tools: ["Figma", "FigJam", "Photoshop", "Illustrator"],
    process: [
      { phase: "Discover", items: ["User Research", "Competitive Analysis"] },
      { phase: "Define", items: ["User Personas", "Empathy Map", "User Journey Map"] },
      { phase: "Ideate", items: ["User Flow", "Information Architecture"] },
      { phase: "Design", items: ["Wireframes", "Hi-Fi Designs", "Prototype"] }
    ],
    sections: [
      {
        type: "research",
        label: "UCD Process",
        title: "Research and Analysis",
        text: "The initial phase involves conducting thorough user research to understand the target audience's financial habits, challenges, and preferences...",
        images: [
          { label: "User Interviews", url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" },
          { label: "Competitor analysis", url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop" }
        ]
      },
      {
        type: "personas",
        label: "UCD Process",
        title: "User Personas and Journey Mapping",
        text: "Based on the research findings, user personas are created to represent the different types of users who interact with the financial app...",
        images: [
          { label: "User Personas", url: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=600&h=400&fit=crop" },
          { label: "Journey Mapping", url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=400&fit=crop" }
        ]
      },
      {
        type: "ideation",
        label: "UCD Process",
        title: "Ideation and Concept Development",
        text: "Based on the research findings, the ideation and concept development phase focuses on transforming user insights into innovative solutions...",
        images: [
          { label: "Brainstorming sessions", url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" },
          { label: "Information Architecture", url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop" }
        ]
      },
      {
        type: "wireframing",
        label: "UCD Process",
        title: "High-Fidelity Wireframing",
        text: "Using the insights gained from research and ideation, the design team creates an information architecture that outlines the structure and organization of the app...",
        images: [
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop",
          "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=350&fit=crop",
          "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&h=350&fit=crop",
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop",
          "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=350&fit=crop",
          "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&h=350&fit=crop"
        ]
      },
      {
        type: "implementation",
        layout: "split-blue",
        title: "Implementation and Development",
        text: "The UX/UI designer collaborates closely with the development team to ensure the accurate implementation of the final design. Regular communication and collaboration are maintained to address any technical challenges and ensure that the design vision is realized. Quality assurance testing is conducted to identify and resolve any bugs or issues. The iterative process of design and development continues until the app meets the desired standards and functionality."
      },
      {
        type: "launch",
        layout: "purple-box",
        title: "Launch and Evaluation",
        text: "After the app is launched, user engagement, conversion rates, and customer satisfaction are continuously monitored using analytics tools. A comprehensive evaluation is conducted to assess key performance indicators, usability, and customer feedback. The results are analyzed, and the impact of the app's design on user behavior, business goals, and overall success is determined. The case study concludes with an overview of the achieved objectives and recommendations for further enhancements and optimizations based on the findings."
      },
      {
        type: "conclusion",
        layout: "centered",
        title: "Conclusion",
        text: "The PayPulse design process transformed user research into a simple, secure, and user-friendly financial app. Through user personas, journey mapping, ideation, information architecture, and high-fidelity wireframing, the app was designed to help users manage transactions, track spending, save effectively, and make better financial decisions."
      }
    ],
    nextProjects: [
      { slug: "storecom", title: "Store.com", tag: "Clothing", subtitle: "Website Design / Website Development", image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&h=400&fit=crop", dark: true },
      { slug: "eventspace", title: "EventSpace", tag: "Lifestyle", subtitle: "Website Design / Website Development", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop", dark: false }
    ]
  }
  // Add more case studies here as you design them:
  // storecom: { ... },
  // eventspace: { ... },
};