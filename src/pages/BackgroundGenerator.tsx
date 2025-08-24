import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBackgroundGenerator from "@/components/HeroBackgroundGenerator";

const BackgroundGenerator = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Gerador de Fundos Hero
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Gere opções de fundos personalizados para a seção hero seguindo o conceito de travel design do NaBagagem.com
            </p>
          </div>
          <HeroBackgroundGenerator />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BackgroundGenerator;