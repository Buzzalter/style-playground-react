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
import Dropdowns from "./pages/Dropdowns";
import Toasts from "./pages/Toasts";
import StatusPage from "./pages/StatusPage";
import Popups from "./pages/Popups";
import CanvasPage from "./pages/CanvasPage";
import Carousels from "./pages/Carousels";
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
            <Route path="dropdowns" element={<Dropdowns />} />
            <Route path="forms" element={<Forms />} />
            <Route path="controls" element={<Controls />} />
            <Route path="uploads" element={<Uploads />} />
            <Route path="toasts" element={<Toasts />} />
            <Route path="progress" element={<ProgressPage />} />
            <Route path="status" element={<StatusPage />} />
            <Route path="popups" element={<Popups />} />
            <Route path="canvas" element={<CanvasPage />} />
            <Route path="carousels" element={<Carousels />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
}

export default App;
