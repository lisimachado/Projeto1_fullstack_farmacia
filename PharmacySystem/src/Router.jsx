import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import CadastroFarmacias from "./pages/CadastroFarmacia/CadastroFarmacia";
import Farmacias from "./pages/Farmacias/Farmacias";
import Medicamentos from "./pages/Medicamentos/Medicamentos"

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/CadastroFarmacias", element: <CadastroFarmacias /> },
      { path: "/Farmacias", element: <Farmacias /> },
			{ path: "/Medicamentos", element: <Medicamentos /> },

    ],
  },
]);

export default Routes;

