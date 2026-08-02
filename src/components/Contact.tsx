import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Mail, Phone, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwq5BjUO1LBExfrvfYBW4QrRTwSMHhBeuX7f-gBW9zZM2U2ggGQRdZUgJ6caSNTLYvI/exec";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    services: []
  });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const hiddenFormRef = useRef(null);

  const serviceOptions = [
    "Website Design / Development",
    "Electrical design",
    "UX design",
    "Animation",
    "Branding",
    "Others"
  ];

  const toggleService = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMsg('Please fill in all required fields (First Name, Email, Message).');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    // Submit the hidden form
    if (hiddenFormRef.current) {
      hiddenFormRef.current.submit();

      // Show success after submission
      setTimeout(() => {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
          services: []
        });

        setTimeout(() => {
          setStatus('idle');
        }, 3000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#fafafa]">
      {/* Hidden iframe for form submission */}
      <iframe 
        name="hidden-iframe" 
        style={{ display: 'none', width: 0, height: 0, border: 'none' }} 
        title="form-submission"
      />

      {/* Hidden form - submits to Google Apps Script */}
      <form 
        ref={hiddenFormRef}
        action={GOOGLE_SCRIPT_URL}
        method="POST"
        target="hidden-iframe"
        style={{ display: 'none' }}
      >
        <input type="hidden" name="firstName" value={formData.firstName} />
        <input type="hidden" name="lastName" value={formData.lastName} />
        <input type="hidden" name="email" value={formData.email} />
        <input type="hidden" name="phone" value={formData.phone} />
        <input type="hidden" name="message" value={formData.message} />
        <input type="hidden" name="services" value={formData.services.join(", ")} />
      </form>

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Contact our team</h2>
          <p className="text-gray-500">Got any questions about the product or scaling on our platform?</p>
          <p className="text-gray-500">Chat to our friendly team for help</p>
        </div>

        {status === 'success' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
            <p className="text-green-700 text-sm">Thank you! Your message has been sent successfully. We will get back to you soon.</p>
          </div>
        )}

        {status === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
            <p className="text-red-700 text-sm">{errorMsg}</p>
          </div>
        )}

        {/* Visible React form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First name <span className="text-red-500">*</span>
              </label>
              <input 
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                placeholder="John"
                value={formData.firstName}
                onChange={e => handleChange('firstName', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last name</label>
              <input 
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                placeholder="Doe"
                value={formData.lastName}
                onChange={e => handleChange('lastName', e.target.value)}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input 
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                placeholder="john@example.com"
                value={formData.email}
                onChange={e => handleChange('email', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone number</label>
              <input 
                type="tel"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                placeholder="+234 800 000 0000"
                value={formData.phone}
                onChange={e => handleChange('phone', e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea 
              rows={5}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all resize-none"
              placeholder="Type your message..."
              value={formData.message}
              onChange={e => handleChange('message', e.target.value)}
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
            disabled={status === 'loading'}
            className="w-full py-4 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              'Submit'
            )}
          </button>
        </form>

        <div className="mt-12 space-y-4">
          <p className="font-medium text-gray-900">Chat with us</p>
          <p className="text-sm text-gray-500">Speak to our friendly team via live chat.</p>

          <div className="flex flex-col gap-3">
            <a 
              href="https://wa.me/2347051496023" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-gray-700 hover:text-red-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" /> 
              <span>Chat on WhatsApp</span>
            </a>
            <a 
              href="tel:+2347051496023" 
              className="flex items-center gap-3 text-sm text-gray-700 hover:text-red-600 transition-colors"
            >
              <Phone className="w-5 h-5" /> 
              <span>Call us: 0705 149 6023</span>
            </a>
            <a 
              href="mailto:Soaurora33@gmail.com" 
              className="flex items-center gap-3 text-sm text-gray-700 hover:text-red-600 transition-colors"
            >
              <Mail className="w-5 h-5" /> 
              <span>Soaurora33@gmail.com</span>
            </a>
            <a 
              href="https://www.instagram.com/auroracreativedesign" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-gray-700 hover:text-red-600 transition-colors"
            >
              <InstagramIcon /> 
              <span>@auroracreativedesign</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}