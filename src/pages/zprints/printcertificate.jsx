import "./print.css";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { PDFViewer } from "@react-pdf/renderer";
import NavBar from "/src/components/navbar/navbar.jsx";
import PDFCertificate from "/src/pdfdocuments/certificate.jsx";

const printcertificate = () => {
    const [values, setValues] = useState({
        name: "Abby Kent",
        age: 7
    })
  return (
  <>
    <NavBar />
    <section className="all_sections">
        <PDFViewer className="pr_pdfview" width={1200} height={700}>
            <PDFCertificate name="Abby Kent" age={values.age}/>
        </PDFViewer>
    </section>
  </>
  )
}

export default printcertificate;