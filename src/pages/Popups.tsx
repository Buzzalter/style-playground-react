import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Settings, User, Calendar, Info, Trash2, Edit, Share, Plus, X, ExternalLink, MessageSquare } from "lucide-react";
import { toast } from "sonner";

export default function Popups() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Code copied to clipboard!");
  };

  const dialogExamples = [
    {
      title: "Basic Dialog",
      description: "Simple modal dialog",
      component: (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Basic Dialog</DialogTitle>
              <DialogDescription>
                This is a simple dialog example with header and content.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p className="text-sm text-muted-foreground">
                Dialog content goes here. You can add any components or text.
              </p>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ),
      code: `<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Basic Dialog</DialogTitle>
      <DialogDescription>
        This is a simple dialog example with header and content.
      </DialogDescription>
    </DialogHeader>
    <div className="py-4">
      <p className="text-sm text-muted-foreground">
        Dialog content goes here.
      </p>
    </div>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`
    },
    {
      title: "Form Dialog",
      description: "Dialog with form inputs",
      component: (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="gradient">
              <Plus className="w-4 h-4 mr-2" />
              Create New
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create New Item</DialogTitle>
              <DialogDescription>
                Fill out the form below to create a new item.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">Name</Label>
                <Input id="name" className="col-span-3" placeholder="Enter name..." />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">Email</Label>
                <Input id="email" type="email" className="col-span-3" placeholder="Enter email..." />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="message" className="text-right">Message</Label>
                <Textarea id="message" className="col-span-3" placeholder="Enter message..." />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button variant="gradient">Create</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ),
      code: `<Dialog>
  <DialogTrigger asChild>
    <Button variant="gradient">
      <Plus className="w-4 h-4 mr-2" />
      Create New
    </Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Create New Item</DialogTitle>
      <DialogDescription>
        Fill out the form below to create a new item.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">Name</Label>
        <Input id="name" className="col-span-3" />
      </div>
      <!-- More form fields -->
    </div>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button variant="gradient">Create</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`
    },
    {
      title: "Styled Dialog",
      description: "Dialog with custom gradient styling",
      component: (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline-gradient">Premium Dialog</Button>
          </DialogTrigger>
          <DialogContent className="border-2 border-primary/20 bg-gradient-to-br from-background to-muted shadow-2xl">
            <DialogHeader>
              <DialogTitle className="text-gradient">Premium Features</DialogTitle>
              <DialogDescription>
                Unlock advanced features with our premium plan.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Settings className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Advanced Settings</h4>
                  <p className="text-sm text-muted-foreground">Access all configuration options</p>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Maybe Later</Button>
              <Button variant="gradient">Upgrade Now</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ),
      code: `<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline-gradient">Premium Dialog</Button>
  </DialogTrigger>
  <DialogContent className="border-2 border-primary/20 bg-gradient-to-br from-background to-muted shadow-2xl">
    <DialogHeader>
      <DialogTitle className="text-gradient">Premium Features</DialogTitle>
      <DialogDescription>
        Unlock advanced features with our premium plan.
      </DialogDescription>
    </DialogHeader>
    <!-- Content with gradient styling -->
    <DialogFooter>
      <Button variant="outline">Maybe Later</Button>
      <Button variant="gradient">Upgrade Now</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`
    }
  ];

  const alertDialogExamples = [
    {
      title: "Delete Confirmation",
      description: "Destructive action alert",
      component: (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">
              <Trash2 className="w-4 h-4 mr-2" />
              Delete Item
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the item
                and remove all associated data.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      ),
      code: `<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">
      <Trash2 className="w-4 h-4 mr-2" />
      Delete Item
    </Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete the item.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
        Delete
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`
    }
  ];

  const sheetExamples = [
    {
      title: "Settings Sheet",
      description: "Side panel for settings",
      component: (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Settings</SheetTitle>
              <SheetDescription>
                Configure your preferences and account settings.
              </SheetDescription>
            </SheetHeader>
            <div className="space-y-6 py-6">
              <div className="space-y-2">
                <Label>Display Name</Label>
                <Input placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <Label>Bio</Label>
                <Textarea placeholder="Tell us about yourself" />
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1">Cancel</Button>
              <Button className="flex-1">Save Changes</Button>
            </div>
          </SheetContent>
        </Sheet>
      ),
      code: `<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">
      <Settings className="w-4 h-4 mr-2" />
      Settings
    </Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Settings</SheetTitle>
      <SheetDescription>
        Configure your preferences and account settings.
      </SheetDescription>
    </SheetHeader>
    <!-- Form content -->
    <div className="flex gap-2">
      <Button variant="outline" className="flex-1">Cancel</Button>
      <Button className="flex-1">Save Changes</Button>
    </div>
  </SheetContent>
</Sheet>`
    }
  ];

  const popoverExamples = [
    {
      title: "Info Popover",
      description: "Quick info display",
      component: (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">
              <Info className="w-4 h-4 mr-2" />
              Info
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-semibold">Additional Information</h4>
              <p className="text-sm text-muted-foreground">
                This popover contains helpful information about the feature. 
                You can include any content here.
              </p>
              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline">Learn More</Button>
                <Button size="sm">Got it</Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      ),
      code: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline" size="sm">
      <Info className="w-4 h-4 mr-2" />
      Info
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="space-y-2">
      <h4 className="font-semibold">Additional Information</h4>
      <p className="text-sm text-muted-foreground">
        This popover contains helpful information.
      </p>
      <div className="flex gap-2 pt-2">
        <Button size="sm" variant="outline">Learn More</Button>
        <Button size="sm">Got it</Button>
      </div>
    </div>
  </PopoverContent>
</Popover>`
    }
  ];

  const hoverCardExamples = [
    {
      title: "User Profile Card",
      description: "Hover to see profile",
      component: (
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="ghost" className="p-0 h-auto">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">@johndoe</span>
              </div>
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@johndoe</h4>
                <p className="text-sm">Full-stack developer passionate about React and TypeScript.</p>
                <div className="flex items-center pt-2">
                  <Calendar className="mr-2 h-4 w-4 opacity-70" />
                  <span className="text-xs text-muted-foreground">
                    Joined December 2021
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      ),
      code: `<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="ghost" className="p-0 h-auto">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-primary rounded-full">
          <User className="w-4 h-4 text-white" />
        </div>
        <span className="font-medium">@johndoe</span>
      </div>
    </Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="space-y-1">
      <h4 className="text-sm font-semibold">@johndoe</h4>
      <p className="text-sm">Full-stack developer passionate about React.</p>
      <div className="flex items-center pt-2">
        <Calendar className="mr-2 h-4 w-4 opacity-70" />
        <span className="text-xs text-muted-foreground">
          Joined December 2021
        </span>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="secondary">Components</Badge>
          <h1 className="text-3xl font-bold text-foreground">Popups & Modals</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Comprehensive modal dialogs, sheets, popovers, and overlay components with 
          beautiful pastel red styling and interactive features.
        </p>
      </div>

      {/* Dialog Examples */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Modal Dialogs
          </CardTitle>
          <CardDescription>
            Full-screen modal dialogs for forms and content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8">
            {dialogExamples.map((example, index) => (
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

      {/* Alert Dialog Examples */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle>Alert Dialogs</CardTitle>
          <CardDescription>
            Confirmation dialogs for important actions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8">
            {alertDialogExamples.map((example, index) => (
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

      {/* Sheet Examples */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle>Side Sheets</CardTitle>
          <CardDescription>
            Slide-out panels for secondary content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8">
            {sheetExamples.map((example, index) => (
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

      {/* Popover Examples */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle>Popovers</CardTitle>
          <CardDescription>
            Small overlay panels for quick actions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8">
            {popoverExamples.map((example, index) => (
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

      {/* Hover Card Examples */}
      <Card className="card-elegant">
        <CardHeader>
          <CardTitle>Hover Cards</CardTitle>
          <CardDescription>
            Hover-triggered information cards
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8">
            {hoverCardExamples.map((example, index) => (
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
    </div>
  );
}