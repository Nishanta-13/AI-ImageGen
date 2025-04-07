import { useState } from 'react';
import Button from '../Component/ui/Button';
import { Textarea } from '../Component/ui/Textarea';
import { Card } from '../Component/ui/Cards';
import { CardContent } from '../Component/ui/Cards';
import { CardDescription } from '../Component/ui/Cards';
import { CardFooter } from '../Component/ui/Cards';
import { CardHeader } from '../Component/ui/Cards';
import { CardTitle } from '../Component/ui/Cards';
import { ImageIcon, Loader2 } from 'lucide-react';
import { fal } from "@fal-ai/client";
function ImageGen() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsGenerating(true);
    setGeneratedImage(null);
    setError('');

    try {
      console.log("API Key:", import.meta.env.VITE_FAL_AI_API_KEY);
      // Initialize Fal.ai client with your API key
      fal.config({
        credentials: import.meta.env.VITE_FAL_AI_API_KEY, // environment variable for API key
      });

      // Make API call using Fal.ai SDK
      const result = await fal.subscribe("fal-ai/recraft-20b", {
        input: {
          prompt: prompt,
          image_size:"landscape_16_9" //  user prompt
          
        },
        logs: true,
        onQueueUpdate: (update) => {
          if (update.status === "IN_PROGRESS") {
            update.logs.map((log) => log.message).forEach(console.log);
          }
        },
      });
      

      console.log("API Response:", result.data); // Debug: Log API response
      console.log("Request ID:", result.requestId); // Debug: Log request ID

      // Assuming the API returns a direct image URL in the response
      const imageUrl = result.data.images[0].url; // Adjust based on the API response structure
      setGeneratedImage(imageUrl);
    } catch (error) {
      console.error("Error generating image:", error); // Debug: Log detailed error
      setError("Failed to generate image. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <ImageIcon className="h-6 w-6" />
            Image Generator
          </CardTitle>
          <CardDescription>
            Enter a detailed description of the image you want to generate.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="prompt" className="text-sm font-medium">
                  Image Prompt
                </label>
                <Textarea
                  id="prompt"
                  placeholder="Describe the image you want to generate... (e.g., 'A serene mountain landscape at sunset with a lake reflection')"
                  className="min-h-24 resize-none"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  required
                />
              </div>

              {/* Image Preview Area */}
              <div className="rounded-lg border border-dashed border-gray-300 p-4">
                <div className="text-center">
                  {isGenerating ? (
                    <div className="flex flex-col items-center justify-center py-12">
                      <Loader2 className="h-12 w-12 animate-spin text-gray-400" />
                      <p className="mt-4 text-sm text-gray-500">Generating your image...</p>
                    </div>
                  ) : generatedImage ? (
                    <div className="space-y-4">
                      <p className="text-sm font-medium">Generated Image:</p>
                      <img
                        src={generatedImage}
                        alt="Generated from prompt"
                        className="mx-auto max-h-[400px] rounded-md shadow-md"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12">
                      <ImageIcon className="h-12 w-12 text-gray-400" />
                      <p className="mt-4 text-sm text-gray-500">Your generated image will appear here</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button
              type="submit"
              disabled={isGenerating || !prompt.trim()}
              className="flex items-center gap-2 "
            >
              {isGenerating ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <ImageIcon className="h-4 w-4" />
                  Generate Image
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default ImageGen;