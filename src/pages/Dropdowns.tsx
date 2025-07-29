import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger } from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Copy, ChevronDown, User, Settings, LogOut, Plus, Filter, Download, Share, Edit, Trash2, Star, Heart, Eye, ChevronRight, MoreHorizontal } from "lucide-react";
import { toast } from "sonner";

export default function Dropdowns() {
  const [selectedValue, setSelectedValue] = useState("");
  const [checkedItems, setCheckedItems] = useState({
    notifications: true,
    emails: false,
    updates: true
  });
  const [radioValue, setRadioValue] = useState("option1");

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Code copied to clipboard!");
  };

  const basicDropdownExamples = [
    {
      title: "Basic Dropdown",
      description: "Simple dropdown with menu items",
      component: (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Menu <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
      code: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">
      Menu <ChevronDown className="ml-2 h-4 w-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`
    },
    {
      title: "User Account Menu",
      description: "User menu with icons and labels",
      component: (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              John Doe <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
      code: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" className="flex items-center gap-2">
      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
        <User className="w-4 h-4 text-white" />
      </div>
      John Doe <ChevronDown className="h-4 w-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56" align="end">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <User className="mr-2 h-4 w-4" />
      Profile
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Settings className="mr-2 h-4 w-4" />
      Settings
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="text-red-600">
      <LogOut className="mr-2 h-4 w-4" />
      Log out
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`
    },
    {
      title: "Action Menu",
      description: "Context menu with various actions",
      component: (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="sm" variant="outline">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Share className="mr-2 h-4 w-4" />
              Share
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Download className="mr-2 h-4 w-4" />
              Download
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
      code: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button size="sm" variant="outline">
      <MoreHorizontal className="h-4 w-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>
      <Edit className="mr-2 h-4 w-4" />
      Edit
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Share className="mr-2 h-4 w-4" />
      Share
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Download className="mr-2 h-4 w-4" />
      Download
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="text-red-600">
      <Trash2 className="mr-2 h-4 w-4" />
      Delete
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`
    }
  ];

  const styledDropdownExamples = [
    {
      title: "Gradient Dropdown",
      description: "Dropdown with gradient styling",
      component: (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="gradient">
              Actions <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gradient-to-br from-background to-muted border-2 border-primary/20 shadow-2xl">
            <DropdownMenuItem className="hover:bg-primary/10">
              <Star className="mr-2 h-4 w-4 text-yellow-500" />
              Add to Favorites
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-primary/10">
              <Heart className="mr-2 h-4 w-4 text-red-500" />
              Like
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-primary/10">
              <Eye className="mr-2 h-4 w-4 text-blue-500" />
              View Details
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
      code: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="gradient">
      Actions <ChevronDown className="ml-2 h-4 w-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="bg-gradient-to-br from-background to-muted border-2 border-primary/20 shadow-2xl">
    <DropdownMenuItem className="hover:bg-primary/10">
      <Star className="mr-2 h-4 w-4 text-yellow-500" />
      Add to Favorites
    </DropdownMenuItem>
    <DropdownMenuItem className="hover:bg-primary/10">
      <Heart className="mr-2 h-4 w-4 text-red-500" />
      Like
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`
    },
    {
      title: "Minimal Dropdown",
      description: "Clean, borderless design",
      component: (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="border-0 shadow-none">
              Options <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border-0 shadow-lg bg-background/95 backdrop-blur-sm">
            <DropdownMenuItem className="rounded-md">
              Option 1
            </DropdownMenuItem>
            <DropdownMenuItem className="rounded-md">
              Option 2
            </DropdownMenuItem>
            <DropdownMenuItem className="rounded-md">
              Option 3
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
      code: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" className="border-0 shadow-none">
      Options <ChevronDown className="ml-2 h-4 w-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="border-0 shadow-lg bg-background/95 backdrop-blur-sm">
    <DropdownMenuItem className="rounded-md">Option 1</DropdownMenuItem>
    <DropdownMenuItem className="rounded-md">Option 2</DropdownMenuItem>
    <DropdownMenuItem className="rounded-md">Option 3</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`
    }
  ];

  const selectExamples = [
    {
      title: "Basic Select",
      description: "Standard select dropdown",
      component: (
        <Select value={selectedValue} onValueChange={setSelectedValue}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Choose an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      ),
      code: `const [selectedValue, setSelectedValue] = useState("");

<Select value={selectedValue} onValueChange={setSelectedValue}>
  <SelectTrigger className="w-[200px]">
    <SelectValue placeholder="Choose an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>`
    },
    {
      title: "Gradient Select",
      description: "Select with gradient border",
      component: (
        <Select>
          <SelectTrigger className="w-[200px] border-2 border-transparent bg-gradient-to-r from-primary to-accent p-[2px] rounded-md">
            <div className="bg-background rounded-sm px-3 py-2 w-full">
              <SelectValue placeholder="Premium Select" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="premium1">Premium Option 1</SelectItem>
            <SelectItem value="premium2">Premium Option 2</SelectItem>
            <SelectItem value="premium3">Premium Option 3</SelectItem>
          </SelectContent>
        </Select>
      ),
      code: `<Select>
  <SelectTrigger className="w-[200px] border-2 border-transparent bg-gradient-to-r from-primary to-accent p-[2px] rounded-md">
    <div className="bg-background rounded-sm px-3 py-2 w-full">
      <SelectValue placeholder="Premium Select" />
    </div>
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="premium1">Premium Option 1</SelectItem>
    <SelectItem value="premium2">Premium Option 2</SelectItem>
  </SelectContent>
</Select>`
    }
  ];

  const advancedDropdownExamples = [
    {
      title: "Checkbox Menu",
      description: "Dropdown with checkboxes",
      component: (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filters <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Notification Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={checkedItems.notifications}
              onCheckedChange={(checked) => 
                setCheckedItems(prev => ({...prev, notifications: checked as boolean}))
              }
            >
              Push Notifications
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={checkedItems.emails}
              onCheckedChange={(checked) => 
                setCheckedItems(prev => ({...prev, emails: checked as boolean}))
              }
            >
              Email Alerts
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={checkedItems.updates}
              onCheckedChange={(checked) => 
                setCheckedItems(prev => ({...prev, updates: checked as boolean}))
              }
            >
              Product Updates
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
      code: `const [checkedItems, setCheckedItems] = useState({
  notifications: true,
  emails: false,
  updates: true
});

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">
      <Filter className="mr-2 h-4 w-4" />
      Filters <ChevronDown className="ml-2 h-4 w-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuLabel>Notification Settings</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuCheckboxItem
      checked={checkedItems.notifications}
      onCheckedChange={(checked) => 
        setCheckedItems(prev => ({...prev, notifications: checked}))
      }
    >
      Push Notifications
    </DropdownMenuCheckboxItem>
  </DropdownMenuContent>
</DropdownMenu>`
    },
    {
      title: "Radio Menu",
      description: "Dropdown with radio buttons",
      component: (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Theme <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Select Theme</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={radioValue} onValueChange={setRadioValue}>
              <DropdownMenuRadioItem value="option1">Light</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="option2">Dark</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="option3">System</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
      code: `const [radioValue, setRadioValue] = useState("option1");

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">
      Theme <ChevronDown className="ml-2 h-4 w-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuLabel>Select Theme</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuRadioGroup value={radioValue} onValueChange={setRadioValue}>
      <DropdownMenuRadioItem value="option1">Light</DropdownMenuRadioItem>
      <DropdownMenuRadioItem value="option2">Dark</DropdownMenuRadioItem>
      <DropdownMenuRadioItem value="option3">System</DropdownMenuRadioItem>
    </DropdownMenuRadioGroup>
  </DropdownMenuContent>
</DropdownMenu>`
    },
    {
      title: "Nested Submenu",
      description: "Dropdown with submenus",
      component: (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Plus className="mr-2 h-4 w-4" />
              Create <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem>
              New File
            </DropdownMenuItem>
            <DropdownMenuItem>
              New Folder
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                Import
                <ChevronRight className="ml-auto h-4 w-4" />
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>From File</DropdownMenuItem>
                <DropdownMenuItem>From URL</DropdownMenuItem>
                <DropdownMenuItem>From Clipboard</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              New Project
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
      code: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">
      <Plus className="mr-2 h-4 w-4" />
      Create <ChevronDown className="ml-2 h-4 w-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuItem>New File</DropdownMenuItem>
    <DropdownMenuItem>New Folder</DropdownMenuItem>
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        Import
        <ChevronRight className="ml-auto h-4 w-4" />
      </DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        <DropdownMenuItem>From File</DropdownMenuItem>
        <DropdownMenuItem>From URL</DropdownMenuItem>
        <DropdownMenuItem>From Clipboard</DropdownMenuItem>
      </DropdownMenuSubContent>
    </DropdownMenuSub>
    <DropdownMenuSeparator />
    <DropdownMenuItem>New Project</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="secondary">Components</Badge>
          <h1 className="text-3xl font-bold text-foreground">Dropdown Lists</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Comprehensive dropdown components including menus, selects, and advanced patterns 
          with multiple styling options and interactive features.
        </p>
      </div>

      {/* Basic Dropdown Examples */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ChevronDown className="w-5 h-5" />
            Basic Dropdowns
          </CardTitle>
          <CardDescription>
            Standard dropdown menus for navigation and actions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8">
            {basicDropdownExamples.map((example, index) => (
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

      {/* Styled Dropdown Examples */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle>Styled Dropdowns</CardTitle>
          <CardDescription>
            Customized dropdowns with unique visual treatments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8">
            {styledDropdownExamples.map((example, index) => (
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

      {/* Select Examples */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle>Select Components</CardTitle>
          <CardDescription>
            Form-friendly select dropdowns with various styles
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8">
            {selectExamples.map((example, index) => (
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

      {/* Advanced Dropdown Examples */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle>Advanced Dropdowns</CardTitle>
          <CardDescription>
            Complex dropdowns with checkboxes, radio buttons, and nested menus
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8">
            {advancedDropdownExamples.map((example, index) => (
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

      {/* Real-world Example */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle>Navigation Bar Example</CardTitle>
          <CardDescription>
            Complete navigation with multiple dropdown types
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg border border-border">
            <div className="flex items-center gap-4">
              <h3 className="font-semibold">MyApp</h3>
              <nav className="flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost">
                      Products <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Web Apps</DropdownMenuItem>
                    <DropdownMenuItem>Mobile Apps</DropdownMenuItem>
                    <DropdownMenuItem>APIs</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost">
                      Resources <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Documentation</DropdownMenuItem>
                    <DropdownMenuItem>Tutorials</DropdownMenuItem>
                    <DropdownMenuItem>Blog</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </nav>
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full" />
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}