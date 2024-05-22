import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Admin from "./pages/Admin";
import Detail from "./pages/Detail";
import Basket from "./pages/Basket";
import Wishlist from "./pages/Wishlist";
import MainLayout from './layout/MainLayout';
import { HelmetProvider } from 'react-helmet-async';
function App() {

  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/add" element={<Add />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/basket" element={<Basket />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  )
}

export default App
