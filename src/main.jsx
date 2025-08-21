import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Dashboard from "./page/dashboard/Dashboard";
import Team from "./page/team/Team";
import Contacs from "./page/contacts/Contacts";
import Invoices from "./page/invoices/InvoicesBalance";
import Profile from "./page/profile/ProfileMangments";
import Calendar from "./page/calendar/Calender";
import FAQ from "./page/FAQ/FAQ";
import BarChart from "./page/barChart/BarChart";
import PieChart from "./page/PieChart/PieChart";
import LineChart from "./page/lineChart/LineChart";
import GeographyChart from "./page/geographyChart/GeographyChart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacs />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<Profile />} />
      <Route path="Calendar" element={<Calendar />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="bar" element={<BarChart />} />
      <Route path="pie" element={<PieChart />} />
      <Route path="line" element={<LineChart />} />
      <Route path="geography" element={<GeographyChart />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);