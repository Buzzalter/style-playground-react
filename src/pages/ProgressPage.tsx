import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Copy, Loader2, RefreshCw, CheckCircle, XCircle, AlertCircle, Clock, Zap, Download, Upload } from "lucide-react";
import { toast } from "sonner";

export default function ProgressPage() {
  const [progress, setProgress] = useState(33);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Code copied to clipboard!");
  };

  const startUpload = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          toast.success("Upload completed!");
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Process completed!");
    }, 3000);
  };

  const progressExamples = [
    {
      title: "Basic Progress Bar",
      description: "Simple progress indicator",
      component: (
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="w-full" />
          <div className="flex gap-2">
            <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>
              +10%
            </Button>
            <Button size="sm" variant="outline" onClick={() => setProgress(Math.max(0, progress - 10))}>
              -10%
            </Button>
          </div>
        </div>
      ),
      code: `const [progress, setProgress] = useState(33);

<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span>Progress</span>
    <span>{progress}%</span>
  </div>
  <Progress value={progress} className="w-full" />
</div>`
    },
    {
      title: "Upload Progress",
      description: "File upload progress with animation",
      component: (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Upload className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Uploading file...</span>
          </div>
          <Progress value={uploadProgress} className="w-full" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{uploadProgress}% complete</span>
            <span>{uploadProgress === 100 ? "Done!" : "Uploading..."}</span>
          </div>
          <Button onClick={startUpload} disabled={uploadProgress > 0 && uploadProgress < 100}>
            Start Upload
          </Button>
        </div>
      ),
      code: `const [uploadProgress, setUploadProgress] = useState(0);

const startUpload = () => {
  setUploadProgress(0);
  const interval = setInterval(() => {
    setUploadProgress((prev) => {
      if (prev >= 100) {
        clearInterval(interval);
        return 100;
      }
      return prev + 10;
    });
  }, 200);
};

<div className="space-y-3">
  <Progress value={uploadProgress} className="w-full" />
  <Button onClick={startUpload}>Start Upload</Button>
</div>`
    }
  ];

  const spinnerExamples = [
    {
      title: "Loading Spinner",
      description: "Basic rotating loader",
      component: <Loader2 className="h-6 w-6 animate-spin text-primary" />,
      code: `<Loader2 className="h-6 w-6 animate-spin text-primary" />`
    },
    {
      title: "Refresh Spinner",
      description: "Alternative spinner style",
      component: <RefreshCw className="h-6 w-6 animate-spin text-primary" />,
      code: `<RefreshCw className="h-6 w-6 animate-spin text-primary" />`
    },
    {
      title: "Loading Button",
      description: "Button with loading state",
      component: (
        <Button disabled={isLoading} onClick={simulateLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading...
            </>
          ) : (
            "Start Process"
          )}
        </Button>
      ),
      code: `const [isLoading, setIsLoading] = useState(false);

<Button disabled={isLoading} onClick={simulateLoading}>
  {isLoading ? (
    <>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Loading...
    </>
  ) : (
    "Start Process"
  )}
</Button>`
    },
    {
      title: "Pulsing Dot",
      description: "Subtle loading indicator",
      component: (
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span className="text-sm">Processing...</span>
        </div>
      ),
      code: `<div className="flex items-center gap-2">
  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
  <span className="text-sm">Processing...</span>
</div>`
    },
    {
      title: "Three Dots",
      description: "Animated dots pattern",
      component: (
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      ),
      code: `<div className="flex items-center gap-1">
  <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
</div>`
    },
    {
      title: "Progress Ring",
      description: "Circular progress indicator",
      component: (
        <div className="relative w-12 h-12">
          <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-muted stroke-current"
              fill="none"
              strokeWidth="3"
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-primary stroke-current"
              fill="none"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={`${progress}, 100`}
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-semibold">{progress}%</span>
          </div>
        </div>
      ),
      code: `<div className="relative w-12 h-12">
  <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
    <path
      className="text-muted stroke-current"
      fill="none"
      strokeWidth="3"
      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
    />
    <path
      className="text-primary stroke-current"
      fill="none"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray={\`\${progress}, 100\`}
      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
    />
  </svg>
  <div className="absolute inset-0 flex items-center justify-center">
    <span className="text-xs font-semibold">{progress}%</span>
  </div>
</div>`
    }
  ];

  const statusExamples = [
    {
      title: "Success State",
      component: (
        <div className="flex items-center gap-2 text-green-600">
          <CheckCircle className="w-4 h-4" />
          <span className="text-sm font-medium">Completed successfully</span>
        </div>
      )
    },
    {
      title: "Error State",
      component: (
        <div className="flex items-center gap-2 text-red-600">
          <XCircle className="w-4 h-4" />
          <span className="text-sm font-medium">Failed to process</span>
        </div>
      )
    },
    {
      title: "Warning State",
      component: (
        <div className="flex items-center gap-2 text-orange-600">
          <AlertCircle className="w-4 h-4" />
          <span className="text-sm font-medium">Needs attention</span>
        </div>
      )
    },
    {
      title: "In Progress",
      component: (
        <div className="flex items-center gap-2 text-blue-600">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-medium">Processing...</span>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="secondary">Components</Badge>
          <h1 className="text-3xl font-bold text-foreground">Progress & Spinners</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Progress indicators, loading spinners, and status components for showing 
          operation states and providing visual feedback to users.
        </p>
      </div>

      {/* Progress Bars */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Progress Bars
          </CardTitle>
          <CardDescription>
            Linear progress indicators for showing completion status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8">
            {progressExamples.map((example, index) => (
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

      {/* Loading Spinners */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Loader2 className="w-5 h-5 animate-spin" />
            Loading Spinners
          </CardTitle>
          <CardDescription>
            Various loading indicators and spinner animations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spinnerExamples.map((example, index) => (
              <div key={index} className="space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground">{example.title}</h4>
                  <p className="text-sm text-muted-foreground">{example.description}</p>
                </div>
                <div className="flex items-center justify-center p-6 bg-muted/50 rounded-lg border border-border min-h-[100px]">
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

      {/* Status Indicators */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Status Indicators
          </CardTitle>
          <CardDescription>
            Visual indicators for different states and statuses
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {statusExamples.map((example, index) => (
              <div key={index} className="p-4 bg-muted/50 rounded-lg border border-border">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-sm">{example.title}</h4>
                  {example.component}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Real-world Example */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle>File Upload Dashboard</CardTitle>
          <CardDescription>
            Complete upload interface with progress tracking and status indicators
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="border border-dashed border-border rounded-lg p-8 text-center">
              <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Upload your files</h3>
              <p className="text-muted-foreground mb-4">Drag and drop or click to browse</p>
              <Button variant="outline">Choose Files</Button>
            </div>
            
            {uploadProgress > 0 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">document.pdf</span>
                  <span className="text-sm text-muted-foreground">2.4 MB</span>
                </div>
                <Progress value={uploadProgress} className="w-full" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{uploadProgress}% uploaded</span>
                  <span>{uploadProgress === 100 ? "Complete" : "Uploading..."}</span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}