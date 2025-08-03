import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Destino de viagem inspirador"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/b5538859-4022-41f0-a086-a8fe6df7c924.png" 
            alt="Na Bagagem" 
            className="h-24 sm:h-32 mx-auto mb-6 filter brightness-0 invert"
          />
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Na Bagagem
        </h1>
        
        <p className="text-xl sm:text-2xl lg:text-3xl mb-8 text-gray-200 font-light">
          Caminhos pensados além do destino
        </p>
        
        <p className="text-lg sm:text-xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Consultoria especializada em Travel Design para criar experiências únicas e personalizadas
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={scrollToContact}
            className="w-full sm:w-auto"
          >
            Planejar Minha Viagem
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={scrollToAbout}
            className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20"
          >
            Conheça Nossa História
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button 
          onClick={scrollToAbout}
          className="text-white/70 hover:text-white transition-colors animate-bounce"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;