import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar } from './components';
import {
  AboutPage,
  AuthWrapper,
  CartPage,
  CheckoutPage,
  HomePage,
  PrivateRoute,
  ProductsPage,
  SingleProductPage,
} from './pages';

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='products' element={<ProductsPage />} />
          <Route path='products/:id' element={<SingleProductPage />} />
          <Route
            path='checkout'
            element={
              <PrivateRoute>
                <CheckoutPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthWrapper>
  );
}

export default App;
