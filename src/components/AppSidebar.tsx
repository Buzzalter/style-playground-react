import { NavLink, useLocation } from "react-router-dom";
import { 
  MousePointer2, 
  ChevronDown, 
  FormInput, 
  Sliders, 
  Upload, 
  Bell, 
  Loader, 
  Activity, 
  Square as Popup, 
  Palette,
  Image as ImageIcon,
  Menu
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Overview", url: "/", icon: Menu },
  { title: "Buttons", url: "/buttons", icon: MousePointer2 },
  { title: "Dropdowns", url: "/dropdowns", icon: ChevronDown },
  { title: "Form Fields", url: "/forms", icon: FormInput },
  { title: "Sliders & Toggles", url: "/controls", icon: Sliders },
  { title: "File Uploads", url: "/uploads", icon: Upload },
  { title: "Toasts", url: "/toasts", icon: Bell },
  { title: "Progress & Spinners", url: "/progress", icon: Loader },
  { title: "Status Indicators", url: "/status", icon: Activity },
  { title: "Popups & Modals", url: "/popups", icon: Popup },
  { title: "Canvas & Drawing", url: "/canvas", icon: Palette },
  { title: "Image Carousels", url: "/carousels", icon: ImageIcon },
];

export function AppSidebar() {
  console.log("AppSidebar component is rendering");
  const sidebarState = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavClasses = (active: boolean) =>
    active 
      ? "bg-gradient-primary text-primary-foreground font-medium shadow-md" 
      : "hover:bg-muted/50 hover:text-foreground transition-all duration-200";

  const isCollapsed = sidebarState?.state === "collapsed";

  return (
    <Sidebar className={isCollapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-card border-r border-border">
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-3">
            {!isCollapsed && (
              <>
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Palette className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-semibold text-foreground">Component Library</h2>
                  <p className="text-xs text-muted-foreground">React Showcase</p>
                </div>
              </>
            )}
          </div>
        </div>

        <SidebarGroup className="px-2 py-4">
          <SidebarGroupLabel className={isCollapsed ? "sr-only" : "text-muted-foreground font-medium mb-2"}>
            Components
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={({ isActive }) => getNavClasses(isActive)}
                    >
                      <item.icon className="w-4 h-4 shrink-0" />
                      {!isCollapsed && <span className="truncate">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}