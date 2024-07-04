
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import '../App.css';

// const StoryPage = () => {
//   const { id } = useParams();
//   const [story, setStory] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const url = `https://child.onrender.com/api/sciencefiction/${id}`;
//       try {
//         const response = await fetch(url);
//         const result = await response.json();
//         setStory(result);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, [id]);

//   return (
//     <div className="container">
//       {story ? (
//         <>
//           <h1>{story.Storyadvenure.Storytitle}</h1>
//           <div className="tabs">
//             <button className="tab">Tab 1</button>
//             <button className="tab">Tab 2</button>
//             <button className="tab">Tab 3</button>
//           </div>
//           <div className="content">
//             <p>{story.Storyadvenure.content[0]?.Paragraph[0]}</p>
//           </div>
//         </>
//       ) : (
//         <h1>Loading...</h1>
//       )}
//     </div>
//   );
// };

// export default StoryPage;



// src/pages/StoryPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../App.css';

const StoryPage = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://child.onrender.com/api/sciencefiction/${id}`;
      try {
        const response = await fetch(url);
        const result = await response.json();
        setStory(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="container">
      {story ? (
        <>
          <h1>{story.Storyadvenure.Storytitle}</h1>
          <div className="tabs">
            <button className="tab">Tab 1</button>
            <button className="tab">Tab 2</button>
            <button className="tab">Tab 3</button>
          </div>
          <div className="content">
            {story.Storyadvenure.content.map((contentItem, index) => (
              <div key={index}>
                {contentItem.Storyimage.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={`https://ik.imagekit.io/dev24/${image}`}
                    alt={`Story image ${imgIndex}`}
                  />
                ))}
                {contentItem.Paragraph.map((paragraph, paraIndex) => (
                  <p key={paraIndex}>{paragraph}</p>
                ))}
              </div>
            ))}
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default StoryPage;
