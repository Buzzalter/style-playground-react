import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, Heart, Download, Star, ShoppingCart, Send, Plus, Trash2, Edit, Settings, Home, Search } from "lucide-react";
import { toast } from "sonner";

export default function Buttons() {
  const [isLoading, setIsLoading] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Code copied to clipboard!");
  };

  const handleAsyncAction = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    toast.success("Action completed!");
  };

  const buttonExamples = [
    {
      title: "Default Variants",
      description: "Basic button styles for common use cases",
      examples: [
        { component: <Button>Default</Button>, code: '<Button>Default</Button>' },
        { component: <Button variant="destructive">Destructive</Button>, code: '<Button variant="destructive">Destructive</Button>' },
        { component: <Button variant="outline">Outline</Button>, code: '<Button variant="outline">Outline</Button>' },
        { component: <Button variant="secondary">Secondary</Button>, code: '<Button variant="secondary">Secondary</Button>' },
        { component: <Button variant="ghost">Ghost</Button>, code: '<Button variant="ghost">Ghost</Button>' },
        { component: <Button variant="link">Link</Button>, code: '<Button variant="link">Link</Button>' },
      ]
    },
    {
      title: "Gradient & Special Effects",
      description: "Eye-catching buttons with gradients and special styling",
      examples: [
        { component: <Button variant="gradient">Gradient</Button>, code: '<Button variant="gradient">Gradient</Button>' },
        { component: <Button variant="outline-gradient">Outline Gradient</Button>, code: '<Button variant="outline-gradient">Outline Gradient</Button>' },
        { component: <Button variant="glass">Glass Effect</Button>, code: '<Button variant="glass">Glass Effect</Button>' },
        { component: <Button variant="elevated">Elevated</Button>, code: '<Button variant="elevated">Elevated</Button>' },
        { component: <Button variant="soft">Soft</Button>, code: '<Button variant="soft">Soft</Button>' },
        { component: <Button variant="rounded-full">Rounded Full</Button>, code: '<Button variant="rounded-full">Rounded Full</Button>' },
      ]
    },
    {
      title: "Status & Feedback",
      description: "Buttons for different states and user feedback",
      examples: [
        { component: <Button variant="success">Success</Button>, code: '<Button variant="success">Success</Button>' },
        { component: <Button variant="warning">Warning</Button>, code: '<Button variant="warning">Warning</Button>' },
        { component: <Button disabled>Disabled</Button>, code: '<Button disabled>Disabled</Button>' },
        { component: <Button variant="minimal">Minimal</Button>, code: '<Button variant="minimal">Minimal</Button>' },
      ]
    },
    {
      title: "Sizes",
      description: "Different button sizes for various contexts",
      examples: [
        { component: <Button size="sm">Small</Button>, code: '<Button size="sm">Small</Button>' },
        { component: <Button size="default">Default</Button>, code: '<Button size="default">Default</Button>' },
        { component: <Button size="lg">Large</Button>, code: '<Button size="lg">Large</Button>' },
        { component: <Button size="xl">Extra Large</Button>, code: '<Button size="xl">Extra Large</Button>' },
      ]
    },
    {
      title: "Icon Buttons",
      description: "Buttons with icons for better visual communication",
      examples: [
        { component: <Button size="icon"><Heart className="w-4 h-4" /></Button>, code: '<Button size="icon"><Heart className="w-4 h-4" /></Button>' },
        { component: <Button size="icon-sm" variant="outline"><Plus className="w-3 h-3" /></Button>, code: '<Button size="icon-sm" variant="outline"><Plus className="w-3 h-3" /></Button>' },
        { component: <Button size="icon-lg" variant="gradient"><Download className="w-5 h-5" /></Button>, code: '<Button size="icon-lg" variant="gradient"><Download className="w-5 h-5" /></Button>' },
      ]
    },
    {
      title: "Buttons with Icons & Text",
      description: "Combining icons with text for better usability",
      examples: [
        { component: <Button><Download className="w-4 h-4 mr-2" />Download</Button>, code: '<Button><Download className="w-4 h-4 mr-2" />Download</Button>' },
        { component: <Button variant="outline"><Star className="w-4 h-4 mr-2" />Star</Button>, code: '<Button variant="outline"><Star className="w-4 h-4 mr-2" />Star</Button>' },
        { component: <Button variant="gradient"><ShoppingCart className="w-4 h-4 mr-2" />Add to Cart</Button>, code: '<Button variant="gradient"><ShoppingCart className="w-4 h-4 mr-2" />Add to Cart</Button>' },
        { component: <Button variant="success"><Send className="w-4 h-4 mr-2" />Send Message</Button>, code: '<Button variant="success"><Send className="w-4 h-4 mr-2" />Send Message</Button>' },
      ]
    }
  ];

  const interactiveExamples = [
    {
      title: "Loading States",
      description: "Buttons that show loading feedback during async operations",
      component: (
        <Button 
          variant="gradient" 
          disabled={isLoading}
          onClick={handleAsyncAction}
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
              Loading...
            </>
          ) : (
            <>
              <Download className="w-4 h-4 mr-2" />
              Download File
            </>
          )}
        </Button>
      ),
      code: `const [isLoading, setIsLoading] = useState(false);

<Button 
  variant="gradient" 
  disabled={isLoading}
  onClick={handleAsyncAction}
>
  {isLoading ? (
    <>
      <Spinner className="w-4 h-4 mr-2" />
      Loading...
    </>
  ) : (
    <>
      <Download className="w-4 h-4 mr-2" />
      Download File
    </>
  )}
</Button>`
    },
    {
      title: "Toggle States",
      description: "Buttons that maintain state and provide visual feedback",
      component: (
        <Button 
          variant={liked ? "destructive" : "outline"}
          onClick={() => setLiked(!liked)}
        >
          <Heart className={`w-4 h-4 mr-2 ${liked ? 'fill-current' : ''}`} />
          {liked ? 'Liked' : 'Like'}
        </Button>
      ),
      code: `const [liked, setLiked] = useState(false);

<Button 
  variant={liked ? "destructive" : "outline"}
  onClick={() => setLiked(!liked)}
>
  <Heart className={\`w-4 h-4 mr-2 \${liked ? 'fill-current' : ''}\`} />
  {liked ? 'Liked' : 'Like'}
</Button>`
    }
  ];

  const realWorldExamples = [
    {
      title: "Navigation",
      buttons: [
        <Button variant="ghost"><Home className="w-4 h-4 mr-2" />Home</Button>,
        <Button variant="ghost"><Search className="w-4 h-4 mr-2" />Search</Button>,
        <Button variant="ghost"><Settings className="w-4 h-4 mr-2" />Settings</Button>,
      ]
    },
    {
      title: "Form Actions",
      buttons: [
        <Button variant="gradient">Save Changes</Button>,
        <Button variant="outline">Cancel</Button>,
        <Button variant="destructive"><Trash2 className="w-4 h-4 mr-2" />Delete</Button>,
      ]
    },
    {
      title: "Card Actions",
      buttons: [
        <Button size="sm" variant="outline"><Edit className="w-3 h-3 mr-1" />Edit</Button>,
        <Button size="sm" variant="ghost"><Copy className="w-3 h-3 mr-1" />Copy</Button>,
        <Button size="sm" variant="destructive"><Trash2 className="w-3 h-3 mr-1" />Delete</Button>,
      ]
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="secondary">Components</Badge>
          <h1 className="text-3xl font-bold text-foreground">Buttons</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          A comprehensive collection of button components with various styles, sizes, and interactive states. 
          Perfect for any modern React application.
        </p>
      </div>

      {/* Button Examples */}
      {buttonExamples.map((section, sectionIndex) => (
        <Card key={sectionIndex} className="card-elegant">
          <CardHeader>
            <CardTitle>{section.title}</CardTitle>
            <CardDescription>{section.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.examples.map((example, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-center p-6 bg-muted/50 rounded-lg border border-border">
                    {example.component}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">Code</span>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        onClick={() => handleCopyCode(example.code)}
                      >
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                    <div className="code-block text-xs">
                      <code>{example.code}</code>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Interactive Examples */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle>Interactive Examples</CardTitle>
          <CardDescription>
            Buttons with dynamic behavior and state management
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8">
            {interactiveExamples.map((example, index) => (
              <div key={index} className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">{example.title}</h4>
                  <p className="text-sm text-muted-foreground">{example.description}</p>
                </div>
                <div className="flex items-center justify-center p-6 bg-muted/50 rounded-lg border border-border">
                  {example.component}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">Code</span>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      onClick={() => handleCopyCode(example.code)}
                    >
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

      {/* Real-world Examples */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle>Real-world Usage</CardTitle>
          <CardDescription>
            Common button patterns you'll find in modern applications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {realWorldExamples.map((example, index) => (
              <div key={index} className="space-y-3">
                <h4 className="font-semibold text-foreground">{example.title}</h4>
                <div className="flex flex-wrap gap-3 p-4 bg-muted/50 rounded-lg border border-border">
                  {example.buttons.map((button, buttonIndex) => (
                    <div key={buttonIndex}>{button}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}