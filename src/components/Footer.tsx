import { ArrowRight, MessageCircle } from 'lucide-react';
import TextExplodeIMessage from './animata/text/TextExplodeIMessage';
import ViewSiteModal from './ViewSiteModal';

export default function Footer() {
  return (
    <footer className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <TextExplodeIMessage 
              text="Thank You!" 
              mode="loop"
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 justify-start"
            />
            <p className="text-gray-500 mb-2">For sparing some time and review our work.</p>
            <p className="text-xl text-gray-900 font-medium mb-8 leading-relaxed">
              Do you have great idea and want to share. Let's make something amazing together
            </p>
            
            {/* Contact Modal Button */}
            <ViewSiteModal
              mode="contact"
              accentColor="bg-red-600"
              triggerText="Get in touch with us"
              triggerIcon={MessageCircle}
            />
          </div>

          {/* Your Custom Image */}
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <img 
              src="/Images-20260727T192134Z-1-001/Images/Rectangle 361.png" 
              alt="Footer decoration"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2024 Aurora Creative. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy policy</a>
            <a href="#" className="hover:text-gray-600 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Behance</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Dribbble</a>
          </div>
        </div>
      </div>
    </footer>
  );
}