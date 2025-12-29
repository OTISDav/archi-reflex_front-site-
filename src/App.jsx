import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MainLayout from "./layout/MainLayout";
import { Toaster } from "react-hot-toast";


import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Appointment from "./pages/Appointment";
import Internship from "./pages/Internship";
import Contact from "./pages/Contact";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/rendez-vous" element={<Appointment />} />
        <Route path="/stage" element={<Internship />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

<Toaster
  position="top-right"
  toastOptions={{
    style: {
      background: "#111",
      color: "#fff",
    },
  }}
/>


export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <AnimatedRoutes />
      </MainLayout>
    </BrowserRouter>
  );
}
