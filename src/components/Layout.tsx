import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export function Layout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-16 items-center justify-between px-6">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
                <div className="hidden md:block">
                  <h1 className="text-lg font-semibold text-foreground">React Component Library</h1>
                  <p className="text-sm text-muted-foreground">Beautiful, reusable components for modern React apps</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    <span className="hidden sm:inline-block">GitHub</span>
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://docs.example.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    <span className="hidden sm:inline-block">Docs</span>
                  </a>
                </Button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            <div className="container mx-auto px-6 py-8">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}