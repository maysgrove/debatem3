import './main.css';

import { Route, Routes } from "react-router-dom";

import { Dashboard } from "./Pages/Dashboard";
import { ErrorPage } from "./Pages/ErrorPage";
import LandingPage from "./Pages/LandingPage";


export const App = () => {
  return (
  <div id="BACKGROUND">
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
  </div>
  );
}

