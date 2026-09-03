import Navigation from "../components/Navigation";
import PostList from "../components/PostList"
import Filters from "../components/Filters"

import tree from '../assets/tree.jpg';
import elephant from '../assets/elephant.jpg';
import giraffe from '../assets/giraffe.jpg';

const postsData = [
  {
    id: 1,
    title: "Tree",
    author: "BobTheTomato",
    img: tree,
    alt: "Image of tree",
    likes: 12,
    comments: 4
  },
  {
    id: 2,
    title: "Picture of a Elephant",
    author: "NatureLover",
    img: elephant,
    alt: "Image of a elephant",
    likes: 34,
    comments: 13
  },
  {
    id: 3,
    title: "Tall boy",
    author: "AverageJoe",
    img: giraffe,
    alt: "Image of a giraffe",
    likes: 29,
    comments: 6
  },
  {
    id: 4,
    title: "No image here",
    author: "TristanTheTester",
    img: null,
    alt: "Image not existant",
    likes: -9,
    comments: -2
  }
];

function Home() {
  return (
    <>
      <Navigation searchbar={true} />

      <main>
        <Filters />
        
        <PostList posts={postsData} />
      </main>
    </>
  );
}

export default Home;