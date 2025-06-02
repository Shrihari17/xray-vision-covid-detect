
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Upload, Download, FileImage, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import ChatBot from "@/components/ChatBot";

interface ClassificationResult {
  filename: string;
  prediction: "COVID" | "Normal";
  confidence: number;
  imageUrl: string;
}

const Classify = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [results, setResults] = useState<ClassificationResult[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    const imageFiles = selectedFiles.filter(file => file.type.startsWith('image/'));
    
    if (imageFiles.length !== selectedFiles.length) {
      toast({
        title: "Warning",
        description: "Only image files are accepted. Non-image files have been filtered out.",
        variant: "destructive",
      });
    }
    
    setFiles(imageFiles);
    setResults([]);
  };

  const simulateClassification = async (file: File): Promise<ClassificationResult> => {
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    // Mock classification results
    const confidence = 0.7 + Math.random() * 0.3;
    const prediction = Math.random() > 0.5 ? "COVID" : "Normal";
    
    return {
      filename: file.name,
      prediction,
      confidence,
      imageUrl: URL.createObjectURL(file)
    };
  };

  const handleClassify = async () => {
    if (files.length === 0) {
      toast({
        title: "No Files Selected",
        description: "Please select at least one X-ray image to classify.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    setProgress(0);
    setResults([]);

    try {
      const newResults: ClassificationResult[] = [];
      
      for (let i = 0; i < files.length; i++) {
        const result = await simulateClassification(files[i]);
        newResults.push(result);
        setResults([...newResults]);
        setProgress(((i + 1) / files.length) * 100);
      }

      toast({
        title: "Classification Complete",
        description: `Successfully classified ${files.length} image(s).`,
      });
    } catch (error) {
      toast({
        title: "Classification Failed",
        description: "An error occurred during classification. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const generateReport = () => {
    if (results.length === 0) {
      toast({
        title: "No Results",
        description: "Please classify some images first to generate a report.",
        variant: "destructive",
      });
      return;
    }

    const reportData = results.map(result => ({
      "Image Filename": result.filename,
      "Prediction": result.prediction,
      "Confidence Score": `${(result.confidence * 100).toFixed(2)}%`,
      "Status": result.prediction === "COVID" ? "Positive" : "Negative"
    }));

    const csvContent = [
      Object.keys(reportData[0]).join(","),
      ...reportData.map(row => Object.values(row).join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `covid-classification-report-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast({
      title: "Report Downloaded",
      description: "Classification report has been downloaded successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">X-Ray Classification</h1>
          <p className="text-lg text-gray-600">Upload chest X-ray images for COVID-19 detection</p>
        </div>

        {/* Upload Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Upload className="mr-2 h-5 w-5" />
              Upload Images
            </CardTitle>
            <CardDescription>
              Select one or more chest X-ray images (JPEG, PNG, etc.)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div 
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                <FileImage className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-lg font-medium text-gray-700 mb-2">
                  Click to upload or drag and drop
                </p>
                <p className="text-sm text-gray-500">
                  PNG, JPG, JPEG up to 10MB each
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </div>
              
              {files.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {files.map((file, index) => (
                    <div key={index} className="relative">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        className="w-full h-24 object-cover rounded-lg border"
                      />
                      <Badge variant="secondary" className="absolute bottom-1 left-1 text-xs">
                        {file.name.length > 10 ? `${file.name.substring(0, 10)}...` : file.name}
                      </Badge>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleClassify} 
                  disabled={files.length === 0 || isProcessing}
                  className="flex-1"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Classify Images
                    </>
                  )}
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={generateReport}
                  disabled={results.length === 0}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Report
                </Button>
              </div>
              
              {isProcessing && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Processing images...</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="w-full" />
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        {results.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Classification Results</CardTitle>
              <CardDescription>
                Analysis complete for {results.length} image(s)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                {results.map((result, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="md:w-1/3">
                        <img
                          src={result.imageUrl}
                          alt={result.filename}
                          className="w-full h-48 object-cover rounded-lg border"
                        />
                      </div>
                      <div className="md:w-2/3 space-y-4">
                        <div>
                          <h3 className="font-semibold text-lg">{result.filename}</h3>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-gray-600">Prediction</label>
                            <div className="flex items-center mt-1">
                              <Badge 
                                variant={result.prediction === "COVID" ? "destructive" : "default"}
                                className="text-sm"
                              >
                                {result.prediction === "COVID" ? (
                                  <>
                                    <AlertCircle className="mr-1 h-3 w-3" />
                                    COVID-19 Positive
                                  </>
                                ) : (
                                  <>
                                    <CheckCircle className="mr-1 h-3 w-3" />
                                    Normal
                                  </>
                                )}
                              </Badge>
                            </div>
                          </div>
                          
                          <div>
                            <label className="text-sm font-medium text-gray-600">Confidence</label>
                            <div className="mt-1">
                              <div className="text-lg font-semibold">
                                {(result.confidence * 100).toFixed(1)}%
                              </div>
                              <Progress value={result.confidence * 100} className="w-full mt-1" />
                            </div>
                          </div>
                        </div>
                        
                        {result.prediction === "COVID" && (
                          <Alert variant="destructive">
                            <AlertCircle className="h-4 w-4" />
                            <AlertDescription>
                              This result suggests potential COVID-19 indicators. Please consult with a medical professional for proper diagnosis and treatment.
                            </AlertDescription>
                          </Alert>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
      
      <ChatBot />
    </div>
  );
};

export default Classify;
