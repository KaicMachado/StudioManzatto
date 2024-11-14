import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Servicos from "./components/Servicos.jsx";
import Informacoes from "./components/Informacoes.jsx";

createRoot(document.getElementById("root")).render(
 <StrictMode>
  <Navbar />
  <Header />
  <Servicos />
  <Informacoes />
 </StrictMode>
);
