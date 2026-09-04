import { Link } from "react-router-dom";

import Image from "./Image"

const Posts = ({ id, title, author, img, alt, likes, comments }) => {
    return (
        <Link to={`/Post/${id}`} className="post-link">
            <div className="post">
                <h3>{title}</h3>

                <span className="post-author">
                    - Posted by {author}
                </span>

                <Image img={img} alt={alt} />

                <div className="post-stats">
                    <span>{likes} Likes</span>
                    <span>{comments} Comments</span>
                </div>
            </div>
        </Link>
    );
};

export default Posts;