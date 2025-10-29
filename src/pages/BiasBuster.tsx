import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BiasResult {
  phrase: string;
  type: string;
  alternative: string;
  explanation: string;
}

const BiasBuster = () => {
  const [text, setText] = useState("");
  const [results, setResults] = useState<BiasResult[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const analyzeText = async () => {
    if (!text.trim()) {
      toast({
        title: "Empty text",
        description: "Please enter some text to analyze",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    setResults([]);

    try {
      const { data, error } = await supabase.functions.invoke("analyze-bias", {
        body: { text },
      });

      if (error) throw error;

      setResults(data.results || []);
      
      if (data.results.length === 0) {
        toast({
          title: "No bias detected",
          description: "Your text appears to be neutral and unbiased!",
        });
      }
    } catch (error) {
      console.error("Error analyzing text:", error);
      toast({
        title: "Analysis failed",
        description: "Failed to analyze text. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Bias Buster
          </h1>
          <p className="text-xl text-muted-foreground">
            AI-powered language editor to detect and eliminate bias
          </p>
        </div>

        <Card className="p-6 mb-8 animate-slide-in-from-bottom backdrop-blur-sm bg-card/95 border-primary/20">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Enter your text to analyze
              </label>
              <Textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste or type your text here to check for biased language..."
                className="min-h-[200px] text-base"
              />
            </div>
            
            <Button 
              onClick={analyzeText} 
              disabled={isAnalyzing}
              className="w-full"
              size="lg"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                "Analyze for Bias"
              )}
            </Button>
          </div>
        </Card>

        {results.length > 0 && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <AlertCircle className="h-5 w-5 text-destructive" />
              Found {results.length} potential bias{results.length > 1 ? "es" : ""}
            </div>
            
            {results.map((result, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all border-l-4 border-l-destructive">
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Biased phrase:</span>
                    <p className="text-lg font-medium text-destructive mt-1">"{result.phrase}"</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Type:</span>
                    <p className="mt-1">
                      <span className="inline-block px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium">
                        {result.type}
                      </span>
                    </p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success" />
                      Suggested alternative:
                    </span>
                    <p className="text-lg font-medium text-success mt-1">"{result.alternative}"</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Explanation:</span>
                    <p className="text-muted-foreground mt-1">{result.explanation}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {!isAnalyzing && results.length === 0 && text && (
          <Card className="p-8 text-center border-success/20 bg-success/5">
            <CheckCircle2 className="h-12 w-12 text-success mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No bias detected!</h3>
            <p className="text-muted-foreground">Your text appears to be neutral and unbiased.</p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default BiasBuster;
