import { Button } from "@/components/ui/button";
import { ArrowDown, Plane, Luggage } from "lucide-react";
import { useState, useEffect } from "react";
import heroOption1 from "@/assets/hero-option-1.jpg";
import heroOption2 from "@/assets/hero-option-2.jpg";
import heroOption3 from "@/assets/hero-option-3.jpg";
import heroOption4 from "@/assets/hero-option-4.jpg";
import heroOption5 from "@/assets/hero-option-5.jpg";
import LogoWithBackgroundRemoval from "./LogoWithBackgroundRemoval";
const Hero = () => {
  const backgroundImages = [heroOption1,
  // Resort tropical
  heroOption2,
  // Montanhas alpinas
  heroOption3,
  // Cidade europeia
  heroOption4,
  // Jardim zen
  heroOption5 // Costa mediterrânea
  ];
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackgroundIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, [backgroundImages.length]);
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat transition-all duration-1000" style={{
    backgroundImage: `url(${backgroundImages[currentBackgroundIndex]})`
  }}>
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/50 z-5"></div>
      {/* Decorative Elements - Hidden on mobile */}
      <div className="absolute inset-0 z-0 hidden md:block">
        {/* Travel Icons */}
        <div className="absolute top-16 right-8 opacity-15">
          <div className="relative">
            <Luggage size={100} className="text-white" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 border border-nabagagem-purple rounded-full relative">
                    <div className="absolute inset-1 border-t border-l border-nabagagem-purple rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-20 left-8 opacity-20">
          <Plane size={60} className="text-white transform rotate-12" />
          <svg className="absolute -bottom-2 -right-6 w-24 h-12" viewBox="0 0 96 48">
            <path d="M 8 24 Q 24 12, 48 24 T 88 24" stroke="white" strokeWidth="1.5" strokeDasharray="3,3" fill="none" opacity="0.4" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-20 sm:pt-24 pb-8">
        <div className="mb-0.5 sm:mb-1 lg:mb-1.5">
          <LogoWithBackgroundRemoval className="h-24 sm:h-32 lg:h-48 mx-auto" alt="Na Bagagem" />
        </div>
        
        <h1 style={{
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
      }} className="text-3xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight font-lora text-[#612c70] sm:text-6xl">NaBagagem</h1>
        
        <p style={{
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
      }} className="text-lg lg:text-2xl xl:text-3xl mb-4 sm:mb-6 text-white font-light font-lora sm:text-2xl">
          Caminhos pensados além do destino
        </p>
        
        <p style={{
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
      }} className="text-base lg:text-xl mb-6 sm:mb-8 text-white max-w-2xl mx-auto leading-relaxed px-2 sm:text-xl">
          Cada viagem é um projeto exclusivo, pensado para que você viva o destino com leveza e significado.
        </p>
        
        {/* Mobile layout - Stack buttons vertically */}
        <div className="block sm:hidden space-y-4">
          <Button variant="outline" size="lg" onClick={scrollToAbout} className="bg-[#612c70] border-[#612c70] text-white hover:bg-[#612c70]/90 shadow-lg w-full max-w-xs">
            Conheça Nossa História
          </Button>
          
          <div className="flex justify-center">
            <button onClick={scrollToAbout} className="text-white/70 hover:text-white transition-colors animate-bounce">
              <ArrowDown size={28} />
            </button>
          </div>
          
          <Button variant="outline" size="lg" onClick={scrollToContact} className="bg-white text-nabagagem-purple border-white hover:bg-white/90 shadow-lg w-full max-w-xs">
            Inicie sua consultoria
          </Button>
        </div>

        {/* Desktop layout - Horizontal */}
        <div className="hidden sm:flex justify-center items-center w-full max-w-2xl mx-auto gap-4">
          <Button variant="outline" size="lg" onClick={scrollToAbout} className="bg-[#612c70] border-[#612c70] text-white hover:bg-[#612c70]/90 shadow-lg">
            Conheça Nossa História
          </Button>
          
          <div className="flex-shrink-0">
            <button onClick={scrollToAbout} className="text-white/70 hover:text-white transition-colors animate-bounce">
              <ArrowDown size={32} />
            </button>
          </div>
          
          <Button variant="outline" size="lg" onClick={scrollToContact} className="bg-white text-nabagagem-purple border-white hover:bg-white/90 shadow-lg">
            Inicie sua consultoria
          </Button>
        </div>
      </div>
    </section>;
};
export default Hero;