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