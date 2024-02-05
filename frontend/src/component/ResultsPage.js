// // ResultsPage.js
// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import SearchPage2 from "./SearchPage2";

// function ResultsPage() {
//   const { searchId } = useParams();
//   const [personDetails, setPersonDetails] = useState([]);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const formatDateRange = (startDate, endDate) => {
//     const startDateFormat = new Date(startDate).toLocaleDateString();
//     const endDateFormat = new Date(endDate).toLocaleDateString();
//     return `${startDateFormat} - ${endDateFormat}`;
//   };
//   const handleBack = () => {
//     // Navigate back to the search page and reset searchId
//     navigate("/");
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // const response = await axios.get(
//         //   `http://localhost:3000/api/persons/${searchId}`
//         // );
//         const response = await axios.get(
//           `/api/persons/${searchId}`
//         );
//         console.log("response",response.data);
//         setPersonDetails(response.data);
//         console.log("respo", [response.data]);
//         setError(null);
//       } catch (error) {
//         setPersonDetails([]);
//         setError("Person not found");
//       }
//     };

//     fetchData();
//   }, [searchId]);

//   return (
//     <div>
//       {error && <p>{error}</p>}

//       {personDetails && (
//         <div>
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <button onClick={handleBack} style={{ marginRight: "10px" }}>
//               {"←"}
//             </button>

//             <h2 className="extraheading" style={{ flexGrow: 1 }}>Assignment Tracker</h2>
//           </div>
//           <div className="maindetails" style={{ display: "flex", alignItems: "center" }}>
//             <div className="persondetails">
//             <div className="extraspace">PS NO : {personDetails.PS_NO}</div>
//             <div className="extraspace"
//               style={{
//                 marginLeft: "10px",
//               }}
//             >
//               Name : {personDetails.Name}
//             </div>
//             <div className="extraspace"
//               style={{
//                 marginLeft: "10px",
//               }}
//             >
//               Grade : {personDetails.Grade}
//             </div>
//             </div>
//             <div
//               style={{
//                 alignItems: "center",
//                 display: "flex",
//                 marginRight: "10px",
//                 marginLeft: "553px",
//               }}
//             >
//               <SearchPage2 />
//             </div>
//           </div>
//           <table>
//             <thead>
//               <tr className="headingcol">
//                 <th>PS NO</th>
//                 <th>Name</th>
//                 <th>Grade</th>
//                 <th style={{ width: "0%" }}>Dept BU</th>
//                 <th style={{ width: "0%" }}>Billed Status</th>
//                 <th>Customer Name</th>
//                 <th>Project Id</th>
//                 <th>Project Name</th>
//                 <th>Duration</th>
//               </tr>
//             </thead>
//             <tbody >
//               {personDetails.length>0 && personDetails.map((personDetails1,index) =>(
//               <tr key={index} className="trdetails">
//                 <td>{personDetails1.PS_NO}</td>
//                 <td>{personDetails1.Name}</td>
//                 <td>{personDetails1.Grade}</td>
//                 <td>{personDetails1["Dept BU"]}</td>
//                 <td>{personDetails1["Billed status"]}</td>
//                 <td>{personDetails1["Customer Name"]}</td>
//                 <td>{personDetails1["Project ID"]}</td>
//                 <td>{personDetails1["Proj Name"]}</td>
//                 <td>
//                   {formatDateRange(
//                     personDetails1["Start Date"],
//                     personDetails1["End Date"]
//                   )}
//                 </td>
//               </tr>
//              ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ResultsPage;

// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import SearchPage2 from "./SearchPage2";

// function ResultsPage() {
//   const { searchId } = useParams();
//   const [personDetails, setPersonDetails] = useState(null);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const formatDateRange = (startDate, endDate) => {
//     const startDateFormat = new Date(startDate).toLocaleDateString();
//     const endDateFormat = new Date(endDate).toLocaleDateString();
//     return `${startDateFormat} - ${endDateFormat}`;
//   };
//   const handleBack = () => {
//     // Navigate back to the search page and reset searchId
//     navigate("/");
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // const response = await axios.get(
//         //   `http://localhost:5000/api/persons/${searchId}`
//         // );
//         const response = await axios.get(
//           `/api/persons/${searchId}`
//         );

//         setPersonDetails(response.data);
//         console.log(response);
//         setError(null);
//       } catch (error) {
//         setPersonDetails(null);
//         setError("Person not found");
//       }
//     };

//     fetchData();
//   }, [searchId]);

//   console.log(personDetails);

//   return (
//     <div>
//       <div className="maindetails">
//       {error && <p>{error}</p>}
//       {personDetails && (
//         <div>
//           <div style={{ display: "flex", alignItems: "center" }}>
//             <button onClick={handleBack} style={{ marginRight: "10px" }}>
//               {"←"}
//             </button>
//             <h2 className="extraheading" style={{ flexGrow: 1 }}>Assignment Tracker</h2>
//           </div>

//         {/* { personDetails.map(persondetails=>( */}
//           <div  style={{ display: "flex", alignItems: "center" }}>
//             <div className="persondetails">
//             <div className="extraspace">PS NO : {personDetails[0].PS_NO}</div>
//             <div className="extraspace"
//               style={{
//                 marginLeft: "10px",
//               }}
//             >
//               Name : {personDetails[0].Name}
//             </div>
//             <div className="extraspace"
//               style={{
//                 marginLeft: "10px",
//               }}
//             >
//               Grade : {personDetails[0].Grade}
//             </div>
//             </div>
//             <div
//               style={{
//                 alignItems: "center",
//                 display: "flex",
//                 marginRight: "10px",
//                 marginLeft: "553px",
//               }}
//             >
//               <SearchPage2 />
//             </div>
//           </div>
//         {/* ))} */}
//           <table>
//             <thead>
//               <tr className="headingcol">
//                 <th>PS NO</th>
//                 <th>Name</th>
//                 <th>Grade</th>
//                 <th style={{ width: "0%" }}>Dept BU</th>
//                 <th style={{ width: "0%" }}>Billed Status</th>
//                 <th>Customer Name</th>
//                 <th>Project Id</th>
//                 <th>Project Name</th>
//                 <th>Duration</th>
//               </tr>
//             </thead>
//             <tbody>
//             {personDetails.length>0 && personDetails.map((personDetails)=>
//               <tr className="trdetails">
//                 <td>{personDetails.PS_NO}</td>
//                 <td>{personDetails.Name}</td>
//                 <td>{personDetails.Grade}</td>
//                 <td>{personDetails["Dept BU"]}</td>
//                 <td>{personDetails["Billed status"]}</td>
//                 <td>{personDetails["Customer Name"]}</td>
//                 <td>{personDetails["Project ID"]}</td>
//                 <td>{personDetails["Proj Name"]}</td>
//                 <td>
//                   {formatDateRange(
//                     personDetails["Start Date"],
//                     personDetails["End Date"]
//                   )}
//                 </td>
//               </tr>
//             )}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//     </div>
//   );
// }

// export default ResultsPage;

// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import SearchPage2 from "./SearchPage2";
// import * as XLSX from "xlsx";

// function ResultsPage() {
//   const { searchId } = useParams();
//   const [personDetails, setPersonDetails] = useState(null);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const convertToExcel = () => {
//     const data = [Object.keys(personDetails[0])].concat(
//       personDetails.map((person) => Object.values(person))
//     );

//     const ws = XLSX.utils.aoa_to_sheet(data);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

//     XLSX.writeFile(wb, "personDetails.xlsx");
//   };

//   const formatDateRange = (startDate, endDate) => {
//     const startDateFormat = new Date(startDate).toLocaleDateString();
//     const endDateFormat = new Date(endDate).toLocaleDateString();
//     return `${startDateFormat} - ${endDateFormat}`;
//   };
//   const handleBack = () => {
//     // Navigate back to the search page and reset searchId
//     navigate("/");
//   };

//   const handleView = (id) => {
//     navigate(`/results/view/${id}`);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // const response = await axios.get(
//         //   `http://localhost:5000/api/persons/${searchId}`
//         // );
//         const response = await axios.get(`/api/persons/${searchId}`);

//         setPersonDetails(response.data);
//         console.log(response);
//         setError(null);
//       } catch (error) {
//         setPersonDetails(null);
//         setError("Person not found");
//       }
//     };

//     fetchData();
//   }, [searchId]);

//   console.log(personDetails);

//   return (
//     // <div>
//     <div className="maindetails">
//       {/* <button onClick={convertToExcel}>Download Excel</button> */}
//       {error && <p>{error}</p>}
//       {personDetails && (
//         <div>
//           <div className="searchback">
//             <button onClick={handleBack}>{"←"}</button>
//             <h2 className="extraheading">Assignment Tracker</h2>
//           </div>
//           {/* { personDetails.map((personDetails)=>( */}
//           <div>
//             <div className="persondetails">
//               <div className="extraspace">PS NO : {personDetails[0].PS_NO}</div>
//               <div className="extraspace">Name : {personDetails[0].Name}</div>
//               <div className="extraspace">Grade : {personDetails[0].Grade}</div>
//               <div className="searchdetailspage">
//                 <SearchPage2 />
//               </div>
//             </div>
//           </div>
//           {/* ))} */}
//           <table>
//             <thead>
//               <tr className="headingcol">
//                 <th>PS NO</th>
//                 <th>Name</th>
//                 <th>Grade</th>
//                 <th>Dept BU</th>
//                 <th>Billed Status</th>
//                 <th>Customer Name</th>
//                 <th>Project Id</th>
//                 <th>Project Name</th>
//                 <th>Duration</th>
//                 {/* <th>View All</th> */}
//               </tr>
//             </thead>
//             <tbody>
//               {personDetails.length > 0 &&
//                 personDetails.map((personDetails) => (
//                   <tr className="trdetails">
//                     <td>{personDetails.PS_NO}</td>
//                     <td>{personDetails.Name}</td>
//                     <td>{personDetails.Grade}</td>
//                     <td>{personDetails["Dept BU"]}</td>
//                     <td>{personDetails["Billed status"]}</td>
//                     <td>{personDetails["Customer Name"]}</td>
//                     <td>{personDetails["Project ID"]}</td>
//                     <td>{personDetails["Proj Name"]}</td>
//                     <td>
//                       {formatDateRange(
//                         personDetails["Start Date"],
//                         personDetails["End Date"]
//                       )}
//                     </td>
//                     {/* <td>
//                       {" "}
//                       <i
//                         onClick={() => handleView(personDetails.PS_NO)}
//                         className="fa-solid fa-eye"
//                         style={{
//                           color: "blue",
//                           margin: "0 1rem",
//                           cursor: "pointer",
//                         }}
//                       ></i>
//                     </td> */}
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ResultsPage;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import SearchPage2 from "./SearchPage2";
import * as XLSX from "xlsx";

function ResultsPage() {
  const { searchId } = useParams();
  const [personDetails, setPersonDetails] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const convertToExcel = () => {
    const data = [Object.keys(personDetails[0])].concat(
      personDetails.map((person) => Object.values(person))
    );

    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    XLSX.writeFile(wb, "personDetails.xlsx");
  };

  const [showAdditionalColumns, setShowAdditionalColumns] = useState(false);

  const toggleAdditionalColumns = () => {
    setShowAdditionalColumns((prev) => !prev);
  };

  const formatDateRange = (startDate, endDate) => {
    const startDateFormat = new Date(startDate).toLocaleDateString();
    const endDateFormat = new Date(endDate).toLocaleDateString();
    return `${startDateFormat} - ${endDateFormat}`;
  };
  const handleBack = () => {
    // Navigate back to the search page and reset searchId
    navigate("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get(
        //   `http://localhost:5000/api/persons/${searchId}`
        // );
        const response = await axios.get(`/api/persons/${searchId}`);

        setPersonDetails(response.data);
        console.log(response);
        setError(null);
      } catch (error) {
        setPersonDetails(null);
        setError("Person not found");
      }
    };

    fetchData();
  }, [searchId]);

  console.log(personDetails);

  return (
    // <div>
    <div className="maindetails">
     
      
      {/* <button onClick={convertToExcel}>Download Excel</button> */}
      <button className="downlode-section" onClick={convertToExcel}>Download Excel</button>
      {error && <p>{error}</p>}
      {personDetails && (
        <div>
          <div className="searchback">
            <button onClick={handleBack}>{<svg className="arrowkey" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M4.78125 11.25L11.7812 18.25L10 20L0 10L10 0L11.7812 1.75L4.78125 8.75H20V11.25H4.78125Z" fill="#363636"/>
</svg>}</button>
            
            <h2 className="extraheading">Assignment Tracker</h2>
          </div>
          {/* { personDetails.map((personDetails)=>( */}
          <div>
            <div className="persondetails">
              <div className="extraspace"><strong>PS NO : </strong>{personDetails[0].PS_NO}</div>
              <div className="extraspace"><strong>Name : </strong>{personDetails[0].Name}</div>
              <div className="extraspace"><strong>Grade : </strong>{personDetails[0].Grade}</div>
              <div className="searchdetailspage">
                <SearchPage2 />
              </div>
              
            </div>
            {/* <button className="downlode-section" onClick={convertToExcel}>Download Excel</button> */}

          </div>


          <button className="showdetails-section" onClick={toggleAdditionalColumns}>
            {showAdditionalColumns
              ? "Hide Additional Columns"
              : "Show Additional Columns"}
          </button>


          {/* ))} */}
          <table>
            <thead>
              <tr className="headingcol">
                <th>BU</th>
                <th>Base Location</th>
                <th>Dept BU</th>
                <th>Billed Status</th>
                <th>Customer Name</th>
                <th>Project Id</th>
                <th>Project Name</th>
                <th>Duration</th>
                {showAdditionalColumns && (
                  <>
                    <th>Exp in L&T (Yrs)</th>
                    <th>Total Exp (Yrs)</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>IRM</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {personDetails.length > 0 &&
                personDetails.map((personDetails) => (
                  <tr className="trdetails">
                    <td>{personDetails.BU}</td>
                    <td>{personDetails["Base Loc"]}</td>
                    <td>{personDetails["Dept BU"]}</td>
                    <td>{personDetails["Billed status"]}</td>
                    <td>{personDetails["Customer Name"]}</td>
                    <td>{personDetails["Project ID"]}</td>
                    <td>{personDetails["Proj Name"]}</td>
                    <td>
                      {formatDateRange(
                        personDetails["Start Date"],
                        personDetails["End Date"]
                      )}
                    </td>
                    {showAdditionalColumns && (
                  <>
                   <td>{personDetails["Exp in L&T (Yrs)"]}</td>
                    <td>{personDetails["Total Exp (Yrs)"]}</td>
                    <td>{personDetails["Start Date"]}</td>
                    <td>{personDetails["End Date"]}</td>
                    <td>{personDetails["Immediate Reporting Manager"]}</td>
                    {/* <td>{personDetails["Total Exp (Yrs)"]}</td>
                    <td>{personDetails["Total Exp (Yrs)"]}</td>
                    <td>{personDetails["Total Exp (Yrs)"]}</td>
                    <td>{personDetails["Total Exp (Yrs)"]}</td>
                    <td>{personDetails["Total Exp (Yrs)"]}</td>
                    <td>{personDetails["Total Exp (Yrs)"]}</td>
                    <td>{personDetails["Total Exp (Yrs)"]}</td> */}
                  </>
                )}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ResultsPage;
