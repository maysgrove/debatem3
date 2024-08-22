/* 
PRIMARY_1 #ffa500 | SECONDARY_1 #00ccff | PRIMARY_BG: #4a4ae7 
PRIMARY_2 #ff0055   #292929                      OLD_BG #40414b;
PRIMARY_3 #adff2f                         OLD_OVERLAY rgba(0, 0, 0, 0.404);
*/


import './main.css';

// Normal Imports
import { Route, Routes } from "react-router-dom";

// Routes
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

