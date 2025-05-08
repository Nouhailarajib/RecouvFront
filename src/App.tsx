
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./components/Layout/MainLayout";
import Index from "./pages/Index";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Creances from "./pages/Creances";
import DetailsCreance from "./pages/creances/DetailsCreance";
import NouvelleCreance from "./pages/creances/NouvelleCreance";
import Reglements from "./pages/Reglements";
import DetailsReglement from "./pages/reglements/DetailsReglement";
import NouveauReglement from "./pages/reglements/NouveauReglement";
import Relances from "./pages/Relances";
import DetailsRelance from "./pages/relances/DetailsRelance";
import NouvelleRelance from "./pages/relances/NouvelleRelance";
import Clients from "./pages/Clients";
import DetailsClient from "./pages/clients/DetailsClient";
import NouveauClient from "./pages/clients/NouveauClient";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
      
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          
          <Route path="/" element={<MainLayout />}>
            
            <Route index element={<Navigate replace to="/dashboard" />} />

            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />

            <Route path="creances">
              <Route index element={<Creances />} />
              <Route path="nouveau" element={<NouvelleCreance />} />
              <Route path=":id" element={<DetailsCreance />} />
            </Route>

            <Route path="reglements">
              <Route index element={<Reglements />} />
              <Route path="nouveau" element={<NouveauReglement />} />
              <Route path=":id" element={<DetailsReglement />} />
            </Route>

            <Route path="relances">
              <Route index element={<Relances />} />
              <Route path="nouveau" element={<NouvelleRelance />} />
              <Route path=":id" element={<DetailsRelance />} />
            </Route>

            <Route path="clients">
              <Route index element={<Clients />} />
              <Route path="nouveau" element={<NouveauClient />} />
              <Route path=":id" element={<DetailsClient />} />
            </Route>
          </Route>

          {/* Catch-all → page de login */}
          <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
