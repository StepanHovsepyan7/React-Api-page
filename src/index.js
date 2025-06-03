import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Single from './Single';

const Root = () => {
  const [inpValue, setInpValue] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout inpValue={inpValue} setValue={setInpValue} />}>
          <Route index element={<App inpValue={inpValue} />} />
          <Route path="/products" element={<App inpValue={inpValue} />} />
          <Route path='/products/:id' element={<Single />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);

