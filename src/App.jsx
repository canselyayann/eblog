import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Category from './Components/Category';
import Lifestyle from './Components/Lifestyle';
import Mail from './Components/Mail';
import Footer from './Components/Footer';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} /> {/* Route path'ini küçük harfle yazın */}
        <Route path="/signup" element={<SignUp />} /> {/* Route path'ini küçük harfle yazın */}
      </Routes>
      <Category />
      <Lifestyle />
      <Mail />
      <Footer />
      
    </>
  );
}

export default App;
