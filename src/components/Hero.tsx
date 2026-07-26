export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fff8f8] pt-20">
      {/* Decorative Pink Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-red-200/50 rounded-bl-[120px] rounded-tl-[80px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 md:w-[28rem] md:h-[28rem] bg-red-200/50 rounded-tr-[120px] rounded-br-[80px]" />
      
      {/* Additional subtle blobs */}
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-pink-200/40 rounded-full blur-2xl" />
      <div className="absolute bottom-1/3 left-10 w-40 h-40 bg-pink-200/40 rounded-full blur-2xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
          We Design Digital<br />
          <span className="italic font-serif">Experiences</span> That Inspire.
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed italic font-light">
          We create visually stunning, user-friendly websites and digital solutions that help brands connect, engage, and grow.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => scrollTo('portfolio')}
            className="px-8 py-3.5 border border-gray-300 bg-white text-gray-900 rounded-full font-medium hover:border-gray-900 hover:bg-gray-50 transition-all"
          >
            View portfolio
          </button>
          <button 
            onClick={() => scrollTo('contact')}
            className="px-8 py-3.5 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-all"
          >
            Hire us
          </button>
        </div>
      </div>
    </section>
  );
}