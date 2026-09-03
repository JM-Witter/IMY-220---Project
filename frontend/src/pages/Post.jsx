import Navigation from "../components/Navigation";

import { useParams } from "react-router-dom";

function Post() {
  const params = useParams();
  
  // console.log(params);

  return (
    <>
      <Navigation />
      
      <main>
          <h1>Post</h1>
          <p>PostID: {params.id}</p>
      </main>
    </>
  );
}

export default Post;