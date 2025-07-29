import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Code, Copy, Eye } from "lucide-react";

export default function Overview() {
  const stats = [
    { label: "Components", value: "120+", description: "Ready-to-use components" },
    { label: "Variants", value: "500+", description: "Different styling options" },
    { label: "Examples", value: "50+", description: "Real-world use cases" },
    { label: "Code Snippets", value: "All", description: "Copy-paste ready" },
  ];

  const features = [
    {
      icon: Sparkles,
      title: "Beautiful Design System",
      description: "Modern light theme with vibrant gradients and smooth animations",
    },
    {
      icon: Code,
      title: "TypeScript Ready",
      description: "Fully typed components with excellent developer experience",
    },
    {
      icon: Copy,
      title: "Copy & Paste",
      description: "All components are ready to copy and use in your projects",
    },
    {
      icon: Eye,
      title: "Live Examples",
      description: "Interactive demos with real functionality and API integration",
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="text-center space-y-6 py-12">
        <div className="space-y-4">
          <Badge variant="secondary" className="px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            React Component Library
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gradient">
            Beautiful Components
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            for Modern React Apps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive showcase of reusable React components with multiple styling variations, 
            interactive examples, and ready-to-use code snippets.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" variant="gradient" className="font-semibold">
            Explore Components
          </Button>
          <Button size="lg" variant="outline-gradient" className="font-semibold">
            View Documentation
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="card-elegant text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="font-medium text-foreground">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Features Grid */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">Why Choose Our Components?</h3>
          <p className="text-muted-foreground">Everything you need to build beautiful interfaces</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="card-elegant">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Start */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5" />
            Quick Start
          </CardTitle>
          <CardDescription>
            Get started with our components in just a few steps
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="code-block">
            <pre>{`// 1. Copy the component code
// 2. Install dependencies if needed
npm install @radix-ui/react-button class-variance-authority

// 3. Use in your React app
import { Button } from "@/components/ui/button"

export default function App() {
  return (
    <Button variant="gradient" size="lg">
      Beautiful Button
    </Button>
  )
}`}</pre>
          </div>
          <p className="text-sm text-muted-foreground">
            All components are built with Radix UI primitives and styled with Tailwind CSS for maximum flexibility.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}