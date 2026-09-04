import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import Navigation from '../components/Navigation';
import Comments from '../components/Comments';
import Image from '../components/Image';
import Tags from '../components/Tags';

import tree from '../assets/tree.jpg';

const post = {
  id: 1,
  title: "A nice Tree",
  author: "BobTheTomato",
  authodID: 1,
  tags: ["Tree", "Nature", "interesting Facts"],
  content: "Did you know, Trees are good for the environment?",
  img: tree,
  likes: "2.5k",
  comments: [
    { id: 1, user: "BobMarley", time: "2h ago", text: "Cool tree" },
    { id: 2, user: "Tree", time: "5m ago", text: "Hello There" },
    { id: 3, user: "Peter", time: "3 days ago", text: "Thats good to know" },
  ]
};

function PostDetail() {
  const param = useParams();

  console.log("PostID: ", param.id)

  return (
    <>
      <Navigation searchbar={true} />

      <main>
        <div className="post">
          <h2 className="post-title">{post.title}</h2>

          <span className="post-author">
            Posted by <Link to={`/Profile/${post.author}`} className="author-link">{post.author}</Link>
          </span>

          <Image img={post.img} alt={"Picture of a tree"} />

          <Tags tags={post.tags} />

          <p className="post-text">{post.content}</p>

          <div className="post-stat">
            <span>{post.likes} Likes</span>
            <span>{post.comments.length} Comments</span>
          </div>

          <Comments comments={post.comments}/>
        </div>
      </main>
    </>
  );
}

export default PostDetail;