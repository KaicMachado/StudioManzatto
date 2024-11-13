import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Servicos from "./components/Servicos.jsx";

createRoot(document.getElementById("root")).render(
 <StrictMode>
  <Navbar />
  <Header />
  <Servicos />
 </StrictMode>
);
