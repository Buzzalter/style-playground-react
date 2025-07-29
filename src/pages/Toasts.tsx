import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, Bell, CheckCircle, AlertCircle, XCircle, Info, X, Settings, Star, Heart, Download, Share } from "lucide-react";
import { toast } from "sonner";

export default function Toasts() {
  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Code copied to clipboard!");
  };

  const basicToastExamples = [
    {
      title: "Success Toast",
      description: "Positive feedback message",
      component: (
        <Button onClick={() => toast.success("Operation completed successfully!")}>
          Show Success Toast
        </Button>
      ),
      code: `import { toast } from "sonner";

<Button onClick={() => toast.success("Operation completed successfully!")}>
  Show Success Toast
</Button>`
    },
    {
      title: "Error Toast",
      description: "Error notification with clear messaging",
      component: (
        <Button 
          variant="destructive"
          onClick={() => toast.error("Something went wrong. Please try again.")}
        >
          Show Error Toast
        </Button>
      ),
      code: `<Button 
  variant="destructive"
  onClick={() => toast.error("Something went wrong. Please try again.")}
>
  Show Error Toast
</Button>`
    },
    {
      title: "Warning Toast",
      description: "Warning message for user attention",
      component: (
        <Button 
          variant="warning"
          onClick={() => toast.warning("This action cannot be undone.")}
        >
          Show Warning Toast
        </Button>
      ),
      code: `<Button 
  variant="warning"
  onClick={() => toast.warning("This action cannot be undone.")}
>
  Show Warning Toast
</Button>`
    },
    {
      title: "Info Toast",
      description: "Informational message",
      component: (
        <Button 
          variant="outline"
          onClick={() => toast.info("New features are now available!")}
        >
          Show Info Toast
        </Button>
      ),
      code: `<Button 
  variant="outline"
  onClick={() => toast.info("New features are now available!")}
>
  Show Info Toast
</Button>`
    },
    {
      title: "Loading Toast",
      description: "Progress indicator toast",
      component: (
        <Button 
          variant="outline"
          onClick={() => toast.loading("Processing your request...")}
        >
          Show Loading Toast
        </Button>
      ),
      code: `<Button 
  variant="outline"
  onClick={() => toast.loading("Processing your request...")}
>
  Show Loading Toast
</Button>`
    }
  ];

  const styledToastExamples = [
    {
      title: "Custom Success with Icon",
      description: "Success toast with custom styling",
      component: (
        <Button 
          variant="success"
          onClick={() => toast.success("File uploaded successfully!", {
            description: "Your document has been saved to the cloud.",
            duration: 5000,
          })}
        >
          Upload Complete
        </Button>
      ),
      code: `toast.success("File uploaded successfully!", {
  description: "Your document has been saved to the cloud.",
  duration: 5000,
})`
    },
    {
      title: "Gradient Toast",
      description: "Toast with gradient styling",
      component: (
        <Button 
          variant="gradient"
          onClick={() => toast("Premium feature unlocked!", {
            description: "You now have access to advanced analytics.",
            style: {
              background: "linear-gradient(135deg, hsl(240 100% 67%), hsl(270 95% 75%))",
              color: "white",
              border: "none"
            }
          })}
        >
          Premium Toast
        </Button>
      ),
      code: `toast("Premium feature unlocked!", {
  description: "You now have access to advanced analytics.",
  style: {
    background: "linear-gradient(135deg, hsl(240 100% 67%), hsl(270 95% 75%))",
    color: "white",
    border: "none"
  }
})`
    },
    {
      title: "Action Toast",
      description: "Toast with action button",
      component: (
        <Button 
          variant="outline"
          onClick={() => toast("New message received", {
            description: "Click to view your inbox.",
            action: {
              label: "View",
              onClick: () => toast.success("Opening inbox...")
            }
          })}
        >
          Message Toast
        </Button>
      ),
      code: `toast("New message received", {
  description: "Click to view your inbox.",
  action: {
    label: "View",
    onClick: () => toast.success("Opening inbox...")
  }
})`
    },
    {
      title: "Promise Toast",
      description: "Toast that follows promise states",
      component: (
        <Button 
          variant="outline"
          onClick={() => {
            const myPromise = new Promise((resolve, reject) => {
              setTimeout(() => {
                Math.random() > 0.5 ? resolve("Success!") : reject("Failed!");
              }, 2000);
            });

            toast.promise(myPromise, {
              loading: 'Saving your changes...',
              success: 'Changes saved successfully!',
              error: 'Failed to save changes.',
            });
          }}
        >
          Promise Toast
        </Button>
      ),
      code: `const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    Math.random() > 0.5 ? resolve("Success!") : reject("Failed!");
  }, 2000);
});

toast.promise(myPromise, {
  loading: 'Saving your changes...',
  success: 'Changes saved successfully!',
  error: 'Failed to save changes.',
});`
    },
    {
      title: "Rich Content Toast",
      description: "Toast with custom JSX content",
      component: (
        <Button 
          variant="outline"
          onClick={() => toast(
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold">Review Request</div>
                <div className="text-sm text-muted-foreground">Please rate your experience</div>
              </div>
            </div>
          )}
        >
          Rich Toast
        </Button>
      ),
      code: `toast(
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
      <Star className="w-5 h-5 text-white" />
    </div>
    <div>
      <div className="font-semibold">Review Request</div>
      <div className="text-sm text-muted-foreground">Please rate your experience</div>
    </div>
  </div>
)`
    }
  ];

  const positionExamples = [
    {
      title: "Top Center",
      component: (
        <Button 
          variant="outline"
          onClick={() => toast("Top center toast", { position: "top-center" })}
        >
          Top Center
        </Button>
      ),
      code: `toast("Top center toast", { position: "top-center" })`
    },
    {
      title: "Top Right",
      component: (
        <Button 
          variant="outline"
          onClick={() => toast("Top right toast", { position: "top-right" })}
        >
          Top Right
        </Button>
      ),
      code: `toast("Top right toast", { position: "top-right" })`
    },
    {
      title: "Bottom Left",
      component: (
        <Button 
          variant="outline"
          onClick={() => toast("Bottom left toast", { position: "bottom-left" })}
        >
          Bottom Left
        </Button>
      ),
      code: `toast("Bottom left toast", { position: "bottom-left" })`
    },
    {
      title: "Bottom Right",
      component: (
        <Button 
          variant="outline"
          onClick={() => toast("Bottom right toast", { position: "bottom-right" })}
        >
          Bottom Right
        </Button>
      ),
      code: `toast("Bottom right toast", { position: "bottom-right" })`
    }
  ];

  const realWorldExamples = [
    {
      title: "File Operations",
      description: "Common file operation toasts",
      component: (
        <div className="flex flex-wrap gap-2">
          <Button 
            size="sm"
            variant="outline"
            onClick={() => toast.success("File saved successfully", {
              action: {
                label: "View",
                onClick: () => console.log("View file")
              }
            })}
          >
            Save File
          </Button>
          <Button 
            size="sm"
            variant="outline"
            onClick={() => toast.success("File downloaded", {
              description: "document.pdf • 2.4 MB"
            })}
          >
            Download
          </Button>
          <Button 
            size="sm"
            variant="destructive"
            onClick={() => toast.error("Upload failed", {
              description: "Network connection lost. Please try again.",
              action: {
                label: "Retry",
                onClick: () => toast.loading("Retrying upload...")
              }
            })}
          >
            Upload Error
          </Button>
        </div>
      ),
      code: `// File saved
toast.success("File saved successfully", {
  action: {
    label: "View",
    onClick: () => console.log("View file")
  }
});

// Download complete
toast.success("File downloaded", {
  description: "document.pdf • 2.4 MB"
});

// Upload error with retry
toast.error("Upload failed", {
  description: "Network connection lost. Please try again.",
  action: {
    label: "Retry",
    onClick: () => toast.loading("Retrying upload...")
  }
});`
    },
    {
      title: "User Actions",
      description: "User interaction feedback",
      component: (
        <div className="flex flex-wrap gap-2">
          <Button 
            size="sm"
            variant="outline"
            onClick={() => toast.success("Item added to favorites", {
              action: {
                label: "Undo",
                onClick: () => toast.info("Removed from favorites")
              }
            })}
          >
            <Heart className="w-4 h-4 mr-2" />
            Favorite
          </Button>
          <Button 
            size="sm"
            variant="outline"
            onClick={() => toast.success("Link copied to clipboard", {
              duration: 2000
            })}
          >
            <Share className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button 
            size="sm"
            variant="warning"
            onClick={() => toast.warning("Are you sure you want to delete this item?", {
              action: {
                label: "Delete",
                onClick: () => toast.success("Item deleted")
              }
            })}
          >
            Delete Item
          </Button>
        </div>
      ),
      code: `// Add to favorites with undo
toast.success("Item added to favorites", {
  action: {
    label: "Undo",
    onClick: () => toast.info("Removed from favorites")
  }
});

// Copy link
toast.success("Link copied to clipboard", {
  duration: 2000
});

// Delete confirmation
toast.warning("Are you sure you want to delete this item?", {
  action: {
    label: "Delete",
    onClick: () => toast.success("Item deleted")
  }
});`
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="secondary">Components</Badge>
          <h1 className="text-3xl font-bold text-foreground">Toast Notifications</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Beautiful toast notifications for user feedback with multiple styles, positions, 
          and interactive features. Built with Sonner for optimal performance.
        </p>
      </div>

      {/* Basic Toast Examples */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Basic Toasts
          </CardTitle>
          <CardDescription>
            Standard toast notifications for different message types
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {basicToastExamples.map((example, index) => (
              <div key={index} className="space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground">{example.title}</h4>
                  <p className="text-sm text-muted-foreground">{example.description}</p>
                </div>
                <div className="flex items-center justify-center p-4 bg-muted/50 rounded-lg border border-border">
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

      {/* Styled Toast Examples */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle>Advanced Toasts</CardTitle>
          <CardDescription>
            Enhanced toasts with custom styling and interactive elements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8">
            {styledToastExamples.map((example, index) => (
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

      {/* Position Examples */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle>Toast Positions</CardTitle>
          <CardDescription>
            Different positioning options for toast notifications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {positionExamples.map((example, index) => (
              <div key={index} className="space-y-3">
                <h4 className="font-semibold text-foreground text-center">{example.title}</h4>
                <div className="flex items-center justify-center p-4 bg-muted/50 rounded-lg border border-border">
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
          <CardTitle>Real-world Examples</CardTitle>
          <CardDescription>
            Common toast patterns used in modern applications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8">
            {realWorldExamples.map((example, index) => (
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

      {/* Integration Guide */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle>Integration Guide</CardTitle>
          <CardDescription>
            How to set up and use toast notifications in your app
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="code-block">
              <pre>{`// 1. Install Sonner
npm install sonner

// 2. Add the Toaster component to your app root
import { Toaster } from 'sonner'

function App() {
  return (
    <div>
      {/* Your app content */}
      <Toaster />
    </div>
  )
}

// 3. Use toast anywhere in your app
import { toast } from 'sonner'

function MyComponent() {
  return (
    <button onClick={() => toast('Hello World!')}>
      Show Toast
    </button>
  )
}

// 4. Customize the Toaster
<Toaster 
  position="top-right"
  expand={true}
  richColors={true}
  closeButton={true}
/>`}</pre>
            </div>
            <p className="text-sm text-muted-foreground">
              The Toaster component is already included in this project's App.tsx file, 
              so you can use toast notifications immediately in any component.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}