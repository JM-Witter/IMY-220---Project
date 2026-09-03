import Navigation from "../components/Navigation";
import Post from "../components/Post";

import tree from '../assets/tree.jpg';
import elephant from '../assets/elephant.jpg';
import giraffe from '../assets/giraffe.jpg';

function Home() {
  return (
    <>
      <Navigation searchbar={true} />

      <main>
        <div className="filters">
          <button className="filter-btn active"><strong>Global</strong></button>
          <button className="filter-btn"><strong>Popularity</strong> (High - Low)</button>
          <button className="filter-btn"><strong>Date</strong> (New - Old)</button>
          <button className="filter-btn"><strong>Type</strong> (Post)</button>
        </div>

        <div className="post-list">
          <Post
            title="Tree"
            author="BobTheTomato"
            img={tree}
            alt="Image of tree"
            likes={12}
            comments={4}
          />

          <Post
            title="Picture of a Elephant"
            author="NatureLover"
            img={elephant}
            alt="Image of a elephant"
            likes={34}
            comments={13}
          />

          <Post
            title="Tall boy"
            author="AverageJoe"
            img={giraffe}
            alt="Image of a giraffe"
            likes={29}
            comments={6}
          />
        </div>
      </main>
    </>
  );
}

export default Home;