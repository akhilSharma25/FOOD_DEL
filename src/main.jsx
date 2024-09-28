import { createRoot } from 'react-dom/client';
import {App} from './App.jsx'; // Ensure 'App' is a default export
import './index.css';
import { BrowserRouter, Route } from "react-router-dom"; // Correct BrowserRouter import
import { StoreContextProvider } from './Context/StoreContext.jsx';

createRoot(document.getElementById('root')).render(
 
     <BrowserRouter>
     
    <StoreContextProvider>
    <App />
    </StoreContextProvider>
   
     
    </BrowserRouter>

);
