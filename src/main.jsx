
import React,{useState} from 'react'; // Import de React
import ReactDOM from 'react-dom/client'; // Import de ReactDOM client

import './index.css'


import App from './app';
import Team from './pages/team/team';
import Infos from './pages/infos/infos';
import Dashboard from './pages/dashboard/dashboard';
import Nouveau from './pages/nouveau/nouveau';
import New from './pages/nouveau/new';

import Calendar from './pages/calendar/calendar';
import Support from './pages/support/support';
import Budget from './pages/budget/budget';

import Memo from './pages/memo/memo';
import Piechart from './pages/pie/piechart';
import Barpage from './pages/barchart/barpage';
import Linechart from './pages/line/linechart';


import {
  
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/lilirosedash" element={<  App />}>
      <Route index element={<Dashboard/>} />
      <Route path="team" element={<Team />} />
      <Route path="infos" element={<Infos />} />
      <Route path="nouveau" element={<Nouveau />} />
      <Route path="new" element={<New/>} />

      <Route path="calendar" element={<Calendar />} />
      <Route path="support" element={<Support />} />
    


      <Route path="budget" element={<Budget />} />
      <Route path="memo" element={<Memo/>} />

      <Route path="piechart" element={<Piechart/>} />

      <Route path="barpage" element={<Barpage/>} />

      <Route path="linechart" element={<Linechart/>} />







    </Route>
  )
);






ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);




// render(<App />, document.getElementById('app'))
