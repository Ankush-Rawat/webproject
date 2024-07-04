
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Card from "../components/card";
// import Header from "../components/Header";
// import '../App.css';

// const HomePage = () => {
//   const [stories, setStories] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const url = "https://child.onrender.com/api/sciencefiction";
//       try {
//         const response = await fetch(url);
//         const result = await response.json();
//         setStories(result);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="container">
//       <Header />
//       <div className="card-grid">
//         {stories ? (
//           stories.map((item, index) => (
//             <Link to={`/story/${item._id}`} key={index} className="card-link">
//               <Card
//                 title={item.Storyadvenure.Storytitle}
//                 imageUrl={item.Storyadvenure.content[0]?.Storyimage[0] || "https://via.placeholder.com/150"}
//                 altText="Story image"
//                 status="New"
//               />
//             </Link>
//           ))
//         ) : (
//           <h1>Loading...</h1>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomePage;



// src/pages/HomePage.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/card";
import Header from "../components/Header";
import '../App.css';

const HomePage = () => {
  const [stories, setStories] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://child.onrender.com/api/sciencefiction";
      try {
        const response = await fetch(url);
        const result = await response.json();
        setStories(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="card-grid">
        {stories ? (
          stories.map((item, index) => (
            <Link to={`/story/${item._id}`} key={index} className="card-link">
              <Card
                title={item.Storyadvenure.Storytitle}
                imageUrl={`https://ik.imagekit.io/dev24/${item.Storyadvenure.content[0]?.Storyimage[0]}`}
                altText="Story image"
                status="New"
              />
            </Link>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default HomePage;
