import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Copy, ChevronLeft, ChevronRight, Play, Pause, Image as ImageIcon, Star, Heart, Eye } from "lucide-react";
import { toast } from "sonner";

export default function Carousels() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Code copied to clipboard!");
  };

  // Sample images for demonstrations
  const sampleImages = [
    { id: 1, url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop", title: "Mountain View", description: "Beautiful mountain landscape" },
    { id: 2, url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop", title: "Forest Path", description: "Peaceful forest trail" },
    { id: 3, url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop", title: "Ocean Sunset", description: "Golden hour at the beach" },
    { id: 4, url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop", title: "City Lights", description: "Urban nighttime skyline" },
    { id: 5, url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop", title: "Desert Dunes", description: "Vast desert landscape" }
  ];

  const testimonials = [
    { id: 1, name: "Sarah Johnson", role: "CEO, TechCorp", content: "This product has revolutionized our workflow. Highly recommended!", avatar: "SJ" },
    { id: 2, name: "Michael Chen", role: "Designer", content: "The interface is intuitive and the features are exactly what we needed.", avatar: "MC" },
    { id: 3, name: "Emily Davis", role: "Developer", content: "Great performance and excellent documentation. Perfect for our team.", avatar: "ED" },
    { id: 4, name: "David Wilson", role: "Product Manager", content: "Outstanding support and continuous improvements make this a winner.", avatar: "DW" }
  ];

  const products = [
    { id: 1, name: "Premium Headphones", price: "$299", image: "🎧", rating: 4.8, reviews: 124 },
    { id: 2, name: "Smart Watch", price: "$199", image: "⌚", rating: 4.6, reviews: 89 },
    { id: 3, name: "Wireless Speaker", price: "$149", image: "🔊", rating: 4.9, reviews: 156 },
    { id: 4, name: "Laptop Stand", price: "$79", image: "💻", rating: 4.7, reviews: 203 },
    { id: 5, name: "Desk Lamp", price: "$89", image: "💡", rating: 4.5, reviews: 67 }
  ];

  const carouselExamples = [
    {
      title: "Basic Image Carousel",
      description: "Simple image slider with navigation",
      component: (
        <Carousel className="w-full max-w-md mx-auto">
          <CarouselContent>
            {sampleImages.slice(0, 3).map((image, index) => (
              <CarouselItem key={image.id}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6 bg-gradient-to-br from-primary/10 to-accent/10">
                      <div className="text-center space-y-2">
                        <ImageIcon className="w-12 h-12 mx-auto text-primary" />
                        <h3 className="font-semibold">{image.title}</h3>
                        <p className="text-sm text-muted-foreground">{image.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ),
      code: `<Carousel className="w-full max-w-md mx-auto">
  <CarouselContent>
    {images.map((image, index) => (
      <CarouselItem key={image.id}>
        <div className="p-1">
          <Card>
            <CardContent className="flex aspect-video items-center justify-center p-6">
              <div className="text-center space-y-2">
                <ImageIcon className="w-12 h-12 mx-auto text-primary" />
                <h3 className="font-semibold">{image.title}</h3>
                <p className="text-sm text-muted-foreground">{image.description}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`
    },
    {
      title: "Testimonials Carousel",
      description: "Customer testimonials slider",
      component: (
        <Carousel className="w-full max-w-lg mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="p-1">
                  <Card className="card-elegant">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                            {testimonial.avatar}
                          </div>
                          <div>
                            <h4 className="font-semibold">{testimonial.name}</h4>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                        <blockquote className="text-sm italic">
                          "{testimonial.content}"
                        </blockquote>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ),
      code: `<Carousel className="w-full max-w-lg mx-auto">
  <CarouselContent>
    {testimonials.map((testimonial) => (
      <CarouselItem key={testimonial.id}>
        <Card className="card-elegant">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="text-sm italic">
                "{testimonial.content}"
              </blockquote>
            </div>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`
    },
    {
      title: "Product Grid Carousel",
      description: "Multiple items per slide",
      component: (
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {products.map((product) => (
              <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="card-elegant">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="text-4xl text-center">{product.image}</div>
                      <div className="text-center">
                        <h4 className="font-semibold">{product.name}</h4>
                        <p className="text-lg font-bold text-primary">{product.price}</p>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{product.rating}</span>
                        </div>
                        <span className="text-muted-foreground">({product.reviews} reviews)</span>
                      </div>
                      <Button variant="outline" className="w-full">
                        <Heart className="w-4 h-4 mr-2" />
                        Add to Wishlist
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ),
      code: `<Carousel className="w-full max-w-4xl mx-auto">
  <CarouselContent className="-ml-2 md:-ml-4">
    {products.map((product) => (
      <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
        <Card className="card-elegant">
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="text-4xl text-center">{product.image}</div>
              <div className="text-center">
                <h4 className="font-semibold">{product.name}</h4>
                <p className="text-lg font-bold text-primary">{product.price}</p>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{product.rating}</span>
                </div>
                <span className="text-muted-foreground">({product.reviews} reviews)</span>
              </div>
              <Button variant="outline" className="w-full">
                Add to Wishlist
              </Button>
            </div>
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`
    }
  ];

  const customCarouselExamples = [
    {
      title: "Custom Styled Carousel",
      description: "Carousel with gradient borders and custom controls",
      component: (
        <div className="relative w-full max-w-md mx-auto">
          <div className="border-2 border-transparent bg-gradient-to-r from-primary to-accent p-[2px] rounded-lg">
            <div className="bg-background rounded-md">
              <Carousel>
                <CarouselContent>
                  {sampleImages.slice(0, 3).map((image, index) => (
                    <CarouselItem key={image.id}>
                      <div className="p-4">
                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                          <div className="text-center space-y-2">
                            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                              <ImageIcon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-semibold text-lg">{image.title}</h3>
                            <p className="text-sm text-muted-foreground">{image.description}</p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground" />
                <CarouselNext className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground" />
              </Carousel>
            </div>
          </div>
        </div>
      ),
      code: `<div className="border-2 border-transparent bg-gradient-to-r from-primary to-accent p-[2px] rounded-lg">
  <div className="bg-background rounded-md">
    <Carousel>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={image.id}>
            <div className="p-4">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
                <!-- Content -->
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground" />
      <CarouselNext className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground" />
    </Carousel>
  </div>
</div>`
    },
    {
      title: "Auto-Playing Carousel",
      description: "Carousel with play/pause controls",
      component: (
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Button
              size="sm"
              variant={isAutoPlaying ? "default" : "outline"}
              onClick={() => {
                setIsAutoPlaying(!isAutoPlaying);
                toast.info(isAutoPlaying ? "Auto-play paused" : "Auto-play started");
              }}
            >
              {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isAutoPlaying ? "Pause" : "Play"}
            </Button>
          </div>
          <Carousel className="w-full max-w-md mx-auto">
            <CarouselContent>
              {sampleImages.slice(0, 4).map((image, index) => (
                <CarouselItem key={image.id}>
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6 bg-gradient-to-br from-muted to-muted/50">
                      <div className="text-center space-y-2">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                          <Eye className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-semibold">{image.title}</h3>
                        <p className="text-sm text-muted-foreground">Slide {index + 1} of {sampleImages.slice(0, 4).length}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      ),
      code: `const [isAutoPlaying, setIsAutoPlaying] = useState(false);

// Auto-play logic
useEffect(() => {
  if (!isAutoPlaying) return;
  
  const interval = setInterval(() => {
    // Move to next slide logic
    setCurrentSlide((prev) => (prev + 1) % images.length);
  }, 3000);
  
  return () => clearInterval(interval);
}, [isAutoPlaying, images.length]);

<div className="space-y-4">
  <Button
    size="sm"
    variant={isAutoPlaying ? "default" : "outline"}
    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
  >
    {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
    {isAutoPlaying ? "Pause" : "Play"}
  </Button>
  
  <Carousel>
    <!-- Carousel content -->
  </Carousel>
</div>`
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="secondary">Components</Badge>
          <h1 className="text-3xl font-bold text-foreground">Image Carousels</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Beautiful image carousels and sliders with various layouts, auto-play functionality, 
          and custom styling options using the pastel red theme.
        </p>
      </div>

      {/* Basic Carousel Examples */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ImageIcon className="w-5 h-5" />
            Carousel Examples
          </CardTitle>
          <CardDescription>
            Various carousel implementations for different use cases
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8">
            {carouselExamples.map((example, index) => (
              <div key={index} className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">{example.title}</h4>
                  <p className="text-sm text-muted-foreground">{example.description}</p>
                </div>
                <div className="p-6 bg-muted/50 rounded-lg border border-border">
                  {example.component}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">Code</span>
                    <Button size="sm" variant="ghost" onClick={() => handleCopyCode(example.code)}>
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                  <div className="code-block text-xs">
                    <pre>{example.code}</pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Custom Styled Carousels */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle>Custom Styled Carousels</CardTitle>
          <CardDescription>
            Advanced carousel implementations with custom styling and features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8">
            {customCarouselExamples.map((example, index) => (
              <div key={index} className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">{example.title}</h4>
                  <p className="text-sm text-muted-foreground">{example.description}</p>
                </div>
                <div className="p-6 bg-muted/50 rounded-lg border border-border">
                  {example.component}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">Code</span>
                    <Button size="sm" variant="ghost" onClick={() => handleCopyCode(example.code)}>
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                  <div className="code-block text-xs">
                    <pre>{example.code}</pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Integration Guide */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle>Carousel Integration</CardTitle>
          <CardDescription>
            How to implement and customize carousels in your React app
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="code-block">
              <pre>{`// 1. Install embla-carousel-react (if not already installed)
npm install embla-carousel-react

// 2. Basic carousel setup
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// 3. Use in your component
<Carousel className="w-full max-w-md">
  <CarouselContent>
    {items.map((item, index) => (
      <CarouselItem key={index}>
        <div className="p-1">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              {item.content}
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

// 4. Auto-play functionality
useEffect(() => {
  if (!isAutoPlaying) return;
  
  const interval = setInterval(() => {
    // Auto-advance logic
  }, 3000);
  
  return () => clearInterval(interval);
}, [isAutoPlaying]);

// 5. Custom styling
// Use className props to customize appearance
// Add gradient borders, custom controls, etc.`}</pre>
            </div>
            <p className="text-sm text-muted-foreground">
              These carousels are built with Embla Carousel, providing smooth animations, 
              touch/swipe support, and extensive customization options. All examples include 
              responsive design and accessibility features.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}