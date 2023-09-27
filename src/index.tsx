import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode >
    <div className="">
      <div className="h-20 grid place-content-center bg-indigo-900 text-gray-50">
        <h1 className="text-2xl">Hello, world. Learn how to code</h1>
      </div>
      <Home />  
    </div>
  </React.StrictMode>
);

