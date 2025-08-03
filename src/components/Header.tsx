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
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-card-custom">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="flex items-center justify-between h-16 bg-white">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/lovable-uploads/0124c01f-ea8c-4ab2-9856-ab3f098eb5ff.png" alt="Na Bagagem" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
              Travel Design
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-foreground hover:text-primary transition-colors">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
              Contato
            </button>
          </nav>

          {/* Contact Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://wa.me/5541988109365" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover transition-colors">
              <Phone size={20} />
            </a>
            <a href="mailto:tathiana@nabagagem.com" className="text-primary hover:text-primary-hover transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://instagram.com/nabagagem_" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover transition-colors">
              <Instagram size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card shadow-elegant rounded-lg mt-2">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-base text-foreground hover:text-primary transition-colors w-full text-left">
                Início
              </button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-base text-foreground hover:text-primary transition-colors w-full text-left">
                Sobre
              </button>
              <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-base text-foreground hover:text-primary transition-colors w-full text-left">
                Travel Design
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="block px-3 py-2 text-base text-foreground hover:text-primary transition-colors w-full text-left">
                Depoimentos
              </button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-base text-foreground hover:text-primary transition-colors w-full text-left">
                Contato
              </button>
              
              {/* Mobile Contact Icons */}
              <div className="flex items-center justify-center space-x-6 pt-4 border-t border-border mt-4">
                <a href="https://wa.me/5541988109365" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover transition-colors">
                  <Phone size={24} />
                </a>
                <a href="mailto:tathiana@nabagagem.com" className="text-primary hover:text-primary-hover transition-colors">
                  <Mail size={24} />
                </a>
                <a href="https://instagram.com/nabagagem_" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>}
      </div>
    </header>;
};
export default Header;