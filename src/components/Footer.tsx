import { Phone, Mail, Instagram, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Logo and Description */}
            <div className="space-y-4">
              <div className="flex items-center">
                <img 
                  src="/lovable-uploads/6a9c18fa-d243-4f05-8194-c8b544f70419.png" 
                  alt="Na Bagagem" 
                  className="h-16 w-auto filter brightness-0 invert"
                />
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Consultoria especializada em Travel Design para criar experiências únicas e personalizadas.
              </p>
              <p className="text-sm font-medium">
                Caminhos pensados além do destino
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contato</h3>
              <div className="space-y-3">
                <a 
                  href="https://wa.me/5541988109365" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Phone size={18} />
                  <span>(41) 98810-9365</span>
                </a>
                <a 
                  href="mailto:tathiana@nabagagem.com"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Mail size={18} />
                  <span>tathiana@nabagagem.com</span>
                </a>
                <a 
                  href="https://instagram.com/nabagagem_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Instagram size={18} />
                  <span>@nabagagem_</span>
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Nossos Serviços</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>• Roteiros personalizados</li>
                <li>• Consultoria completa</li>
                <li>• Acompanhamento presencial</li>
                <li>• Planejamento logístico</li>
                <li>• Experiências exclusivas</li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-primary-foreground/20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-primary-foreground/60 text-sm">
                © {currentYear} Na Bagagem. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
                <MapPin size={16} />
                <span>Curitiba, PR - Brasil</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;