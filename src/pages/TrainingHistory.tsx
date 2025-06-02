
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, Target, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import ChatBot from "@/components/ChatBot";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TrainingHistory = () => {
  // Mock training data
  const trainingData = [
    { epoch: 1, accuracy: 0.72, val_accuracy: 0.68, loss: 0.58, val_loss: 0.62 },
    { epoch: 2, accuracy: 0.81, val_accuracy: 0.76, loss: 0.42, val_loss: 0.48 },
    { epoch: 3, accuracy: 0.87, val_accuracy: 0.83, loss: 0.31, val_loss: 0.37 },
    { epoch: 4, accuracy: 0.92, val_accuracy: 0.88, loss: 0.23, val_loss: 0.29 },
    { epoch: 5, accuracy: 0.95, val_accuracy: 0.91, loss: 0.16, val_loss: 0.22 },
  ];

  const modelSpecs = {
    architecture: "Convolutional Neural Network (CNN)",
    inputShape: "50x50x3 (RGB)",
    totalParams: "1,234,567",
    trainableParams: "1,234,567",
    optimizer: "Adam",
    lossFunction: "Binary Crossentropy",
    metrics: "Accuracy",
    batchSize: 32,
    epochs: 5,
    trainingTime: "~45 minutes"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Training History & Model Performance</h1>
          <p className="text-lg text-gray-600">Detailed insights into model training and performance metrics</p>
        </div>

        {/* Performance Summary Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Final Accuracy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-green-600" />
                <span className="text-2xl font-bold text-green-600">95.0%</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Training accuracy</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Validation Accuracy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                <span className="text-2xl font-bold text-blue-600">91.0%</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Validation set</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Final Loss</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-orange-600" />
                <span className="text-2xl font-bold text-orange-600">0.16</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Binary crossentropy</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Training Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-purple-600" />
                <span className="text-2xl font-bold text-purple-600">45m</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">5 epochs total</p>
            </CardContent>
          </Card>
        </div>

        {/* Training Charts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Training & Validation Accuracy</CardTitle>
              <CardDescription>Model accuracy progression over epochs</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={trainingData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="epoch" />
                  <YAxis domain={[0.6, 1]} />
                  <Tooltip formatter={(value: number) => `${(value * 100).toFixed(1)}%`} />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="accuracy" 
                    stroke="#2563eb" 
                    strokeWidth={2}
                    name="Training Accuracy"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="val_accuracy" 
                    stroke="#dc2626" 
                    strokeWidth={2}
                    name="Validation Accuracy"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Training & Validation Loss</CardTitle>
              <CardDescription>Model loss reduction over epochs</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={trainingData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="epoch" />
                  <YAxis domain={[0, 0.7]} />
                  <Tooltip formatter={(value: number) => value.toFixed(3)} />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="loss" 
                    stroke="#059669" 
                    strokeWidth={2}
                    name="Training Loss"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="val_loss" 
                    stroke="#d97706" 
                    strokeWidth={2}
                    name="Validation Loss"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Model Specifications */}
        <Card>
          <CardHeader>
            <CardTitle>Model Architecture & Specifications</CardTitle>
            <CardDescription>Detailed information about the CNN model configuration</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Architecture</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Type:</span>
                    <Badge variant="outline">{modelSpecs.architecture}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Input Shape:</span>
                    <Badge variant="outline">{modelSpecs.inputShape}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Total Parameters:</span>
                    <Badge variant="outline">{modelSpecs.totalParams}</Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Training Configuration</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Optimizer:</span>
                    <Badge variant="outline">{modelSpecs.optimizer}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Loss Function:</span>
                    <Badge variant="outline">{modelSpecs.lossFunction}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Batch Size:</span>
                    <Badge variant="outline">{modelSpecs.batchSize}</Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Performance</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Epochs:</span>
                    <Badge variant="outline">{modelSpecs.epochs}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Training Time:</span>
                    <Badge variant="outline">{modelSpecs.trainingTime}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Metrics:</span>
                    <Badge variant="outline">{modelSpecs.metrics}</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <ChatBot />
    </div>
  );
};

export default TrainingHistory;
