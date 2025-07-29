import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, Eye, EyeOff, Mail, Lock, User, Search } from "lucide-react";
import { toast } from "sonner";

export default function Forms() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
    country: "",
    notifications: false,
    theme: "",
    subscribe: false
  });

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Code copied to clipboard!");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Form submitted successfully!");
    console.log("Form data:", formData);
  };

  const inputExamples = [
    {
      title: "Basic Inputs",
      description: "Standard input fields with different types and styles",
      examples: [
        {
          component: <Input placeholder="Enter your name" />,
          code: '<Input placeholder="Enter your name" />',
          label: "Default Input"
        },
        {
          component: <Input type="email" placeholder="your@email.com" />,
          code: '<Input type="email" placeholder="your@email.com" />',
          label: "Email Input"
        },
        {
          component: <Input type="password" placeholder="••••••••" />,
          code: '<Input type="password" placeholder="••••••••" />',
          label: "Password Input"
        },
        {
          component: <Input type="number" placeholder="123" />,
          code: '<Input type="number" placeholder="123" />',
          label: "Number Input"
        }
      ]
    },
    {
      title: "Input with Icons",
      description: "Enhanced inputs with icons for better visual context",
      examples: [
        {
          component: (
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input className="pl-10" placeholder="Username" />
            </div>
          ),
          code: `<div className="relative">
  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
  <Input className="pl-10" placeholder="Username" />
</div>`,
          label: "Username with Icon"
        },
        {
          component: (
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input className="pl-10" type="email" placeholder="Email address" />
            </div>
          ),
          code: `<div className="relative">
  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
  <Input className="pl-10" type="email" placeholder="Email address" />
</div>`,
          label: "Email with Icon"
        },
        {
          component: (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input className="pl-10" placeholder="Search..." />
            </div>
          ),
          code: `<div className="relative">
  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
  <Input className="pl-10" placeholder="Search..." />
</div>`,
          label: "Search Input"
        }
      ]
    },
    {
      title: "Advanced Inputs",
      description: "Special input types and interactive elements",
      examples: [
        {
          component: (
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                className="pl-10 pr-10" 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
              />
              <Button
                size="sm"
                variant="ghost"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </Button>
            </div>
          ),
          code: `const [showPassword, setShowPassword] = useState(false);

<div className="relative">
  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
  <Input 
    className="pl-10 pr-10" 
    type={showPassword ? "text" : "password"} 
    placeholder="Password" 
  />
  <Button
    size="sm"
    variant="ghost"
    className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
  </Button>
</div>`,
          label: "Password Toggle"
        },
        {
          component: <Textarea placeholder="Tell us about yourself..." className="min-h-[100px]" />,
          code: '<Textarea placeholder="Tell us about yourself..." className="min-h-[100px]" />',
          label: "Textarea"
        }
      ]
    }
  ];

  const selectExamples = [
    {
      component: (
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="ca">Canada</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="de">Germany</SelectItem>
            <SelectItem value="fr">France</SelectItem>
          </SelectContent>
        </Select>
      ),
      code: `<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a country" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="us">United States</SelectItem>
    <SelectItem value="ca">Canada</SelectItem>
    <SelectItem value="uk">United Kingdom</SelectItem>
  </SelectContent>
</Select>`,
      label: "Basic Select"
    }
  ];

  const checkboxExamples = [
    {
      component: (
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      ),
      code: `<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`,
      label: "Checkbox with Label"
    },
    {
      component: (
        <div className="flex items-center space-x-2">
          <Switch id="notifications" />
          <Label htmlFor="notifications">Enable notifications</Label>
        </div>
      ),
      code: `<div className="flex items-center space-x-2">
  <Switch id="notifications" />
  <Label htmlFor="notifications">Enable notifications</Label>
</div>`,
      label: "Switch Toggle"
    }
  ];

  const radioExamples = [
    {
      component: (
        <RadioGroup defaultValue="light">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="light" id="light" />
            <Label htmlFor="light">Light</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="dark" id="dark" />
            <Label htmlFor="dark">Dark</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="system" id="system" />
            <Label htmlFor="system">System</Label>
          </div>
        </RadioGroup>
      ),
      code: `<RadioGroup defaultValue="light">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="light" id="light" />
    <Label htmlFor="light">Light</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="dark" id="dark" />
    <Label htmlFor="dark">Dark</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="system" id="system" />
    <Label htmlFor="system">System</Label>
  </div>
</RadioGroup>`,
      label: "Radio Group"
    }
  ];

  const flexExamples = [
    {
      component: (
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <Label className="w-20 text-sm font-medium">Name:</Label>
            <Input className="flex-1" placeholder="Enter name" />
          </div>
          <div className="flex items-center space-x-4">
            <Label className="w-20 text-sm font-medium">Email:</Label>
            <Input className="flex-1" type="email" placeholder="Enter email" />
          </div>
        </div>
      ),
      code: `<div className="flex flex-col space-y-4">
  <div className="flex items-center space-x-4">
    <Label className="w-20 text-sm font-medium">Name:</Label>
    <Input className="flex-1" placeholder="Enter name" />
  </div>
  <div className="flex items-center space-x-4">
    <Label className="w-20 text-sm font-medium">Email:</Label>
    <Input className="flex-1" type="email" placeholder="Enter email" />
  </div>
</div>`,
      label: "Horizontal Form Layout"
    },
    {
      component: (
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <Label className="block mb-2">First Name</Label>
            <Input placeholder="John" />
          </div>
          <div className="flex-1 min-w-[200px]">
            <Label className="block mb-2">Last Name</Label>
            <Input placeholder="Doe" />
          </div>
          <div className="flex-1 min-w-[200px]">
            <Label className="block mb-2">Email</Label>
            <Input type="email" placeholder="john@example.com" />
          </div>
        </div>
      ),
      code: `<div className="flex flex-wrap gap-4">
  <div className="flex-1 min-w-[200px]">
    <Label className="block mb-2">First Name</Label>
    <Input placeholder="John" />
  </div>
  <div className="flex-1 min-w-[200px]">
    <Label className="block mb-2">Last Name</Label>
    <Input placeholder="Doe" />
  </div>
  <div className="flex-1 min-w-[200px]">
    <Label className="block mb-2">Email</Label>
    <Input type="email" placeholder="john@example.com" />
  </div>
</div>`,
      label: "Responsive Flex Grid"
    },
    {
      component: (
        <div className="flex justify-between items-end">
          <div className="flex-1 mr-4">
            <Label className="block mb-2">Amount</Label>
            <Input type="number" placeholder="100.00" />
          </div>
          <Button variant="gradient" className="h-10">
            Calculate
          </Button>
        </div>
      ),
      code: `<div className="flex justify-between items-end">
  <div className="flex-1 mr-4">
    <Label className="block mb-2">Amount</Label>
    <Input type="number" placeholder="100.00" />
  </div>
  <Button variant="gradient" className="h-10">
    Calculate
  </Button>
</div>`,
      label: "Input with Action Button"
    }
  ];

  const labelExamples = [
    {
      component: (
        <div className="space-y-4">
          <div>
            <Label className="text-lg font-bold text-primary">Bold Primary Label</Label>
            <Input className="mt-2" placeholder="Enter value" />
          </div>
          <div>
            <Label className="text-sm text-muted-foreground uppercase tracking-wide">Small Uppercase</Label>
            <Input className="mt-2" placeholder="Enter value" />
          </div>
          <div>
            <Label className="text-base font-medium bg-gradient-primary bg-clip-text text-transparent">Gradient Label</Label>
            <Input className="mt-2" placeholder="Enter value" />
          </div>
        </div>
      ),
      code: `<div>
  <Label className="text-lg font-bold text-primary">Bold Primary Label</Label>
  <Input className="mt-2" placeholder="Enter value" />
</div>
<div>
  <Label className="text-sm text-muted-foreground uppercase tracking-wide">Small Uppercase</Label>
  <Input className="mt-2" placeholder="Enter value" />
</div>
<div>
  <Label className="text-base font-medium bg-gradient-primary bg-clip-text text-transparent">Gradient Label</Label>
  <Input className="mt-2" placeholder="Enter value" />
</div>`,
      label: "Styled Labels"
    },
    {
      component: (
        <div className="space-y-4">
          <div className="relative">
            <Label className="absolute -top-2 left-3 bg-background px-2 text-xs text-primary font-medium">
              Floating Label
            </Label>
            <Input className="pt-4" placeholder=" " />
          </div>
          <div>
            <Label className="flex items-center justify-between">
              <span>Password</span>
              <Badge variant="secondary" className="text-xs">Required</Badge>
            </Label>
            <Input className="mt-2" type="password" placeholder="••••••••" />
          </div>
        </div>
      ),
      code: `<div className="relative">
  <Label className="absolute -top-2 left-3 bg-background px-2 text-xs text-primary font-medium">
    Floating Label
  </Label>
  <Input className="pt-4" placeholder=" " />
</div>
<div>
  <Label className="flex items-center justify-between">
    <span>Password</span>
    <Badge variant="secondary" className="text-xs">Required</Badge>
  </Label>
  <Input className="mt-2" type="password" placeholder="••••••••" />
</div>`,
      label: "Advanced Label Positioning"
    }
  ];

  const funkyExamples = [
    {
      component: (
        <div className="space-y-4">
          <div className="relative group">
            <Input 
              className="bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 hover:shadow-glow" 
              placeholder="Glowing input..." 
            />
          </div>
          <div className="relative">
            <Input 
              className="rounded-full border-2 border-dashed border-primary/50 bg-primary/5 focus:border-primary focus:bg-primary/10 transition-all duration-300" 
              placeholder="Rounded dashed input" 
            />
          </div>
          <div className="relative group">
            <Input 
              className="bg-card border-0 shadow-xl rounded-2xl focus:shadow-2xl focus:scale-105 transition-all duration-300 text-center" 
              placeholder="Floating card input" 
            />
          </div>
        </div>
      ),
      code: `<Input 
  className="bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 hover:shadow-glow" 
  placeholder="Glowing input..." 
/>
<Input 
  className="rounded-full border-2 border-dashed border-primary/50 bg-primary/5 focus:border-primary focus:bg-primary/10 transition-all duration-300" 
  placeholder="Rounded dashed input" 
/>
<Input 
  className="bg-card border-0 shadow-xl rounded-2xl focus:shadow-2xl focus:scale-105 transition-all duration-300 text-center" 
  placeholder="Floating card input" 
/>`,
      label: "Funky Input Styles"
    },
    {
      component: (
        <div className="space-y-4">
          <div className="p-6 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl border border-primary/20">
            <Label className="text-lg font-bold mb-4 block text-primary">Fancy Form Section</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input className="bg-background/80 backdrop-blur-sm" placeholder="Name" />
              <Input className="bg-background/80 backdrop-blur-sm" placeholder="Email" />
            </div>
          </div>
          <div className="relative overflow-hidden p-6 bg-card rounded-xl border-2 border-primary/30">
            <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
            <div className="relative z-10">
              <Label className="block mb-3 text-sm font-medium uppercase tracking-wider">Premium Input</Label>
              <Input className="bg-transparent border-primary/50 focus:border-primary" placeholder="Enter premium data" />
            </div>
          </div>
        </div>
      ),
      code: `<div className="p-6 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl border border-primary/20">
  <Label className="text-lg font-bold mb-4 block text-primary">Fancy Form Section</Label>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <Input className="bg-background/80 backdrop-blur-sm" placeholder="Name" />
    <Input className="bg-background/80 backdrop-blur-sm" placeholder="Email" />
  </div>
</div>
<div className="relative overflow-hidden p-6 bg-card rounded-xl border-2 border-primary/30">
  <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
  <div className="relative z-10">
    <Label className="block mb-3 text-sm font-medium uppercase tracking-wider">Premium Input</Label>
    <Input className="bg-transparent border-primary/50 focus:border-primary" placeholder="Enter premium data" />
  </div>
</div>`,
      label: "Fancy Form Containers"
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="secondary">Components</Badge>
          <h1 className="text-3xl font-bold text-foreground">Form Fields</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          A comprehensive collection of form input components including text inputs, selects, checkboxes, 
          radio buttons, and advanced input patterns with validation and accessibility features.
        </p>
      </div>

      {/* Input Examples */}
      {inputExamples.map((section, sectionIndex) => (
        <Card key={sectionIndex} className="card-elegant">
          <CardHeader>
            <CardTitle>{section.title}</CardTitle>
            <CardDescription>{section.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              {section.examples.map((example, index) => (
                <div key={index} className="space-y-3">
                  <Label className="text-sm font-medium text-foreground">{example.label}</Label>
                  <div className="p-4 bg-muted/50 rounded-lg border border-border">
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
      ))}

      {/* Select Examples */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle>Select Dropdowns</CardTitle>
          <CardDescription>Dropdown select components with various options</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {selectExamples.map((example, index) => (
              <div key={index} className="space-y-3">
                <Label className="text-sm font-medium text-foreground">{example.label}</Label>
                <div className="p-4 bg-muted/50 rounded-lg border border-border">
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

      {/* Checkbox and Switch Examples */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle>Checkboxes & Switches</CardTitle>
          <CardDescription>Boolean input controls for settings and preferences</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {checkboxExamples.map((example, index) => (
              <div key={index} className="space-y-3">
                <Label className="text-sm font-medium text-foreground">{example.label}</Label>
                <div className="p-4 bg-muted/50 rounded-lg border border-border">
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

      {/* Radio Examples */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle>Radio Groups</CardTitle>
          <CardDescription>Single-choice selection components</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {radioExamples.map((example, index) => (
              <div key={index} className="space-y-3">
                <Label className="text-sm font-medium text-foreground">{example.label}</Label>
                <div className="p-4 bg-muted/50 rounded-lg border border-border">
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

      {/* Flex Layout Examples */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle>Flex Layout Examples</CardTitle>
          <CardDescription>Responsive form layouts using flexbox for better organization</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {flexExamples.map((example, index) => (
              <div key={index} className="space-y-3">
                <Label className="text-sm font-medium text-foreground">{example.label}</Label>
                <div className="p-4 bg-muted/50 rounded-lg border border-border">
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

      {/* Label Styling Examples */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle>Advanced Label Styling</CardTitle>
          <CardDescription>Creative label designs with gradients, positioning, and typography</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {labelExamples.map((example, index) => (
              <div key={index} className="space-y-3">
                <Label className="text-sm font-medium text-foreground">{example.label}</Label>
                <div className="p-4 bg-muted/50 rounded-lg border border-border">
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

      {/* Funky Styling Examples */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle>Funky & Creative Styles</CardTitle>
          <CardDescription>Experimental and creative form designs with unique visual effects</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {funkyExamples.map((example, index) => (
              <div key={index} className="space-y-3">
                <Label className="text-sm font-medium text-foreground">{example.label}</Label>
                <div className="p-4 bg-muted/50 rounded-lg border border-border">
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

      {/* Complete Form Example */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle>Complete Form Example</CardTitle>
          <CardDescription>
            A real-world form combining multiple input types with validation and submission
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input 
                    id="name"
                    className="pl-10" 
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input 
                    id="email"
                    type="email"
                    className="pl-10" 
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  id="password"
                  className="pl-10 pr-10" 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                <Button
                  type="button"
                  size="sm"
                  variant="ghost"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea 
                id="bio"
                placeholder="Tell us about yourself..."
                className="min-h-[100px]"
                value={formData.bio}
                onChange={(e) => setFormData({...formData, bio: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <Label>Country</Label>
              <Select value={formData.country} onValueChange={(value) => setFormData({...formData, country: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="de">Germany</SelectItem>
                  <SelectItem value="fr">France</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="notifications" 
                  checked={formData.notifications}
                  onCheckedChange={(checked) => setFormData({...formData, notifications: checked as boolean})}
                />
                <Label htmlFor="notifications">Enable email notifications</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="subscribe" 
                  checked={formData.subscribe}
                  onCheckedChange={(checked) => setFormData({...formData, subscribe: checked as boolean})}
                />
                <Label htmlFor="subscribe">Subscribe to newsletter</Label>
              </div>
            </div>

            <div className="flex gap-4">
              <Button type="submit" variant="gradient" className="flex-1">
                Create Account
              </Button>
              <Button type="button" variant="outline" onClick={() => setFormData({
                name: "", email: "", password: "", bio: "", country: "", 
                notifications: false, theme: "", subscribe: false
              })}>
                Reset
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}