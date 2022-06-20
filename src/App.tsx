import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CartProvider from './Context/CartContext';
import { HomePage } from './Home/HomePage';
import { Welcome } from './Home/Welcome';

export const App: React.FunctionComponent = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<HomePage/>} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};
