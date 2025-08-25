import { useState, useEffect } from 'react';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';

interface LogoWithBackgroundRemovalProps {
  className?: string;
  alt?: string;
}

const LogoWithBackgroundRemoval = ({ className, alt = "Na Bagagem" }: LogoWithBackgroundRemovalProps) => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processImage = async () => {
      try {
        setIsProcessing(true);
        setError(null);
        
        // Fetch the image as blob
        const response = await fetch('/lovable-uploads/dc43ead6-9b47-4418-bab2-eef17129755e.png');
        const blob = await response.blob();
        
        // Load image element
        const imageElement = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(imageElement);
        
        // Create URL for the processed image
        const url = URL.createObjectURL(processedBlob);
        setProcessedImageUrl(url);
      } catch (err) {
        console.error('Failed to process image:', err);
        setError('Failed to process image');
        // Fallback to original image
        setProcessedImageUrl('/lovable-uploads/dc43ead6-9b47-4418-bab2-eef17129755e.png');
      } finally {
        setIsProcessing(false);
      }
    };

    processImage();

    // Cleanup function to revoke URL when component unmounts
    return () => {
      if (processedImageUrl) {
        URL.revokeObjectURL(processedImageUrl);
      }
    };
  }, []);

  if (isProcessing) {
    return (
      <div className={className}>
        <div className="animate-pulse bg-white/20 rounded-lg"></div>
      </div>
    );
  }

  if (error && !processedImageUrl) {
    return (
      <img 
        src="/lovable-uploads/dc43ead6-9b47-4418-bab2-eef17129755e.png" 
        alt={alt} 
        className={className}
      />
    );
  }

  return (
    <img 
      src={processedImageUrl || '/lovable-uploads/dc43ead6-9b47-4418-bab2-eef17129755e.png'} 
      alt={alt} 
      className={className}
    />
  );
};

export default LogoWithBackgroundRemoval;