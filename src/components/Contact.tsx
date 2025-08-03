import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Instagram, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Olá! Gostaria de solicitar uma consultoria de viagem:

*Nome:* ${formData.name}
*E-mail:* ${formData.email}
*Telefone:* ${formData.phone}
*Destino de interesse:* ${formData.destination}
*Mensagem:* ${formData.message}

Aguardo o contato!`;

    const whatsappUrl = `https://wa.me/5541997081809?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será direcionado para o WhatsApp com sua mensagem preenchida.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      destination: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "WhatsApp",
      content: "(41) 99708-1809",
      action: () => window.open('https://wa.me/5541997081809', '_blank')
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-mail",
      content: "tathiana@nabagagem.com",
      action: () => window.open('mailto:tathiana@nabagagem.com', '_blank')
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Instagram",
      content: "@nabagagem_",
      action: () => window.open('https://instagram.com/nabagagem_', '_blank')
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Atendimento",
      content: "Seg-Sex: 9h às 18h",
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Vamos Planejar Sua Viagem?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Entre em contato e conte seus sonhos de viagem. Vamos transformá-los em realidade!
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-elegant border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <Send className="w-6 h-6 text-primary" />
                  Solicitar Consultoria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nome completo *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Telefone *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="destination" className="block text-sm font-medium text-foreground mb-2">
                      Destino de interesse
                    </label>
                    <Input
                      id="destination"
                      name="destination"
                      type="text"
                      value={formData.destination}
                      onChange={handleChange}
                      placeholder="Para onde você gostaria de viajar?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Conte-nos sobre sua viagem dos sonhos
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Descreva o tipo de experiência que você busca, quantas pessoas viajarão, período desejado, orçamento aproximado..."
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Enviar via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-elegant border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-primary" />
                    Informações de Contato
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="p-3 bg-nabagagem-purple-light rounded-full text-primary">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <p className="text-muted-foreground">{info.content}</p>
                      </div>
                      {info.action && (
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={info.action}
                          className="text-primary hover:text-primary-hover"
                        >
                          Abrir
                        </Button>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Call to Action */}
              <div className="bg-gradient-hero text-primary-foreground rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">
                  Pronta para sua próxima aventura?
                </h3>
                <p className="opacity-90 mb-6">
                  Cada viagem é única, assim como você. Vamos criar juntas a experiência perfeita para seus sonhos.
                </p>
                <Button 
                  variant="outline" 
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                  onClick={() => window.open('https://wa.me/5541997081809', '_blank')}
                >
                  Falar no WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;