import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Home }  from "./pages/Home/Home";
import { CadFarmacias } from './pages/CadFarmacias/CadFarmacias';
import { Cadastro } from './pages/Cadastro/Cadastro';
import { Farmacias } from "./pages/Farmacias/Farmacias";
import { Medicamentos } from "./pages/Medicamentos/Medicamentos";
import { PgCadFarmacias } from "./pages/PgCadFarmacias/PgCadFarmacias";
import { PgCadMedicamentos } from "./pages/PgCadMedicamentos/PgCadMedicamentos";

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
			{ path: '/cadfarmacias', element: <CadFarmacias/> },
			{ path: '/farmacias', element: <Farmacias /> },
			{ path: '/medicamentos', element: <Medicamentos /> },
			{ path: '/cadastro', element: <Cadastro/>},
			{ path: '/cadastronovafarmacia', element: <PgCadFarmacias/>},
			{ path: '/cadastronovomedicamento', element: <PgCadMedicamentos/>},


			
    ],
  },
]);