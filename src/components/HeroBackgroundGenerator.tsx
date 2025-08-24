import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Download, Sparkles, Loader2 } from "lucide-react";

interface GeneratedImage {
  imageURL: string;
  positivePrompt: string;
  seed: number;
}

const HeroBackgroundGenerator = () => {
  const [apiKey, setApiKey] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);

  const backgroundPrompts = [
    "Luxurious tropical beach resort with overwater bungalows at sunset, crystal clear turquoise water, palm trees, golden hour lighting, cinematic composition, travel photography style, ultra high resolution",
    "Majestic mountain landscape with snow-capped peaks, serene alpine lake reflection, misty morning light, luxury travel destination, professional photography, ultra high resolution",
    "Ancient European cobblestone streets with charming architecture, warm golden lighting, travel destination atmosphere, cinematic composition, ultra high resolution",
    "Serene Japanese zen garden with cherry blossoms, traditional architecture, peaceful atmosphere, soft natural lighting, travel photography style, ultra high resolution",
    "African safari landscape at golden hour, acacia trees silhouette, warm sunset colors, luxury travel experience, cinematic composition, ultra high resolution",
    "Mediterranean coastal town with white buildings, blue domed churches, azure sea view, luxury travel destination, golden hour lighting, ultra high resolution"
  ];

  const generateBackgrounds = async () => {
    if (!apiKey.trim()) {
      toast.error("Por favor, insira sua chave da API Runware");
      return;
    }

    setIsGenerating(true);
    setGeneratedImages([]);

    try {
      const ws = new WebSocket("wss://ws-api.runware.ai/v1");
      
      await new Promise((resolve, reject) => {
        ws.onopen = () => {
          // Authenticate
          const authMessage = [{
            taskType: "authentication",
            apiKey: apiKey.trim(),
          }];
          ws.send(JSON.stringify(authMessage));
          resolve(true);
        };
        
        ws.onerror = (error) => {
          console.error("WebSocket error:", error);
          reject(error);
        };
      });

      // Wait for authentication and then generate images
      let authComplete = false;
      const results: GeneratedImage[] = [];
      let completedCount = 0;

      ws.onmessage = (event) => {
        const response = JSON.parse(event.data);
        
        if (response.error || response.errors) {
          console.error("API error:", response);
          const errorMessage = response.errorMessage || response.errors?.[0]?.message || "Erro na API";
          toast.error(errorMessage);
          return;
        }

        if (response.data) {
          response.data.forEach((item: any) => {
            if (item.taskType === "authentication") {
              authComplete = true;
              // Start generating images after authentication
              generateAllImages();
            } else if (item.taskType === "imageInference") {
              results.push({
                imageURL: item.imageURL,
                positivePrompt: item.positivePrompt,
                seed: item.seed
              });
              completedCount++;
              
              if (completedCount === backgroundPrompts.length) {
                setGeneratedImages(results);
                setIsGenerating(false);
                toast.success("Fundos gerados com sucesso!");
                ws.close();
              }
            }
          });
        }
      };

      const generateAllImages = () => {
        backgroundPrompts.forEach((prompt, index) => {
          const taskUUID = crypto.randomUUID();
          const message = [{
            taskType: "imageInference",
            taskUUID,
            positivePrompt: prompt,
            model: "runware:100@1",
            width: 1920,
            height: 1080,
            numberResults: 1,
            outputFormat: "WEBP",
            CFGScale: 1,
            scheduler: "FlowMatchEulerDiscreteScheduler",
            strength: 0.8,
            steps: 4
          }];
          
          setTimeout(() => {
            ws.send(JSON.stringify(message));
          }, index * 1000); // Stagger requests by 1 second
        });
      };

    } catch (error) {
      console.error("Error generating images:", error);
      toast.error("Erro ao gerar imagens. Verifique sua chave da API.");
      setIsGenerating(false);
    }
  };

  const downloadImage = async (imageUrl: string, fileName: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      toast.success("Imagem baixada com sucesso!");
    } catch (error) {
      console.error("Error downloading image:", error);
      toast.error("Erro ao baixar a imagem");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            Gerador de Fundos para Hero Section
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Chave da API Runware
            </label>
            <Input
              type="password"
              placeholder="Insira sua chave da API Runware"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="mb-2"
            />
            <p className="text-sm text-muted-foreground">
              Você pode obter sua chave em{" "}
              <a 
                href="https://runware.ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                runware.ai
              </a>
            </p>
          </div>
          
          <Button 
            onClick={generateBackgrounds} 
            disabled={isGenerating || !apiKey.trim()}
            className="w-full"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Gerando fundos...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Gerar Opções de Fundo
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {generatedImages.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {generatedImages.map((image, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video bg-muted">
                <img 
                  src={image.imageURL} 
                  alt={`Fundo opção ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                  {image.positivePrompt}
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => downloadImage(image.imageURL, `hero-background-${index + 1}.webp`)}
                  className="w-full"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Baixar Imagem
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {isGenerating && (
        <div className="text-center py-8">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground">
            Gerando {backgroundPrompts.length} opções de fundo com conceitos de travel design...
          </p>
        </div>
      )}
    </div>
  );
};

export default HeroBackgroundGenerator;