import { Routes, Route } from "react-router-dom";
import ScrollManager from "./components/ScrollManager";
import Portfolio, { PortfolioNav, PortfolioFooter, ScrollEffects, Standalone, ProjectDetail, MissingPage } from "./pages/Portfolio";
export default function App(){
 return <><a href="#main" className="skip-link">Skip to content</a><ScrollManager/><ScrollEffects/><PortfolioNav/><main id="main"><Routes><Route path="/" element={<Portfolio/>}/><Route path="/about" element={<Standalone section="about"/>}/><Route path="/work" element={<Standalone section="work"/>}/><Route path="/contact" element={<Standalone section="contact"/>}/><Route path="/work/:slug" element={<ProjectDetail/>}/><Route path="*" element={<MissingPage/>}/></Routes></main><PortfolioFooter/></>;
}
