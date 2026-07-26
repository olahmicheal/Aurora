import { useState } from 'react';
import { MessageCircle, Mail } from 'lucide-react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    services: [] as string[]
  });

  const serviceOptions = [
    "Website Design / Development",
    "Electrical design",
    "UX design",
    "Animation",
    "Branding",
    "Others"
  ];

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // TODO: Connect to Supabase / Node backend
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#fafafa]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Contact our team</h2>
          <p className="text-gray-500">Got any questions about the product or scaling on our platform?</p>
          <p className="text-gray-500">Chat to our friendly team for help</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First name</label>
              <input 
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                placeholder="John"
                value={formData.firstName}
                onChange={e => setFormData({...formData, firstName: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last name</label>
              <input 
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                placeholder="Doe"
                value={formData.lastName}
                onChange={e => setFormData({...formData, lastName: e.target.value})}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input 
                type="email"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                placeholder="john@example.com"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone number</label>
              <input 
                type="tel"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                placeholder="+234 800 000 0000"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea 
              rows={5}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all resize-none"
              placeholder="Type your message..."
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Services interested in</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {serviceOptions.map((service) => (
                <label 
                  key={service} 
                  className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-all ${
                    formData.services.includes(service) 
                      ? 'border-red-500 bg-red-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input 
                    type="checkbox"
                    className="w-4 h-4 text-red-600 rounded border-gray-300 focus:ring-red-500"
                    checked={formData.services.includes(service)}
                    onChange={() => toggleService(service)}
                  />
                  <span className="text-sm text-gray-700">{service}</span>
                </label>
              ))}
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition-all"
          >
            Submit
          </button>
        </form>

        <div className="mt-12 space-y-4">
          <p className="font-medium text-gray-900">Chat with us</p>
          <p className="text-sm text-gray-500">Speak to our friendly team via live chat.</p>
          
          <div className="flex flex-col gap-3">
            <button className="flex items-center gap-3 text-sm text-gray-700 hover:text-red-600 transition-colors">
              <MessageCircle className="w-5 h-5" /> Start a live chat
            </button>
            <button className="flex items-center gap-3 text-sm text-gray-700 hover:text-red-600 transition-colors">
              <Mail className="w-5 h-5" /> Shoot us an email
            </button>
            <button className="flex items-center gap-3 text-sm text-gray-700 hover:text-red-600 transition-colors">
              <InstagramIcon /> Message us on Instagram
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}