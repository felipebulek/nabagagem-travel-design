import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marina & Carlos",
      location: "Santorini, Grécia",
      text: "A Tathiana planejou nossa lua de mel dos sonhos! Cada detalhe foi pensado com carinho, desde o hotel boutique até os restaurantes locais autênticos. Foi uma experiência inesquecível!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop"
    },
    {
      name: "Roberto Silva",
      location: "Japão",
      text: "Primeira viagem internacional e estava bem nervoso. A consultoria da Na Bagagem me deu toda a segurança que precisava. O roteiro foi perfeito e o acompanhamento impecável!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=300&fit=crop"
    },
    {
      name: "Família Oliveira",
      location: "Nova Zelândia",
      text: "Viajamos com crianças e a Tathiana conseguiu criar um roteiro que agradou toda a família. As atividades foram pensadas para cada idade. Recomendamos de olhos fechados!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
    },
    {
      name: "Ana Paula",
      location: "Maldivas",
      text: "O acompanhamento presencial fez toda a diferença! Ter a Tathiana conosco durante a viagem nos deu liberdade total para relaxar e aproveitar cada momento.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=300&fit=crop"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Depoimentos
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Conheça as experiências de quem já viveu momentos únicos com a Na Bagagem
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 bg-card border-0">
                <CardContent className="p-6 sm:p-8">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-primary" />
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground leading-relaxed mb-6 text-base sm:text-lg">
                    "{testimonial.text}"
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-nabagagem-purple-light">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="text-center mt-16">
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Sua próxima aventura começa aqui!
              </h3>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Junte-se aos nossos clientes satisfeitos e descubra como uma viagem bem planejada 
                pode transformar sua perspectiva de mundo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;