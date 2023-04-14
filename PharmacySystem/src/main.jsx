import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import Routes from "./Router"


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider Router={Routes} />
	
);
