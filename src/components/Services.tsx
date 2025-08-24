import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Heart, Compass, Users, Plane, Star } from "lucide-react";
import travelExperiences from "@/assets/travel-experiences.jpg";
const Services = () => {
  const services = [{
    icon: <MapPin className="w-8 h-8" />,
    title: "Roteiros sob medida",
    description: "Nada de pacote engessado. Cada roteiro é único e pensado especialmente para você."
  }, {
    icon: <Heart className="w-8 h-8" />,
    title: "Consultoria completa",
    description: "Acompanhamento antes, durante e depois da viagem para garantir que tudo saia perfeito."
  }, {
    icon: <Compass className="w-8 h-8" />,
    title: "Destinos exóticos",
    description: "Planejamento logístico especializado para os destinos mais únicos do mundo."
  }, {
    icon: <Users className="w-8 h-8" />,
    title: "Acompanhamento presencial",
    description: "Se desejar, viajo junto com você para garantir uma experiência ainda mais especial."
  }, {
    icon: <Plane className="w-8 h-8" />,
    title: "Para todos os perfis",
    description: "Orientação prática e acolhedora — inclusive para quem nunca viajou!"
  }, {
    icon: <Star className="w-8 h-8" />,
    title: "Experiências únicas",
    description: "Acesso a experiências exclusivas e locais autênticos que poucos conhecem."
  }];
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Travel Design
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-8 text-lg">Travel Design é mais do que planejar: é cuidar de cada detalhe da sua experiência de viagem.
O que você pode esperar da NaBagagem: criação de viagens customizadas com planejamento de roteiros, escolha de hospedagens, passagens, atrações e experiências personalizadas, feitas sob medida para você.</p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Hero Image */}
          <div className="mb-16">
            <Card className="overflow-hidden shadow-elegant">
              <CardContent className="p-0">
                <img src={travelExperiences} alt="Experiências de viagem personalizadas" className="w-full h-64 sm:h-80 lg:h-96 object-cover" />
              </CardContent>
            </Card>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 bg-card">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-nabagagem-purple-light rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-nabagagem-beige rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Viajar pode (e deve) ser mais simples e humano.
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Deixe que cuidemos de todos os detalhes enquanto você se concentra em viver momentos únicos.
            </p>
            <Button variant="default" size="lg" onClick={scrollToContact} className="w-full sm:w-auto">
              Começar Meu Planejamento
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;