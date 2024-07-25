import React from "react";
import Login from "../src/pages/login/login.jsx";
import Dashboard from "./pages/dashboard/dashboard.jsx";
import Residents from "./pages/residents/residents.jsx";
import Documents from "./pages/documents/documents.jsx";
import ProtectedRoute from "./utils/ProtectedRoutes.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Certificate from "./pages/zcertificate/zcertificate.jsx";
import PrintCertificate from "./pages/zprints/printcertificate.jsx";

function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />}></Route>
          
          <Route element={<ProtectedRoute />}>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/documents' element={<Documents />}></Route>
            <Route path='/residents' element={<Residents />}></Route>
            <Route path='/bg-certificate' element={<Certificate />}></Route>
            <Route path='/printcertificate/:id' element={<PrintCertificate />}></Route>
          </Route>
          
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
