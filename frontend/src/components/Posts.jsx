import Image from "./Image"

const Posts = ({ title, author, img, alt, likes, comments }) => {
    return (
        <div className="post">
            <h3>{title}</h3>

            <a className="post-author">
                - Posted by {author}
            </a>

            <Image img={img} alt={alt}/>

            <div className="post-stats">
                <a>{likes} Likes</a>
                <a>{comments} Comments</a>
            </div>
        </div>
    );
};

export default Posts;