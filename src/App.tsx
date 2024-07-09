// Normal Imports
import { Route, Routes } from "react-router-dom";

// Routes
import { Homepage } from "./Pages/Homepage/HomePage";
import AdminPage from "./Pages/Adminpage/AdminPage";
import { ErrorPage } from "./components/OneOffComponents/ErrorPage";

export const App = () => {
  return (
      <div id="BACKGROUND">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/AdminPage" element={<AdminPage />} />
			 <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
  );
}

