import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Overview from "./pages/Overview";
import Buttons from "./pages/Buttons";
import Forms from "./pages/Forms";
import Controls from "./pages/Controls";
import ProgressPage from "./pages/ProgressPage";
import Uploads from "./pages/Uploads";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  console.log("App component is rendering");
  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Overview />} />
            <Route path="buttons" element={<Buttons />} />
            {/* Placeholder routes for other component pages */}
            <Route path="dropdowns" element={<div className="text-center py-12"><h2 className="text-2xl font-bold">Dropdowns - Coming Soon</h2></div>} />
            <Route path="forms" element={<Forms />} />
            <Route path="controls" element={<Controls />} />
            <Route path="uploads" element={<Uploads />} />
            <Route path="toasts" element={<div className="text-center py-12"><h2 className="text-2xl font-bold">Toasts - Coming Soon</h2></div>} />
            <Route path="progress" element={<ProgressPage />} />
            <Route path="status" element={<div className="text-center py-12"><h2 className="text-2xl font-bold">Status Indicators - Coming Soon</h2></div>} />
            <Route path="popups" element={<div className="text-center py-12"><h2 className="text-2xl font-bold">Popups & Modals - Coming Soon</h2></div>} />
            <Route path="canvas" element={<div className="text-center py-12"><h2 className="text-2xl font-bold">Canvas & Drawing - Coming Soon</h2></div>} />
            <Route path="carousels" element={<div className="text-center py-12"><h2 className="text-2xl font-bold">Image Carousels - Coming Soon</h2></div>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
}

export default App;
