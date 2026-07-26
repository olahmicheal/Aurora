import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PaypulseCaseStudy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Aurora Case Study Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center gap-2">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">A</div>
          </button>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => navigate('/')} className="text-sm font-medium hover:text-red-600 transition-colors">Home</button>
            <span className="text-sm font-medium text-gray-400 cursor-default">Services</span>
            <span className="text-sm font-medium text-gray-400 cursor-default">About</span>
            <button onClick={() => navigate('/#contact')} className="px-6 py-2.5 bg-red-600 text-white rounded-full text-sm font-medium hover:bg-red-700 transition-all">
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Case Study Header */}
      <section className="pt-28 pb-8 max-w-7xl mx-auto px-6">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-600 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to portfolio
        </button>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
          Paypulse -<br />Financial App
        </h1>
      </section>

     {/* Paypulse Landing Page Showcase */}
<section className="bg-white mb-20">
  {/* Nav */}
  <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-purple-800 rounded flex items-center justify-center">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 12h5v8h10v-8h5L12 2z"/>
        </svg>
      </div>
      <span className="text-purple-900 font-bold text-xl">Paypulse</span>
    </div>
    
    <div className="hidden md:flex items-center gap-8">
      <a href="#" className="text-purple-900 font-semibold text-sm hover:text-purple-700">HOME</a>
      <a href="#" className="text-purple-900 font-semibold text-sm hover:text-purple-700">ABOUT US</a>
      <a href="#" className="text-purple-900 font-semibold text-sm hover:text-purple-700">CONTACT</a>
      <a href="#" className="text-purple-900 font-semibold text-sm hover:text-purple-700">HELP</a>
    </div>

    <div className="flex items-center gap-3">
      <button className="px-6 py-2 border-2 border-purple-900 text-purple-900 rounded-lg font-semibold text-sm hover:bg-purple-50 transition-colors">
        SIGN IN
      </button>
      <button className="px-6 py-2 bg-purple-900 text-white rounded-lg font-semibold text-sm hover:bg-purple-800 transition-colors">
        SIGN UP
      </button>
    </div>
  </nav>

  {/* Hero */}
  <section className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-2 gap-12 items-center">
    {/* Left Content */}
    <div className="space-y-6">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
        Your financial security<br />
        <span className="text-purple-900">is our priority</span>
      </h1>
      <p className="text-gray-600 text-lg max-w-md leading-relaxed">
        Paypulse helps over 5 million customers achieve their financial goals by helping them save and invest with seamless and stress free services.
      </p>
      <div className="flex gap-4">
        <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          Get on Iphone
        </button>
        <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31zM6.05 2.66l10.76 6.22-2.27 2.27L6.05 2.66z"/>
          </svg>
          Get on Android
        </button>
      </div>
    </div>

    {/* Right Image */}
    <div className="relative">
      <div className="border-[6px] border-purple-900 rounded-lg overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=500&fit=crop" 
          alt="Man using Paypulse" 
          className="w-full h-auto object-cover"
        />
      </div>
      {/* Floating Cards */}
      <div className="absolute top-4 left-4 bg-white rounded-lg px-4 py-2 shadow-lg">
        <p className="text-[10px] text-gray-500 uppercase tracking-wide">Annual Profit</p>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">$450K</span>
          <span className="text-green-500 text-xs font-semibold">+42.5%</span>
        </div>
      </div>
      <div className="absolute top-4 right-16 bg-white rounded-lg px-4 py-2 shadow-lg">
        <p className="text-[10px] text-gray-500 uppercase tracking-wide">Swift Investment</p>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">$52</span>
          <span className="text-green-500 text-xs font-semibold">+11%</span>
        </div>
      </div>
    </div>
  </section>

  {/* Features */}
  <section className="max-w-6xl mx-auto px-8 py-16">
    <div className="grid md:grid-cols-3 gap-12 text-center">
      {/* Feature 1 */}
      <div className="space-y-4">
        <div className="w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0110 0v4"/>
          </svg>
        </div>
        <h3 className="text-purple-900 font-bold text-lg">Your Security is our Priority</h3>
        <p className="text-gray-600 text-sm leading-relaxed px-4">
          At Paypulse security of your financial information is paramount. That's why we employ state-of-the-art encryption technologies and rigorous security protocols to protect your data.
        </p>
        <a href="#" className="text-purple-900 text-sm font-semibold hover:underline">learn more &gt;&gt;</a>
      </div>

      {/* Feature 2 */}
      <div className="space-y-4">
        <div className="w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
            <path d="M5 13l4 4L19 7"/>
          </svg>
        </div>
        <h3 className="text-purple-900 font-bold text-lg">Top Notch Services</h3>
        <p className="text-gray-600 text-sm leading-relaxed px-4">
          Showcase exceptional customer service, including 24/7 support, personalized financial advice, and a commitment to resolving issues quickly and effectively.
        </p>
        <a href="#" className="text-purple-900 text-sm font-semibold hover:underline">learn more &gt;&gt;</a>
      </div>

      {/* Feature 3 */}
      <div className="space-y-4">
        <div className="w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
        </div>
        <h3 className="text-purple-900 font-bold text-lg">Innovative technology</h3>
        <p className="text-gray-600 text-sm leading-relaxed px-4">
          Promote the use of cutting-edge technology, such as mobile banking apps, AI-driven financial planning tools, and seamless online services that enhance user experience.
        </p>
        <a href="#" className="text-purple-900 text-sm font-semibold hover:underline">learn more &gt;&gt;</a>
      </div>
    </div>
  </section>
</section>

      {/* Overview Section (about project.jpg) */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Left Sidebar */}
          <div className="md:col-span-4 space-y-10">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Services</h3>
              <p className="text-gray-600 leading-relaxed">
                UX Design, UI Design,<br />
                Graphics design, Information<br />
                design
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Launch date</h3>
              <p className="text-gray-600 text-lg">Sep 2024</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">Tools used</h3>
              <div className="flex gap-4">
                {/* Figma */}
                <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 38 57" fill="none"><path d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z" fill="#1ABCFE"/><path d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z" fill="#0ACF83"/><path d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0H19Z" fill="#FF7262"/><path d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z" fill="#F24E1E"/><path d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z" fill="#A259FF"/></svg>
                </div>
                {/* Photoshop */}
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-700 font-bold text-xs">Ps</span>
                </div>
                {/* Illustrator */}
                <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                {/* FigJam */}
                <div className="w-14 h-14 rounded-xl bg-red-100 flex items-center justify-center">
                  <div className="flex gap-0.5">
                    <div className="w-2 h-2 rounded-full bg-red-500"/><div className="w-2 h-2 rounded-full bg-red-500"/><div className="w-2 h-2 rounded-full bg-red-500"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="md:col-span-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Overview</h3>
            <p className="text-gray-700 leading-[1.8] text-lg">
              The objective of this project is to create a convenient and user-friendly app that 
              provide users with a secure, simple, and reliable platform for managing finances, 
              tracking expenses, setting savings goals, and making informed financial decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Design Process (design process.jpg) */}
      <section className="bg-[#FFFBF7] py-20 mb-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">Design Process</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { phase: 'Discover', items: ['User Research', 'Competitive Analysis'] },
              { phase: 'Define', items: ['User Personas', 'Empathy Map', 'User Journey Map'] },
              { phase: 'Ideate', items: ['User Flow', 'Information Architecture'] },
              { phase: 'Design', items: ['Wireframes', 'Hi-Fi Designs', 'Prototype'] },
            ].map((p, i) => (
              <div key={i} className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-600" />
                  <h3 className="font-bold text-gray-900 text-lg">{p.phase}</h3>
                </div>
                <ul className="space-y-2 pl-5">
                  {p.items.map((item, idx) => (
                    <li key={idx} className="text-gray-600 text-sm font-light">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research and Analysis (5.png) */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <span className="text-blue-600 font-semibold text-sm tracking-wide mb-3 block">UCD Process</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Research and Analysis</h2>
        <p className="text-gray-700 leading-[1.8] mb-12 max-w-5xl text-lg">
          The initial phase involves conducting thorough user research to understand the target audience's financial habits, challenges, and 
          preferences. User interviews, surveys, and competitor analysis are used to gather valuable insights into how people manage their 
          income, expenses, savings, and budgets. The research aims to identify key user needs, security concerns, and opportunities for 
          differentiation in the financial technology market. Data on user demographics, spending patterns, financial goals, and technology 
          preferences are also collected to guide the app's design and feature development.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {/* User Interviews */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-purple-200">
            <div className="absolute top-4 left-4 z-10 bg-white px-4 py-2 rounded-lg shadow-sm">
              <span className="text-blue-600 font-semibold">User interviews</span>
            </div>
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&h=450&fit=crop" alt="User Interviews" className="w-full h-80 object-cover" />
          </div>
          {/* Competitor Analysis */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-purple-200">
            <div className="absolute top-4 left-4 z-10 bg-white px-4 py-2 rounded-lg shadow-sm">
              <span className="text-blue-600 font-semibold">Competitor analysis</span>
            </div>
            <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&h=450&fit=crop" alt="Competitor Analysis" className="w-full h-80 object-cover" />
          </div>
        </div>
      </section>

      {/* User Personas and Journey Mapping (6.png) */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <span className="text-blue-600 font-semibold text-sm tracking-wide mb-3 block">UCD Process</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">User Personas and Journey Mapping</h2>
        <p className="text-gray-700 leading-[1.8] mb-12 max-w-5xl text-lg">
          Based on the research findings, user personas are created to represent the different types of users who interact with the financial 
          app, highlighting their unique financial behaviors, goals, needs, and challenges. These personas enable the design team to better 
          understand user motivations and develop solutions that provide personalized, accessible, and efficient financial experiences. Journey 
          mapping techniques are used to visualize the user's entire interaction with the app, from account registration and managing 
          finances to making transactions, saving money, and accessing financial services. The journey map helps identify user pain points, 
          moments of frustration, and opportunities for improvement to create a seamless and user-centered financial management experience.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative rounded-2xl overflow-hidden border-2 border-purple-200">
            <div className="absolute top-4 left-4 z-10 bg-white px-4 py-2 rounded-lg shadow-sm">
              <span className="text-blue-600 font-semibold">User Personas</span>
            </div>
            <img src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=700&h=450&fit=crop" alt="User Personas" className="w-full h-96 object-cover" />
          </div>
          <div className="relative rounded-2xl overflow-hidden border-2 border-purple-200">
            <div className="absolute top-4 left-4 z-10 bg-white px-4 py-2 rounded-lg shadow-sm">
              <span className="text-blue-600 font-semibold">Journey Mapping</span>
            </div>
            <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=700&h=450&fit=crop" alt="Journey Mapping" className="w-full h-96 object-cover" />
          </div>
        </div>
      </section>

      {/* Ideation and Concept Development (7.png) */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <span className="text-blue-600 font-semibold text-sm tracking-wide mb-3 block">UCD Process</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ideation and Concept Development</h2>
        <p className="text-gray-700 leading-[1.8] mb-12 max-w-5xl text-lg">
          Based on the research findings, the ideation and concept development phase focuses on transforming user insights into innovative 
          solutions that address the challenges identified during the research process. Various ideas are explored to improve financial 
          management, enhance user engagement, and create a seamless experience for PayPulse users. Through brainstorming and 
          evaluation, concepts are developed around key features such as expense tracking, personalized budgeting, automated savings, 
          secure transactions, and financial insights. The final concept aims to provide users with a simple, reliable, and intuitive financial 
          platform that helps them make smarter decisions, achieve their financial goals, and maintain better control over their finances.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative rounded-2xl overflow-hidden border-2 border-purple-200">
            <div className="absolute top-4 left-4 z-10 bg-white px-4 py-2 rounded-lg shadow-sm">
              <span className="text-blue-600 font-semibold">Brainstorming sessions</span>
            </div>
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&h=450&fit=crop" alt="Brainstorming" className="w-full h-96 object-cover" />
          </div>
          <div className="relative rounded-2xl overflow-hidden border-2 border-purple-200">
            <div className="absolute top-4 left-4 z-10 bg-white px-4 py-2 rounded-lg shadow-sm">
              <span className="text-blue-600 font-semibold">Information Architecture</span>
            </div>
            <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&h=450&fit=crop" alt="Information Architecture" className="w-full h-96 object-cover" />
          </div>
        </div>
      </section>

{/* High-Fidelity Wireframing */}
<section className="max-w-7xl mx-auto px-6 mb-24">
  <span className="text-blue-600 font-semibold text-sm tracking-wide mb-3 block">UCD Process</span>
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">High-Fidelity Wireframing</h2>
  <p className="text-gray-700 leading-[1.8] mb-12 max-w-5xl text-lg">
    Using the insights gained from research and ideation, the design team creates an information architecture that outlines the 
    structure and organization of the app. The team develops high-fidelity wireframes that depict the app's navigation, content 
    organization, and user flow. The wireframes serve as a blueprint for the app's layout and functionality, ensuring a logical hierarchy 
    and intuitive user interface.
  </p>
  
  <div className="grid md:grid-cols-2 gap-6 items-start">
    {/* LEFT - Paypulse Landing Page (tall image) */}
    <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 h-full">
      <img 
        src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&h=450&fit=crop" 
        alt="Paypulse Landing Page" 
        className="w-full h-full object-cover"
      />
    </div>
    
    {/* RIGHT - Two Dashboard Wireframes (stacked) */}
    <div className="flex flex-col gap-6 h-full">
      <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 flex-1">
        <img 
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&h=450&fit=crop" 
          alt="Dashboard Wireframe Top" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 flex-1">
        <img 
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&h=450&fit=crop" 
          alt="Dashboard Wireframe Bottom" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section>

      {/* Implementation & Launch Quadrant (11.png) */}
      <section className="mb-24">
        <div className="grid md:grid-cols-2">
          {/* Top Left - Blue */}
          <div className="bg-[#2563EB] p-12 md:p-20 text-white min-h-[400px] flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Implementation and Development</h2>
            <p className="leading-[1.8] text-blue-100 max-w-md">
              The UX/UI designer collaborates closely with the development team to ensure the accurate 
              implementation of the final design. Regular communication and collaboration are 
              maintained to address any technical challenges and ensure that the design vision is realized. 
              Quality assurance testing is conducted to identify and resolve any bugs or issues. The iterative 
              process of design and development continues until the app meets the desired standards and 
              functionality.
            </p>
          </div>
          {/* Top Right - White */}
          <div className="bg-white min-h-[400px]" />
          
          {/* Bottom Left - White */}
          <div className="bg-white min-h-[400px]" />
          
          {/* Bottom Right - Purple */}
          <div className="bg-[#C084FC] p-12 md:p-20 text-white min-h-[400px] flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Launch and Evaluation</h2>
            <p className="leading-[1.8] text-purple-100 max-w-md">
              After the app is launched, user engagement, conversion rates, and customer satisfaction are 
              continuously monitored using analytics tools. A comprehensive evaluation is conducted to 
              assess key performance indicators, usability, and customer feedback. The results are analyzed, and 
              the impact of the app's design on user behavior, business goals, and overall success is 
              determined. The case study concludes with an overview of the achieved objectives and 
              recommendations for further enhancements and optimizations based on the findings.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="max-w-4xl mx-auto px-6 mb-24 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
        <p className="text-gray-700 leading-[1.8] text-lg">
          The PayPulse design process transformed user research into a simple, secure, and user-friendly financial app. Through user personas, 
          journey mapping, ideation, information architecture, and high-fidelity wireframing, the app was designed to help users manage 
          transactions, track spending, save effectively, and make better financial decisions.
        </p>
      </section>

      {/* Next Projects (Frame 32 (1).png) */}
      <section className="mb-0">
        <div className="grid md:grid-cols-2">
          {/* Store.com */}
          <div className="bg-black text-white p-10 md:p-16">
            <span className="inline-block px-6 py-2 rounded-full border border-gray-600 text-sm mb-6">Clothing</span>
            <h3 className="text-4xl md:text-5xl font-bold italic mb-3">Store.com</h3>
            <p className="text-gray-400 mb-8">Website Design / Website Development</p>
            <div className="relative flex justify-center">
              <div className="absolute w-64 h-64 bg-[#fca5a5] rounded-full opacity-80" />
              <img src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop" alt="Store.com" className="relative z-10 w-48 h-auto" />
            </div>
          </div>
          
          {/* EventSpace */}
          <div className="bg-[#f5f5f5] text-gray-900 p-10 md:p-16">
            <span className="inline-block px-6 py-2 rounded-full border border-gray-400 text-sm mb-6">Lifestyle</span>
            <h3 className="text-4xl md:text-5xl font-bold italic mb-3">EventSpace</h3>
            <p className="text-gray-600 mb-8">Website Design / Website Development</p>
            <div className="relative flex justify-center">
              <div className="absolute w-64 h-64 bg-gray-300 rounded-full opacity-80" />
              <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=400&fit=crop" alt="EventSpace" className="relative z-10 w-48 h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Thank You (69.png / Frame 32 bottom) */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-lg">
              <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">Thank You!</h2>
              <p className="text-gray-500 mb-6 italic">For sparing some time and review my work.</p>
              <p className="text-xl text-gray-900 font-medium mb-8 leading-relaxed italic">
                Do you have great idea and want to share. Let's make something amazing together
              </p>
              <button onClick={() => navigate('/#contact')} className="px-8 py-4 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-all">
                Get in touch with me
              </button>
            </div>
            
            {/* Abstract Art */}
            <div className="w-80 h-80 md:w-[28rem] md:h-[28rem] bg-gray-50 rounded-3xl overflow-hidden relative">
              <svg viewBox="0 0 400 400" className="w-full h-full opacity-60">
                <defs>
                  <filter id="noise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" />
                  </filter>
                </defs>
                <rect width="400" height="400" fill="white" />
                <path d="M50,200 Q100,50 200,200 T350,200" fill="none" stroke="black" strokeWidth="2" opacity="0.3"/>
                <path d="M80,220 Q130,80 220,220 T320,180" fill="none" stroke="black" strokeWidth="1.5" opacity="0.2"/>
                <path d="M120,250 Q180,100 250,250 T380,150" fill="none" stroke="black" strokeWidth="2" opacity="0.4"/>
                <ellipse cx="200" cy="200" rx="150" ry="80" fill="none" stroke="black" strokeWidth="1" opacity="0.2" transform="rotate(-20 200 200)"/>
                <ellipse cx="220" cy="180" rx="120" ry="60" fill="none" stroke="black" strokeWidth="1.5" opacity="0.3" transform="rotate(15 220 180)"/>
                <path d="M100,300 Q200,100 300,300" fill="none" stroke="black" strokeWidth="2" opacity="0.25"/>
                <circle cx="280" cy="120" r="40" fill="none" stroke="black" strokeWidth="1" opacity="0.3"/>
                <circle cx="150" cy="280" r="50" fill="none" stroke="black" strokeWidth="1.5" opacity="0.2"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2024 Aurora Creative. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy policy</a>
            <a href="#" className="hover:text-gray-600 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Behance</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Dribbble</a>
          </div>
        </div>
      </footer>
    </div>
  );
}