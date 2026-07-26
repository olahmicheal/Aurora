import { team } from '../data/siteData';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Map display names to URL slugs
const nameToSlug = {
  "Joseph Ogoliegune": "joe",
  "Toluwanimi Oyebiyi": "toluwanimi",
  "Olatunbosun oluwaferanmi Micheal": "olatunbosun",
  "Kabiru Sheriff": "kabiru",
  "Jogbodo Abbey": "jogbodo"
};

export default function About() {
  const navigate = useNavigate();

  return (
    <section id="about" className="py-24 md:py-32 bg-[#fafafa]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">About Us</h2>
        <div className="w-16 h-1 bg-red-600 mx-auto mb-16 rounded-full" />
        
        <div className="text-center mb-20">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">About Aurora Creative</h3>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Aurora Creative is a full-service creative agency dedicated to building brands that stand out and leave a lasting impression. We bring together creative thinking, digital innovation, and technical expertise to deliver solutions that are both functional and visually compelling. From branding and digital products to animation, print production, and engineering, we help businesses turn ideas into reality and create your imaginations to life. Our collaborative approach ensures every project is tailored to our clients' goals. We are driven by creativity, excellence, and a passion for delivering meaningful results.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">Meet Our Creators</h3>
          <p className="text-gray-500 text-center text-sm max-w-2xl mx-auto mb-10">
            Behind every great imagination and ideas there is a team that brings it to life. Meet the brain box behind Aurora Creative a diverse group of designers, developers, engineers, marketers, and creative thinkers dedicated to delivering innovative solutions.
          </p>
        </div>

        <div className="space-y-3">
          {team.map((member, idx) => {
            const slug = nameToSlug[member.name];
            return (
              <div 
                key={idx}
                onClick={() => slug && navigate(`/about/${slug}`)}
                className={`group flex items-center justify-between p-5 rounded-xl bg-white border border-gray-100 hover:shadow-md transition-all ${slug ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}