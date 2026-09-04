import { useParams } from "react-router-dom";

import Navigation from "../components/Navigation";

function Profile() {
  const params = useParams();
  
  // console.log(params);

  return (
    <>
      <Navigation />
      
      <main>
          <h1>Profile</h1>
          <p>UserID: {params.id}</p>


          <p>Posts ...</p>
          <p>Friends ...</p>
      </main>
    </>
  );
}

export default Profile;