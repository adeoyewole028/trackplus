import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Registration from "../pages/auth/Registration";
import Register from "../pages/auth/Register";
import EmailVerification from "../pages/auth/EmailVerification";
import Layout from "../components/layouts/MainLayout";
import Business from "../pages/dashboard/Business";
import Upload from "../pages/dashboard/Upload";
import Review from "../pages/dashboard/Review";

function NavigationRoutes() {
  const getToken = true;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/registration" element={<Registration />} />

        {getToken ? (
          <>
            <Route path="/business-Information/" element={<Layout />}>
              <Route index element={<Business />} />
              <Route path="upload-document" element={<Upload />} />
              <Route path="review-document" element={<Review />} />
            </Route>
          </>
        ) : (
          <Route path="/*" element={<Navigate to="/" />} />
        )}
      </Routes>
    </Router>
  );
}

export default NavigationRoutes;
