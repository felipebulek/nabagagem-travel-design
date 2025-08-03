import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import tathianaPortrait from "@/assets/tathiana-portrait.jpg";

const About = () => {
  const highlights = [
    "Planejar com cuidado",
    "Atender com presença",
    "Entregar experiências com propósito"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Quem está por trás da NaBagagem?
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative">
              <Card className="overflow-hidden shadow-elegant">
                <CardContent className="p-0">
                  <img 
                    src={tathianaPortrait}
                    alt="Tathiana Sangiorge - Fundadora da Na Bagagem"
                    className="w-full h-96 lg:h-[500px] object-cover"
                  />
                </CardContent>
              </Card>
              
              {/* Floating element */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-elegant">
                <p className="text-sm font-semibold">10+ anos</p>
                <p className="text-xs">de experiência</p>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Muito prazer, eu sou a Tathiana 👋
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Depois de mais de 10 anos atuando em hospitalidade e turismo na Europa e América Latina, 
                  criei a NaBagagem para oferecer o que mais amo fazer:
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-primary w-6 h-6 flex-shrink-0" />
                    <span className="text-lg text-foreground font-medium">{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="bg-nabagagem-purple-light p-6 rounded-lg border-l-4 border-primary">
                <p className="text-lg text-foreground font-medium mb-2">
                  E, se você quiser, eu viajo junto com você!
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    #ViajarComPropósito
                  </span>
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    #ViagensPersonalizadas
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-base text-muted-foreground italic">
                  "A NaBagagem é fruto dessa experiência e da paixão por criar jornadas que transformam pessoas."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;