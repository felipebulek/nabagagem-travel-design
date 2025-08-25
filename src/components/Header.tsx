import { useState } from "react";
import { Menu, X, Phone, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-[#612c70]/95 backdrop-blur-sm border-b border-[#612c70] shadow-card-custom">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-[#612c70]">
        <div className="flex items-center justify-between h-16 bg-[#612c70]">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/lovable-uploads/nabagagemLogoWhite.png" alt="Na Bagagem" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-white/80 transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-white/80 transition-colors">
              Quem Somos
            </button>
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-white/80 transition-colors">
              Travel Design
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-white/80 transition-colors">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-white/80 transition-colors">
              Contato
            </button>
          </nav>

          {/* Contact Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://wa.me/5541988109365" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
              <Phone size={20} />
            </a>
            <a href="mailto:tathiana@nabagagem.com" className="text-white hover:text-white/80 transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://instagram.com/nabagagem_" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
              <Instagram size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-white/80 hover:bg-white/10">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-elegant rounded-lg mt-2">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-base text-[#612c70] hover:text-[#612c70]/80 transition-colors w-full text-left">
                Início
              </button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-base text-[#612c70] hover:text-[#612c70]/80 transition-colors w-full text-left">
                Quem Somos
              </button>
              <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-base text-[#612c70] hover:text-[#612c70]/80 transition-colors w-full text-left">
                Travel Design
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="block px-3 py-2 text-base text-[#612c70] hover:text-[#612c70]/80 transition-colors w-full text-left">
                Depoimentos
              </button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-base text-[#612c70] hover:text-[#612c70]/80 transition-colors w-full text-left">
                Contato
              </button>
              
              {/* Mobile Contact Icons */}
              <div className="flex items-center justify-center space-x-6 pt-4 border-t border-gray-200 mt-4">
                <a href="https://wa.me/5541988109365" target="_blank" rel="noopener noreferrer" className="text-[#612c70] hover:text-[#612c70]/80 transition-colors">
                  <Phone size={24} />
                </a>
                <a href="mailto:tathiana@nabagagem.com" className="text-[#612c70] hover:text-[#612c70]/80 transition-colors">
                  <Mail size={24} />
                </a>
                <a href="https://instagram.com/nabagagem_" target="_blank" rel="noopener noreferrer" className="text-[#612c70] hover:text-[#612c70]/80 transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>}
      </div>
    </header>;
};
export default Header;