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