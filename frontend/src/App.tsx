
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Learn from "./pages/Learn";
import MongoDBLearn from "./pages/MongoDBLearn";
import ExpressLearn from "./pages/ExpressLearn";
import ReactLearn from "./pages/ReactLearn";
import NodeLearn from "./pages/NodeLearn";
import DSAQuestions from "./pages/DSAQuestions";
import Playground from "./pages/Playground";
import NotFound from "./pages/NotFound";
import ChatBot from "./components/ChatBot";
import Community from "./pages/Community";
import Developers from "./pages/Developers";
import DSATheory from "./pages/DSATheory";
import ChatBotPage from "./pages/ChatBotPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/mongodb" element={<MongoDBLearn />} />
          <Route path="/learn/express" element={<ExpressLearn />} />
          <Route path="/learn/react" element={<ReactLearn />} />
          <Route path="/learn/nodejs" element={<NodeLearn />} />
          <Route path="/dsa-questions" element={<DSAQuestions />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/community" element={<Community />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/dsa-theory" element={<DSATheory />} />
          <Route path="/chatbot" element={<ChatBotPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatBot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
