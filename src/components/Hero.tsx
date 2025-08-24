import { Button } from "@/components/ui/button";
import { ArrowDown, Plane, Luggage } from "lucide-react";
import travelDesignHero from "@/assets/travel-design-hero.jpg";
const Hero = () => {
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
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat" style={{
    backgroundImage: `url(${travelDesignHero})`
  }}>
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 z-5"></div>
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        {/* Travel Icons */}
        <div className="absolute top-1/4 right-1/4 opacity-20">
          <div className="relative">
            <Luggage size={120} className="text-white" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 border border-nabagagem-purple rounded-full relative">
                    <div className="absolute inset-1 border-t border-l border-nabagagem-purple rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-1/3 right-1/6 opacity-30">
          <Plane size={80} className="text-white transform rotate-45" />
          <svg className="absolute -bottom-4 -left-8 w-32 h-16" viewBox="0 0 128 64">
            <path d="M 8 32 Q 32 16, 64 32 T 120 32" stroke="white" strokeWidth="2" strokeDasharray="4,4" fill="none" opacity="0.5" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <img src="/lovable-uploads/nabagagemLogoWhite.png" alt="Na Bagagem" className="h-24 sm:h-32 mx-auto mb-6" />
        </div>
        
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight font-lora text-[#612c70] sm:text-6xl" style={{
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
      }}>NaBagagem.com</h1>
        
        <p className="text-xl sm:text-2xl lg:text-3xl mb-8 text-white font-light font-lora" style={{
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
      }}>
          Caminhos pensados além do destino
        </p>
        
        <p className="text-lg sm:text-xl mb-12 text-white max-w-2xl mx-auto leading-relaxed" style={{
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
      }}>
          Consultoria especializada em Travel Design para criar experiências únicas e personalizadas
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="outline" size="lg" onClick={scrollToAbout} className="w-full sm:w-auto bg-transparent border-white/50 text-white hover:bg-white/10">
            Conheça Nossa História
          </Button>
          <Button variant="outline" size="lg" onClick={scrollToContact} className="w-full sm:w-auto bg-white text-nabagagem-purple border-white hover:bg-white/90">
            Inicie sua consultoria
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button onClick={scrollToAbout} className="text-white/70 hover:text-white transition-colors animate-bounce">
          <ArrowDown size={32} />
        </button>
      </div>
    </section>;
};
export default Hero;