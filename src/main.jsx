import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";

const Dashboard = React.lazy(() => import("./page/dashboard/Dashboard"));
const Team = React.lazy(() => import("./page/team/Team"));
const Contacs = React.lazy(() => import("./page/contacts/Contacts"));
const Invoices = React.lazy(() => import("./page/invoices/InvoicesBalance"));
const Profile = React.lazy(() => import("./page/profile/ProfileMangments"));
const Calendar = React.lazy(() => import("./page/calendar/Calender"));
const FAQ = React.lazy(() => import("./page/FAQ/FAQ"));
const BarChart = React.lazy(() => import("./page/barChart/BarChart"));
const PieChart = React.lazy(() => import("./page/PieChart/PieChart"));
const LineChart = React.lazy(() => import("./page/lineChart/LineChart"));
const GeographyChart = React.lazy(() => import("./page/geographyChart/GeographyChart"));
const NotFound = React.lazy(() => import("./page/notfound/NotFound"));

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
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<div style={{padding:20}}>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);