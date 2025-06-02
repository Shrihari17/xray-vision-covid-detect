
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Activity, Brain, Database, Zap, Shield, Users, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import ChatBot from "@/components/ChatBot";
import { Link } from "react-router-dom";

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced CNN Architecture",
      description: "Sophisticated Convolutional Neural Network trained on extensive chest X-ray datasets for accurate COVID-19 detection."
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Fast image analysis with immediate results and confidence scores for quick clinical decision support."
    },
    {
      icon: Shield,
      title: "High Accuracy",
      description: "Validated model performance with excellent accuracy rates on both training and validation datasets."
    },
    {
      icon: Database,
      title: "Comprehensive Dataset",
      description: "Trained on the COVID-19 Radiography Dataset containing thousands of chest X-ray images."
    }
  ];

  const technologies = [
    { name: "TensorFlow", version: "2.x", type: "Deep Learning" },
    { name: "Keras", version: "Latest", type: "Neural Networks" },
    { name: "OpenCV", version: "4.x", type: "Image Processing" },
    { name: "React", version: "18", type: "Frontend" },
    { name: "Python", version: "3.7+", type: "Backend" },
    { name: "Gradio", version: "Latest", type: "Interface" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Activity className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About COVID-19 X-Ray Classifier</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            An advanced AI-powered medical imaging classification system designed to assist healthcare professionals 
            in detecting COVID-19 from chest X-ray images using state-of-the-art deep learning techniques.
          </p>
        </div>

        {/* Project Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Brain className="mr-2 h-5 w-5" />
              Project Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              This project implements a Convolutional Neural Network (CNN) using TensorFlow and Keras to classify 
              chest X-ray images as either COVID-19 positive or Normal. The system provides healthcare professionals 
              with a rapid screening tool that can help identify potential COVID-19 cases from radiographic images.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The model has been trained on a comprehensive dataset of chest X-ray images and provides predictions 
              with confidence scores to help medical professionals make informed decisions. The web interface built 
              with modern technologies ensures easy access and user-friendly interaction.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="flex">
                <Shield className="h-5 w-5 text-amber-600 mt-0.5 mr-2" />
                <div>
                  <p className="text-amber-800 font-medium">Important Medical Disclaimer</p>
                  <p className="text-amber-700 text-sm mt-1">
                    This tool is designed for research and educational purposes and should be used as a supplementary aid only. 
                    It is not intended to replace professional medical diagnosis or clinical judgment. Always consult with 
                    qualified healthcare professionals for medical decisions.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Features */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
            <CardDescription>What makes our COVID-19 detection system effective</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Model Details */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Model Architecture</CardTitle>
              <CardDescription>Technical specifications of the CNN model</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Network Structure</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Input Layer: 50x50x3 (RGB images)</li>
                  <li>• Conv2D layers with ReLU activation</li>
                  <li>• MaxPooling2D layers for dimensionality reduction</li>
                  <li>• Dense layers with ReLU activation</li>
                  <li>• Output layer with Sigmoid activation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Training Parameters</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Optimizer: Adam</li>
                  <li>• Loss Function: Binary Crossentropy</li>
                  <li>• Batch Size: 32</li>
                  <li>• Epochs: 5</li>
                  <li>• Validation Split: 25%</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technologies Used</CardTitle>
              <CardDescription>Core technologies powering the system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-medium text-gray-900">{tech.name}</span>
                      <span className="text-sm text-gray-600 ml-2">v{tech.version}</span>
                    </div>
                    <Badge variant="outline">{tech.type}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Usage Instructions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How to Use</CardTitle>
            <CardDescription>Step-by-step guide to using the classification system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Upload Images</h3>
                <p className="text-sm text-gray-600">
                  Navigate to the Classify page and upload one or more chest X-ray images in supported formats.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold text-lg">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Analyze Results</h3>
                <p className="text-sm text-gray-600">
                  Review the classification results with confidence scores and visual overlays on the images.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold text-lg">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Download Report</h3>
                <p className="text-sm text-gray-600">
                  Generate and download comprehensive reports with all classification data for your records.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <CardContent className="text-center py-8">
            <Users className="h-12 w-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg opacity-90 mb-6">
              Upload your chest X-ray images and experience the power of AI-assisted medical imaging classification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/classify">
                <Button size="lg" variant="secondary" className="px-8">
                  Start Classifying
                </Button>
              </Link>
              <Link to="/history">
                <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white hover:text-blue-600">
                  View Training History
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <ChatBot />
    </div>
  );
};

export default About;
