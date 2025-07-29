import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Copy, Volume2, Sun, Wifi, Bell, Eye, EyeOff, Play, Pause, SkipForward } from "lucide-react";
import { toast } from "sonner";

export default function Controls() {
  const [volume, setVolume] = useState([50]);
  const [brightness, setBrightness] = useState([75]);
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [wifi, setWifi] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [textAlign, setTextAlign] = useState("center");
  const [priceRange, setPriceRange] = useState([25, 75]);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Code copied to clipboard!");
  };

  const sliderExamples = [
    {
      title: "Basic Slider",
      description: "Simple single-value slider",
      component: (
        <div className="space-y-3">
          <Label>Volume: {volume[0]}%</Label>
          <Slider
            value={volume}
            onValueChange={setVolume}
            max={100}
            step={1}
            className="w-full"
          />
        </div>
      ),
      code: `const [volume, setVolume] = useState([50]);

<div className="space-y-3">
  <Label>Volume: {volume[0]}%</Label>
  <Slider
    value={volume}
    onValueChange={setVolume}
    max={100}
    step={1}
    className="w-full"
  />
</div>`
    },
    {
      title: "Gradient Slider",
      description: "Styled slider with gradient track",
      component: (
        <div className="space-y-3">
          <Label>Brightness: {brightness[0]}%</Label>
          <Slider
            value={brightness}
            onValueChange={setBrightness}
            max={100}
            step={1}
            className="w-full [&>span:first-child]:h-3 [&>span:first-child]:bg-gradient-primary [&_[role=slider]]:bg-white [&_[role=slider]]:border-2 [&_[role=slider]]:border-primary [&_[role=slider]]:shadow-lg"
          />
        </div>
      ),
      code: `<Slider
  value={brightness}
  onValueChange={setBrightness}
  className="[&>span:first-child]:h-3 [&>span:first-child]:bg-gradient-primary [&_[role=slider]]:bg-white [&_[role=slider]]:border-2 [&_[role=slider]]:border-primary"
/>`
    },
    {
      title: "Large Colorful Slider",
      description: "Bigger slider with vibrant styling",
      component: (
        <div className="space-y-4">
          <Label className="text-lg font-semibold">Temperature: {priceRange[0]}°C</Label>
          <Slider
            value={[priceRange[0]]}
            onValueChange={(value) => setPriceRange([value[0], priceRange[1]])}
            max={40}
            min={-10}
            step={1}
            className="w-full [&>span:first-child]:h-4 [&>span:first-child]:bg-gradient-to-r [&>span:first-child]:from-blue-500 [&>span:first-child]:via-green-500 [&>span:first-child]:to-red-500 [&_[role=slider]]:h-6 [&_[role=slider]]:w-6 [&_[role=slider]]:bg-white [&_[role=slider]]:border-4 [&_[role=slider]]:border-primary [&_[role=slider]]:shadow-xl"
          />
        </div>
      ),
      code: `<Slider
  className="[&>span:first-child]:h-4 [&>span:first-child]:bg-gradient-to-r [&>span:first-child]:from-blue-500 [&>span:first-child]:via-green-500 [&>span:first-child]:to-red-500 [&_[role=slider]]:h-6 [&_[role=slider]]:w-6"
/>`
    },
    {
      title: "Range Slider",
      description: "Dual-handle slider for price ranges",
      component: (
        <div className="space-y-3">
          <Label>Price Range: ${priceRange[0]} - ${priceRange[1]}</Label>
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={100}
            min={0}
            step={5}
            className="w-full"
          />
        </div>
      ),
      code: `const [priceRange, setPriceRange] = useState([25, 75]);

<div className="space-y-3">
  <Label>Price Range: \${priceRange[0]} - \${priceRange[1]}</Label>
  <Slider
    value={priceRange}
    onValueChange={setPriceRange}
    max={100}
    min={0}
    step={5}
    className="w-full"
  />
</div>`
    },
    {
      title: "Minimal Slider",
      description: "Clean, minimal styling",
      component: (
        <div className="space-y-3">
          <Label className="text-sm text-muted-foreground">Progress: {volume[0]}%</Label>
          <Slider
            value={volume}
            onValueChange={setVolume}
            max={100}
            step={1}
            className="w-full [&>span:first-child]:h-1 [&>span:first-child]:bg-muted [&>span:last-child]:bg-foreground [&_[role=slider]]:h-3 [&_[role=slider]]:w-3 [&_[role=slider]]:bg-foreground [&_[role=slider]]:border-0"
          />
        </div>
      ),
      code: `<Slider
  className="[&>span:first-child]:h-1 [&>span:first-child]:bg-muted [&>span:last-child]:bg-foreground [&_[role=slider]]:h-3 [&_[role=slider]]:w-3 [&_[role=slider]]:bg-foreground [&_[role=slider]]:border-0"
/>`
    },
    {
      title: "Brightness Control",
      description: "Slider with icon and visual feedback",
      component: (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Sun className="w-4 h-4 text-muted-foreground" />
            <Label>Brightness: {brightness[0]}%</Label>
          </div>
          <Slider
            value={brightness}
            onValueChange={setBrightness}
            max={100}
            step={1}
            className="w-full"
          />
        </div>
      ),
      code: `const [brightness, setBrightness] = useState([75]);

<div className="space-y-3">
  <div className="flex items-center gap-2">
    <Sun className="w-4 h-4 text-muted-foreground" />
    <Label>Brightness: {brightness[0]}%</Label>
  </div>
  <Slider
    value={brightness}
    onValueChange={setBrightness}
    max={100}
    step={1}
    className="w-full"
  />
</div>`
    }
  ];

  const switchExamples = [
    {
      title: "Basic Switch",
      description: "Simple on/off toggle",
      component: (
        <div className="flex items-center space-x-2">
          <Switch 
            id="notifications" 
            checked={notifications}
            onCheckedChange={setNotifications}
          />
          <Label htmlFor="notifications">Enable notifications</Label>
        </div>
      ),
      code: `const [notifications, setNotifications] = useState(true);

<div className="flex items-center space-x-2">
  <Switch 
    id="notifications" 
    checked={notifications}
    onCheckedChange={setNotifications}
  />
  <Label htmlFor="notifications">Enable notifications</Label>
</div>`
    },
    {
      title: "Large Colorful Switch",
      description: "Bigger switch with custom colors",
      component: (
        <div className="flex items-center space-x-3">
          <Switch 
            checked={darkMode}
            onCheckedChange={setDarkMode}
            className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500 h-7 w-12"
          />
          <Label className="text-lg font-medium">Power Mode</Label>
        </div>
      ),
      code: `<Switch 
  checked={darkMode}
  onCheckedChange={setDarkMode}
  className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500 h-7 w-12"
/>`
    },
    {
      title: "Gradient Switch",
      description: "Switch with gradient background",
      component: (
        <div className="flex items-center space-x-3">
          <Switch 
            checked={wifi}
            onCheckedChange={setWifi}
            className="data-[state=checked]:bg-gradient-primary data-[state=unchecked]:bg-muted shadow-lg"
          />
          <Label>Premium Features</Label>
        </div>
      ),
      code: `<Switch 
  className="data-[state=checked]:bg-gradient-primary data-[state=unchecked]:bg-muted shadow-lg"
/>`
    },
    {
      title: "Switch with Icon",
      description: "Toggle with visual icon representation",
      component: (
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <Wifi className={`w-4 h-4 ${wifi ? 'text-green-500' : 'text-muted-foreground'}`} />
            <Switch 
              checked={wifi}
              onCheckedChange={setWifi}
            />
          </div>
          <Label>WiFi {wifi ? 'On' : 'Off'}</Label>
        </div>
      ),
      code: `const [wifi, setWifi] = useState(true);

<div className="flex items-center space-x-3">
  <div className="flex items-center space-x-2">
    <Wifi className={\`w-4 h-4 \${wifi ? 'text-green-500' : 'text-muted-foreground'}\`} />
    <Switch 
      checked={wifi}
      onCheckedChange={setWifi}
    />
  </div>
  <Label>WiFi {wifi ? 'On' : 'Off'}</Label>
</div>`
    },
    {
      title: "Minimal Switch",
      description: "Clean, borderless design",
      component: (
        <div className="flex items-center space-x-2">
          <Switch 
            checked={notifications}
            onCheckedChange={setNotifications}
            className="data-[state=checked]:bg-foreground data-[state=unchecked]:bg-muted border-0 shadow-none h-5 w-9"
          />
          <Label className="text-sm">Auto-save</Label>
        </div>
      ),
      code: `<Switch 
  className="data-[state=checked]:bg-foreground data-[state=unchecked]:bg-muted border-0 shadow-none h-5 w-9"
/>`
    },
    {
      title: "Dark Mode Toggle",
      description: "Theme switching with visual feedback",
      component: (
        <div className="flex items-center space-x-2">
          <Switch 
            checked={darkMode}
            onCheckedChange={setDarkMode}
          />
          <Label>Dark Mode {darkMode ? '🌙' : '☀️'}</Label>
        </div>
      ),
      code: `const [darkMode, setDarkMode] = useState(false);

<div className="flex items-center space-x-2">
  <Switch 
    checked={darkMode}
    onCheckedChange={setDarkMode}
  />
  <Label>Dark Mode {darkMode ? '🌙' : '☀️'}</Label>
</div>`
    }
  ];

  const toggleExamples = [
    {
      title: "Basic Toggle",
      description: "Simple toggle button",
      component: (
        <Toggle
          pressed={showPassword}
          onPressedChange={setShowPassword}
          aria-label="Toggle password visibility"
        >
          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </Toggle>
      ),
      code: `const [showPassword, setShowPassword] = useState(false);

<Toggle
  pressed={showPassword}
  onPressedChange={setShowPassword}
  aria-label="Toggle password visibility"
>
  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
</Toggle>`
    },
    {
      title: "Media Controls",
      description: "Toggle button for play/pause",
      component: (
        <Toggle
          pressed={isPlaying}
          onPressedChange={setIsPlaying}
          variant="outline"
          size="lg"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </Toggle>
      ),
      code: `const [isPlaying, setIsPlaying] = useState(false);

<Toggle
  pressed={isPlaying}
  onPressedChange={setIsPlaying}
  variant="outline"
  size="lg"
>
  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
</Toggle>`
    }
  ];

  const toggleGroupExamples = [
    {
      title: "Text Alignment",
      description: "Toggle group for text alignment options",
      component: (
        <ToggleGroup 
          type="single" 
          value={textAlign}
          onValueChange={(value) => value && setTextAlign(value)}
        >
          <ToggleGroupItem value="left" aria-label="Align left">
            ⭅
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">
            ⭤
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">
            ⭆
          </ToggleGroupItem>
        </ToggleGroup>
      ),
      code: `const [textAlign, setTextAlign] = useState("center");

<ToggleGroup 
  type="single" 
  value={textAlign}
  onValueChange={(value) => value && setTextAlign(value)}
>
  <ToggleGroupItem value="left" aria-label="Align left">
    ⭅
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Align center">
    ⭤
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Align right">
    ⭆
  </ToggleGroupItem>
</ToggleGroup>`
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="secondary">Components</Badge>
          <h1 className="text-3xl font-bold text-foreground">Sliders & Toggles</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Interactive controls including sliders, switches, toggles, and toggle groups for 
          building modern user interfaces with precise user input handling.
        </p>
      </div>

      {/* Flex Layout Examples */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Flex Layout Examples
          </CardTitle>
          <CardDescription>
            Creative flexbox layouts for control components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Responsive Control Grid */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Responsive Control Grid</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gradient-to-br from-muted/30 to-muted/60 rounded-xl border border-border">
                <div className="flex flex-col items-center space-y-3 p-4 bg-background/80 rounded-lg backdrop-blur-sm border border-border/50">
                  <Volume2 className="w-6 h-6 text-primary" />
                  <Label className="text-center font-medium">Volume</Label>
                  <Slider value={volume} onValueChange={setVolume} className="w-full" />
                  <span className="text-sm text-muted-foreground">{volume[0]}%</span>
                </div>
                <div className="flex flex-col items-center space-y-3 p-4 bg-background/80 rounded-lg backdrop-blur-sm border border-border/50">
                  <Sun className="w-6 h-6 text-primary" />
                  <Label className="text-center font-medium">Brightness</Label>
                  <Slider value={brightness} onValueChange={setBrightness} className="w-full" />
                  <span className="text-sm text-muted-foreground">{brightness[0]}%</span>
                </div>
                <div className="flex flex-col items-center space-y-3 p-4 bg-background/80 rounded-lg backdrop-blur-sm border border-border/50">
                  <Bell className="w-6 h-6 text-primary" />
                  <Label className="text-center font-medium">Notifications</Label>
                  <Switch checked={notifications} onCheckedChange={setNotifications} className="mt-2" />
                  <span className="text-sm text-muted-foreground">{notifications ? 'On' : 'Off'}</span>
                </div>
              </div>
            </div>

            {/* Horizontal Control Bar */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Control Dashboard</h4>
              <div className="flex flex-wrap items-center justify-between gap-6 p-6 bg-gradient-primary/10 rounded-xl border-2 border-primary/20">
                <div className="flex items-center space-x-4 min-w-0 flex-1">
                  <Volume2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="flex-1 min-w-[120px]">
                    <Label className="text-sm font-medium text-primary">Audio Level</Label>
                    <Slider 
                      value={volume} 
                      onValueChange={setVolume} 
                      className="mt-2 [&>span:first-child]:bg-primary/30 [&>span:last-child]:bg-primary" 
                    />
                  </div>
                  <Badge variant="secondary" className="flex-shrink-0">{volume[0]}%</Badge>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Wifi className={`w-4 h-4 ${wifi ? 'text-green-500' : 'text-muted-foreground'}`} />
                    <Switch checked={wifi} onCheckedChange={setWifi} className="h-5 w-9" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bell className={`w-4 h-4 ${notifications ? 'text-blue-500' : 'text-muted-foreground'}`} />
                    <Switch checked={notifications} onCheckedChange={setNotifications} className="h-5 w-9" />
                  </div>
                </div>
              </div>
            </div>

            {/* Stacked Control Cards */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Stacked Control Cards</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-background to-muted/50 rounded-lg border border-border hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Sun className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <Label className="font-medium">Display Brightness</Label>
                      <p className="text-sm text-muted-foreground">Adjust screen brightness</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-32">
                      <Slider value={brightness} onValueChange={setBrightness} />
                    </div>
                    <Badge variant="outline">{brightness[0]}%</Badge>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-background to-muted/50 rounded-lg border border-border hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Bell className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <Label className="font-medium">Push Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive instant alerts</p>
                    </div>
                  </div>
                  <Switch 
                    checked={notifications} 
                    onCheckedChange={setNotifications}
                    className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-500 data-[state=checked]:to-purple-600"
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Slider Examples */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Volume2 className="w-5 h-5" />
            Sliders
          </CardTitle>
          <CardDescription>
            Range sliders for numeric input and value selection
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8">
            {sliderExamples.map((example, index) => (
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

      {/* Switch Examples */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Switches
          </CardTitle>
          <CardDescription>
            On/off toggles for boolean settings and preferences
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8">
            {switchExamples.map((example, index) => (
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

      {/* Toggle Examples */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="w-5 h-5" />
            Toggle Buttons
          </CardTitle>
          <CardDescription>
            Pressable buttons that maintain pressed/unpressed state
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8">
            {toggleExamples.map((example, index) => (
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

      {/* Toggle Group Examples */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle>Toggle Groups</CardTitle>
          <CardDescription>
            Grouped toggle buttons for related options
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8">
            {toggleGroupExamples.map((example, index) => (
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

      {/* Real-world Dashboard Example */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle>Settings Panel Example</CardTitle>
          <CardDescription>
            A complete settings interface using various control components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Audio Settings</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Volume2 className="w-4 h-4 text-muted-foreground" />
                    <Label>Volume: {volume[0]}%</Label>
                  </div>
                  <Slider
                    value={volume}
                    onValueChange={setVolume}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Display Settings</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-muted-foreground" />
                    <Label>Brightness: {brightness[0]}%</Label>
                  </div>
                  <Slider
                    value={brightness}
                    onValueChange={setBrightness}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Preferences</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Switch 
                    checked={notifications}
                    onCheckedChange={setNotifications}
                  />
                  <Label>Push notifications</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch 
                    checked={darkMode}
                    onCheckedChange={setDarkMode}
                  />
                  <Label>Dark mode</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch 
                    checked={wifi}
                    onCheckedChange={setWifi}
                  />
                  <Label>Auto-connect WiFi</Label>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}