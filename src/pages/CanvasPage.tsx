import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Copy, Palette, Download, Trash2, Undo, Circle, Square, Triangle, Pen, Eraser, MousePointer } from "lucide-react";
import { toast } from "sonner";

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentTool, setCurrentTool] = useState<'pen' | 'eraser' | 'select'>('pen');
  const [brushSize, setBrushSize] = useState([5]);
  const [currentColor, setCurrentColor] = useState('#E91E63');
  const [shapes, setShapes] = useState<any[]>([]);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Code copied to clipboard!");
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 800;
    canvas.height = 400;
    
    // Set white background
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const startDrawing = (e: React.MouseEvent) => {
    if (!canvasRef.current) return;
    setIsDrawing(true);
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent) => {
    if (!isDrawing || !canvasRef.current) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    ctx.lineWidth = brushSize[0];
    ctx.lineCap = 'round';
    
    if (currentTool === 'pen') {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = currentColor;
    } else if (currentTool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
    }
    
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    toast.success("Canvas cleared!");
  };

  const downloadCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const link = document.createElement('a');
    link.download = 'drawing.png';
    link.href = canvas.toDataURL();
    link.click();
    toast.success("Drawing downloaded!");
  };

  const drawingExamples = [
    {
      title: "Basic Drawing Canvas",
      description: "Interactive canvas with drawing tools",
      component: (
        <div className="space-y-4">
          {/* Toolbar */}
          <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg border border-border">
            <div className="flex items-center gap-2">
              <Label className="text-sm font-medium">Tool:</Label>
              <div className="flex gap-1">
                <Button
                  size="sm"
                  variant={currentTool === 'pen' ? 'default' : 'outline'}
                  onClick={() => setCurrentTool('pen')}
                >
                  <Pen className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant={currentTool === 'eraser' ? 'default' : 'outline'}
                  onClick={() => setCurrentTool('eraser')}
                >
                  <Eraser className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant={currentTool === 'select' ? 'default' : 'outline'}
                  onClick={() => setCurrentTool('select')}
                >
                  <MousePointer className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Label className="text-sm font-medium">Size:</Label>
              <div className="w-24">
                <Slider
                  value={brushSize}
                  onValueChange={setBrushSize}
                  max={20}
                  min={1}
                  step={1}
                />
              </div>
              <span className="text-sm text-muted-foreground w-8">{brushSize[0]}px</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Label className="text-sm font-medium">Color:</Label>
              <input
                type="color"
                value={currentColor}
                onChange={(e) => setCurrentColor(e.target.value)}
                className="w-8 h-8 rounded border border-border cursor-pointer"
              />
            </div>
            
            <div className="flex gap-2 ml-auto">
              <Button size="sm" variant="outline" onClick={clearCanvas}>
                <Trash2 className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" onClick={downloadCanvas}>
                <Download className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Canvas */}
          <div className="border border-border rounded-lg overflow-hidden bg-white">
            <canvas
              ref={canvasRef}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              className="cursor-crosshair w-full max-w-full"
              style={{ maxHeight: '400px' }}
            />
          </div>
          
          <p className="text-sm text-muted-foreground">
            Click and drag to draw, use the toolbar to change tools, brush size, and color.
          </p>
        </div>
      ),
      code: `const canvasRef = useRef<HTMLCanvasElement>(null);
const [isDrawing, setIsDrawing] = useState(false);
const [currentTool, setCurrentTool] = useState<'pen' | 'eraser'>('pen');
const [brushSize, setBrushSize] = useState([5]);
const [currentColor, setCurrentColor] = useState('#E91E63');

const startDrawing = (e: React.MouseEvent) => {
  if (!canvasRef.current) return;
  setIsDrawing(true);
  
  const rect = canvasRef.current.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  const ctx = canvasRef.current.getContext('2d');
  if (!ctx) return;
  
  ctx.beginPath();
  ctx.moveTo(x, y);
};

const draw = (e: React.MouseEvent) => {
  if (!isDrawing || !canvasRef.current) return;
  
  const rect = canvasRef.current.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  const ctx = canvasRef.current.getContext('2d');
  if (!ctx) return;
  
  ctx.lineWidth = brushSize[0];
  ctx.lineCap = 'round';
  ctx.strokeStyle = currentColor;
  
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
};

<canvas
  ref={canvasRef}
  onMouseDown={startDrawing}
  onMouseMove={draw}
  onMouseUp={() => setIsDrawing(false)}
  className="cursor-crosshair"
/>`
    }
  ];

  const canvasFeatures = [
    {
      title: "Shape Tools",
      description: "Pre-built shapes you can add",
      component: (
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={() => toast.info("Circle tool selected")}>
            <Circle className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="outline" onClick={() => toast.info("Square tool selected")}>
            <Square className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="outline" onClick={() => toast.info("Triangle tool selected")}>
            <Triangle className="w-4 h-4" />
          </Button>
        </div>
      ),
      code: `<Button size="sm" variant="outline" onClick={addCircle}>
  <Circle className="w-4 h-4" />
</Button>
<Button size="sm" variant="outline" onClick={addSquare}>
  <Square className="w-4 h-4" />
</Button>`
    },
    {
      title: "Color Palette",
      description: "Quick color selection",
      component: (
        <div className="flex gap-2">
          {['#E91E63', '#2196F3', '#4CAF50', '#FF9800', '#9C27B0', '#F44336'].map((color) => (
            <button
              key={color}
              className="w-8 h-8 rounded-full border-2 border-border hover:scale-110 transition-transform"
              style={{ backgroundColor: color }}
              onClick={() => {
                setCurrentColor(color);
                toast.success(`Color changed to ${color}`);
              }}
            />
          ))}
        </div>
      ),
      code: `const colors = ['#E91E63', '#2196F3', '#4CAF50', '#FF9800'];

{colors.map((color) => (
  <button
    key={color}
    className="w-8 h-8 rounded-full border-2 border-border hover:scale-110 transition-transform"
    style={{ backgroundColor: color }}
    onClick={() => setCurrentColor(color)}
  />
))}`
    },
    {
      title: "Brush Styles",
      description: "Different brush effects",
      component: (
        <div className="space-y-2">
          <div className="flex gap-2">
            <Button size="sm" variant="outline">Normal</Button>
            <Button size="sm" variant="outline">Soft</Button>
            <Button size="sm" variant="outline">Textured</Button>
          </div>
          <p className="text-xs text-muted-foreground">Different brush effects for artistic drawing</p>
        </div>
      ),
      code: `// Different brush styles
const brushStyles = ['normal', 'soft', 'textured'];

ctx.shadowBlur = brushStyle === 'soft' ? 5 : 0;
ctx.globalAlpha = brushStyle === 'textured' ? 0.7 : 1;`
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="secondary">Components</Badge>
          <h1 className="text-3xl font-bold text-foreground">Canvas & Drawing</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Interactive canvas components for drawing, sketching, and creative applications 
          with comprehensive toolsets and pastel red theming.
        </p>
      </div>

      {/* Drawing Canvas */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="w-5 h-5" />
            Interactive Drawing Canvas
          </CardTitle>
          <CardDescription>
            Full-featured drawing canvas with tools, colors, and export functionality
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {drawingExamples.map((example, index) => (
              <div key={index} className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">{example.title}</h4>
                  <p className="text-sm text-muted-foreground">{example.description}</p>
                </div>
                <div className="space-y-4">
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

      {/* Canvas Features */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle>Canvas Features</CardTitle>
          <CardDescription>
            Additional tools and features for enhanced drawing experience
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {canvasFeatures.map((feature, index) => (
              <div key={index} className="space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg border border-border">
                  {feature.component}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">Code</span>
                    <Button size="sm" variant="ghost" onClick={() => handleCopyCode(feature.code)}>
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                  <div className="code-block text-xs">
                    <pre>{feature.code}</pre>
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
          <CardTitle>Canvas Integration Guide</CardTitle>
          <CardDescription>
            How to implement canvas functionality in your React app
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="code-block">
              <pre>{`// 1. Create canvas ref and state
const canvasRef = useRef<HTMLCanvasElement>(null);
const [isDrawing, setIsDrawing] = useState(false);
const [currentColor, setCurrentColor] = useState('#E91E63');

// 2. Initialize canvas
useEffect(() => {
  const canvas = canvasRef.current;
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  canvas.width = 800;
  canvas.height = 400;
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}, []);

// 3. Handle drawing events
const startDrawing = (e: React.MouseEvent) => {
  // Start drawing logic
};

const draw = (e: React.MouseEvent) => {
  // Drawing logic
};

// 4. Render canvas
<canvas
  ref={canvasRef}
  onMouseDown={startDrawing}
  onMouseMove={draw}
  onMouseUp={() => setIsDrawing(false)}
  className="border rounded-lg"
/>`}</pre>
            </div>
            <p className="text-sm text-muted-foreground">
              This example provides a complete drawing canvas with tool selection, color picking, 
              and export functionality. The canvas is fully interactive and supports mouse events 
              for drawing operations.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}