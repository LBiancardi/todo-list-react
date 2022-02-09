import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { List } from "./pages/List";
import { Catalog } from "./pages/Catalog";
import { Checkout } from "./pages/Checkout";
import Header from "./components/Header";

export function AppRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/" element={<List />} />
      </Routes>
    </Router>
  );
}
