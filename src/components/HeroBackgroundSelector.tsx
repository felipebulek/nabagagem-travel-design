import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import heroOption1 from "@/assets/hero-option-1.jpg";
import heroOption2 from "@/assets/hero-option-2.jpg";
import heroOption3 from "@/assets/hero-option-3.jpg";
import heroOption4 from "@/assets/hero-option-4.jpg";
import heroOption5 from "@/assets/hero-option-5.jpg";
import travelDesignHero from "@/assets/travel-design-hero.jpg";

interface BackgroundOption {
  id: string;
  image: string;
  title: string;
  description: string;
}

const backgroundOptions: BackgroundOption[] = [
  {
    id: "current",
    image: travelDesignHero,
    title: "Atual",
    description: "Imagem atual do hero"
  },
  {
    id: "tropical",
    image: heroOption1,
    title: "Resort Tropical",
    description: "Bangalôs luxuosos sobre águas cristalinas"
  },
  {
    id: "mountain",
    image: heroOption2,
    title: "Montanhas Alpinas",
    description: "Lagos pristinos com picos nevados"
  },
  {
    id: "european",
    image: heroOption3,  
    title: "Cidade Europeia",
    description: "Ruas históricas com arquitetura charmosa"
  },
  {
    id: "zen",
    image: heroOption4,
    title: "Jardim Zen",
    description: "Serenidade japonesa com cerejeiras"
  },
  {
    id: "mediterranean",
    image: heroOption5,
    title: "Costa Mediterrânea",
    description: "Vilas brancas com vista para o mar"
  }
];

interface HeroBackgroundSelectorProps {
  onSelectBackground: (image: string) => void;
  currentBackground: string;
}

const HeroBackgroundSelector = ({ onSelectBackground, currentBackground }: HeroBackgroundSelectorProps) => {
  const [selectedBackground, setSelectedBackground] = useState(currentBackground);

  const handleSelect = (option: BackgroundOption) => {
    setSelectedBackground(option.image);
    onSelectBackground(option.image);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Escolha o Fundo do Hero</h2>
          <p className="text-muted-foreground mb-6">
            Selecione uma das opções abaixo para o fundo da seção hero
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {backgroundOptions.map((option) => (
              <Card 
                key={option.id}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedBackground === option.image ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => handleSelect(option)}
              >
                <div className="relative">
                  <img 
                    src={option.image} 
                    alt={option.title}
                    className="w-full h-32 object-cover rounded-t-lg"
                  />
                  {selectedBackground === option.image && (
                    <div className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-full p-1">
                      <Check size={16} />
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-1">{option.title}</h3>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-end gap-4">
            <Button variant="outline" onClick={() => onSelectBackground(currentBackground)}>
              Cancelar
            </Button>
            <Button onClick={() => onSelectBackground(selectedBackground)}>
              Aplicar Fundo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBackgroundSelector;