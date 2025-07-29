import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, CheckCircle, XCircle, AlertCircle, Clock, Zap, Wifi, Signal, Battery, Shield, Star, Heart, Eye, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function Status() {
  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Code copied to clipboard!");
  };

  const basicStatusExamples = [
    {
      title: "Success Status",
      component: (
        <div className="flex items-center gap-2 text-green-600">
          <CheckCircle className="w-5 h-5" />
          <span className="font-medium">Operation completed</span>
        </div>
      ),
      code: `<div className="flex items-center gap-2 text-green-600">
  <CheckCircle className="w-5 h-5" />
  <span className="font-medium">Operation completed</span>
</div>`
    },
    {
      title: "Error Status",
      component: (
        <div className="flex items-center gap-2 text-red-600">
          <XCircle className="w-5 h-5" />
          <span className="font-medium">Something went wrong</span>
        </div>
      ),
      code: `<div className="flex items-center gap-2 text-red-600">
  <XCircle className="w-5 h-5" />
  <span className="font-medium">Something went wrong</span>
</div>`
    },
    {
      title: "Warning Status",
      component: (
        <div className="flex items-center gap-2 text-orange-600">
          <AlertCircle className="w-5 h-5" />
          <span className="font-medium">Requires attention</span>
        </div>
      ),
      code: `<div className="flex items-center gap-2 text-orange-600">
  <AlertCircle className="w-5 h-5" />
  <span className="font-medium">Requires attention</span>
</div>`
    },
    {
      title: "Pending Status",
      component: (
        <div className="flex items-center gap-2 text-blue-600">
          <Clock className="w-5 h-5" />
          <span className="font-medium">Processing...</span>
        </div>
      ),
      code: `<div className="flex items-center gap-2 text-blue-600">
  <Clock className="w-5 h-5" />
  <span className="font-medium">Processing...</span>
</div>`
    }
  ];

  const badgeStatusExamples = [
    {
      title: "Success Badge",
      component: <Badge className="bg-green-100 text-green-800 border-green-200">Active</Badge>,
      code: `<Badge className="bg-green-100 text-green-800 border-green-200">Active</Badge>`
    },
    {
      title: "Warning Badge",
      component: <Badge className="bg-orange-100 text-orange-800 border-orange-200">Pending</Badge>,
      code: `<Badge className="bg-orange-100 text-orange-800 border-orange-200">Pending</Badge>`
    },
    {
      title: "Error Badge",
      component: <Badge className="bg-red-100 text-red-800 border-red-200">Failed</Badge>,
      code: `<Badge className="bg-red-100 text-red-800 border-red-200">Failed</Badge>`
    },
    {
      title: "Info Badge",
      component: <Badge className="bg-blue-100 text-blue-800 border-blue-200">Info</Badge>,
      code: `<Badge className="bg-blue-100 text-blue-800 border-blue-200">Info</Badge>`
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="secondary">Components</Badge>
          <h1 className="text-3xl font-bold text-foreground">Status Indicators</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Visual status indicators, badges, and feedback components with beautiful pastel red theme.
        </p>
      </div>

      <Card className="card-elegant">
        <CardHeader>
          <CardTitle>Basic Status</CardTitle>
          <CardDescription>Simple status indicators with icons</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {basicStatusExamples.map((example, index) => (
              <div key={index} className="space-y-3">
                <h4 className="font-semibold text-foreground">{example.title}</h4>
                <div className="p-4 bg-muted/50 rounded-lg border border-border">
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

      <Card className="card-elegant">
        <CardHeader>
          <CardTitle>Status Badges</CardTitle>
          <CardDescription>Colorful badges for different states</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {badgeStatusExamples.map((example, index) => (
              <div key={index} className="space-y-3">
                <h4 className="font-semibold text-foreground text-center">{example.title}</h4>
                <div className="flex items-center justify-center p-4 bg-muted/50 rounded-lg border border-border">
                  {example.component}
                </div>
                <div className="space-y-2">
                  <Button size="sm" variant="ghost" onClick={() => handleCopyCode(example.code)} className="w-full">
                    <Copy className="w-3 h-3 mr-2" /> Copy
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}