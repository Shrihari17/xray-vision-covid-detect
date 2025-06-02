
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send, X, Bot, User } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm here to help you with questions about the COVID-19 X-Ray Classification system. Feel free to ask me anything!",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const predefinedResponses: { [key: string]: string } = {
    "how does it work": "The system uses a Convolutional Neural Network (CNN) trained on chest X-ray images to classify them as either COVID-19 positive or Normal. The model analyzes image features and provides a confidence score with each prediction.",
    "accuracy": "Our CNN model has been trained on a comprehensive COVID-19 radiography dataset with high accuracy rates. However, this tool should be used as a supplementary aid and not as a replacement for professional medical diagnosis.",
    "supported formats": "The system supports common image formats including JPEG, JPG, PNG, and other standard image types. Each image should be under 10MB for optimal processing.",
    "confidence score": "The confidence score represents how certain the model is about its prediction, ranging from 0% to 100%. Higher scores indicate greater certainty in the classification result.",
    "covid positive": "If the system predicts COVID-19 positive, it means the X-ray shows patterns consistent with COVID-19. However, please consult with a medical professional for proper diagnosis and treatment guidance.",
    "normal result": "A 'Normal' classification means the X-ray doesn't show typical COVID-19 indicators according to our model. This doesn't rule out other conditions or guarantee perfect health.",
    "upload": "To upload images, go to the Classify page, click on the upload area or drag and drop your chest X-ray images. You can upload multiple images at once for batch processing.",
    "report": "After classification, you can download a detailed CSV report containing all results, including filenames, predictions, confidence scores, and status for each analyzed image.",
    "training": "The model was trained using TensorFlow and Keras with a CNN architecture featuring convolutional layers, max pooling, and dense layers, optimized with Adam optimizer over multiple epochs."
  };

  const getBotResponse = (userMessage: string): string => {
    const lowercaseMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowercaseMessage.includes(key)) {
        return response;
      }
    }
    
    // Default responses for common question patterns
    if (lowercaseMessage.includes("help")) {
      return "I can help you with questions about: how the system works, accuracy, supported formats, confidence scores, uploading images, downloading reports, and understanding results. What would you like to know?";
    }
    
    if (lowercaseMessage.includes("thank")) {
      return "You're welcome! Feel free to ask if you have any other questions about the COVID-19 X-Ray Classification system.";
    }
    
    return "I'm here to help with questions about the COVID-19 X-Ray Classification system. You can ask me about how it works, accuracy, supported formats, confidence scores, or how to use the interface. What would you like to know?";
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date()
    };

    const botResponse: Message = {
      id: messages.length + 2,
      text: getBotResponse(inputMessage),
      sender: "bot",
      timestamp: new Date()
    };

    setMessages([...messages, userMessage, botResponse]);
    setInputMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg z-50"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-80 h-96 shadow-xl z-50 flex flex-col">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bot className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-lg">AI Assistant</CardTitle>
                <Badge variant="secondary" className="text-xs">Online</Badge>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-6 w-6"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="flex-1 flex flex-col p-0">
            <ScrollArea className="flex-1 px-4">
              <div className="space-y-4 pb-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                        message.sender === "user"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <div className="flex items-center space-x-1 mb-1">
                        {message.sender === "bot" ? (
                          <Bot className="h-3 w-3" />
                        ) : (
                          <User className="h-3 w-3" />
                        )}
                        <span className="text-xs opacity-70">
                          {message.sender === "bot" ? "Assistant" : "You"}
                        </span>
                      </div>
                      <p>{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <div className="border-t p-4">
              <div className="flex space-x-2">
                <Input
                  placeholder="Ask me about the system..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatBot;
