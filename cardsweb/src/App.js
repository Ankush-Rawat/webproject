// import React from 'react';
// import './App.css';
// import  API from api.js;

// function App() {
//   return (
//     <div className="App">
//      <API/>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import API from './api';
// import './App.css';

// function App() {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <a className="navbar-brand" href="#">BrainyLingo</a>
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
//           <form className="form-inline my-2 my-lg-0 mx-auto">
//             <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{ width: '400px' }} />
//             <button className="btn btn-outline-success" type="submit">Search</button>
//           </form>
//           <div>
//             <button className="btn btn-success mr-2">Login</button>
//           </div>
//         </div>
//       </nav>
//       <div className="container-fluid">
//         <div className="row">
         
//           <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
//             <API />
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


// import React, { useEffect, useState } from "react";
// import './App.css';  // Import the CSS file for styling
// import Card from "./components/card";  // Import the Card component

// const API = () => {
//   const [api, setApi] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const url = "https://child.onrender.com/api/sciencefiction";
//       const options = {
//         method: "GET",
//         headers: {
//           "X-RapidAPI-Key": "5e5a5b4292mshb19296080902212p1e8979jsn91558140394c",
//           "X-RapidAPI-Host": "spotify-web2.p.rapidapi.com",
//         },
//       };

//       try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         setApi(result);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="container">
//       <header className="header">
//         <h1>Science Fiction Stories</h1>
//         <div className="filters">
//           <button className="btn new">New</button>
//           <button className="btn in-progress">In Progress</button>
//           <button className="btn completed">Completed</button>
//           <button className="btn clear-all">Clear All</button>
//         </div>
//       </header>
//       <div className="card-grid">
//         {api ? (
//           api.map((item, index) => (
//             <Card
//               key={index}
//               title={item.Storyadvenure.Storytitle}
//               text={item.Storyadvenure.content[0]?.Paragraph[0] || "No content available"}
//               imageUrl={item.Storyadvenure.content[0]?.Storyimage[0] || "https://via.placeholder.com/150"}
//               altText="Story image"
//               linkUrl="#"
//               linkText="Read more"
//             />
//           ))
//         ) : (
//           <h1>Loading...</h1>
//         )}
//       </div>
//     </div>
//   );
// };

// export default API;




// src/App.js


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StoryPage from "./pages/StoryPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/story/:id" element={<StoryPage />} />
      </Routes>
    </Router>
  );
};

export default App;

