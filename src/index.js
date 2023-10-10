import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import AllJobsApiProvider from "./contexts/AllJobsApiContext";
import DepartmentApiProvider from "./contexts/DepartmentApiContext";
import LocationApiProvider from "./contexts/LocationApiContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AllJobsApiProvider>
      <DepartmentApiProvider>
        <LocationApiProvider>
            <BrowserRouter>
              <HeaderComponent/>
              <Routes>
                {/* Route for homepage: */}
                <Route path="/" element={<App />} />
                {/* Add another route here for job page based on id: */}
                {/* Redirects invalid paths to the homepage: */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </BrowserRouter>
        </LocationApiProvider>
      </DepartmentApiProvider>
    </AllJobsApiProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
