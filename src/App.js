import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import CustomerNavigation from "./pages/CustomerNavigation";
import ProductAnalytics from "./pages/ProductAnalytics";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Dashboard />} />
          <Route path="customer-navigation" element={<CustomerNavigation />} />
          <Route path="product-analytics" element={<ProductAnalytics />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <Dashboard />
    // </div>
  );
}

export default App;
