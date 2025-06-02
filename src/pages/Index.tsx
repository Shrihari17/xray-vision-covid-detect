
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Upload, Download, MessageCircle, BarChart3, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Activity className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">COVID-19 X-Ray Classifier</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/classify" className="text-gray-700 hover:text-blue-600 transition-colors">Classify</Link>
              <Link to="/history" className="text-gray-700 hover:text-blue-600 transition-colors">Training History</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700">
            AI-Powered Medical Imaging
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            COVID-19 Detection from
            <span className="text-blue-600"> Chest X-Rays</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Advanced CNN-based classification system that analyzes chest X-ray images to detect COVID-19 with high accuracy and confidence scores.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/classify">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Upload className="mr-2 h-5 w-5" />
                Start Classification
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="px-8 py-3">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Upload className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Easy Upload</CardTitle>
                <CardDescription>
                  Upload multiple X-ray images in various formats for batch processing
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>High Accuracy</CardTitle>
                <CardDescription>
                  CNN model trained on extensive COVID-19 radiography dataset with reliable predictions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Download className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Detailed Reports</CardTitle>
                <CardDescription>
                  Download comprehensive reports with predictions, confidence scores, and analysis
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Training Insights</CardTitle>
                <CardDescription>
                  View model training history, accuracy metrics, and performance analytics
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle>AI Assistant</CardTitle>
                <CardDescription>
                  Get instant answers about the system, results interpretation, and usage guidance
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Activity className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <CardTitle>Real-time Results</CardTitle>
                <CardDescription>
                  Get instant classification results with confidence scores and visual overlays
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Analyze Your X-Ray Images?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Upload your chest X-ray images and get instant COVID-19 classification results
          </p>
          <Link to="/classify">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              <Upload className="mr-2 h-5 w-5" />
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Activity className="h-6 w-6 text-blue-400" />
            <span className="text-lg font-semibold">COVID-19 X-Ray Classifier</span>
          </div>
          <p className="text-gray-400">
            Advanced AI-powered medical imaging classification system
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
