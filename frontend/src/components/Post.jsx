import React from 'react';

const Post = ({ title, author, img, alt, likes, comments }) => {
    return (
        <div className="post">
            <h3>{title}</h3>

            <a className="post-author">
                - Posted by {author}
            </a>

            {img && (<div className="post-image">
                <img src={img} alt={alt} />
            </div>)}

            <div className="post-stats">
                <a>{likes} Likes</a>
                <a>{comments} Comments</a>
            </div>
        </div>
    );
};

export default Post;