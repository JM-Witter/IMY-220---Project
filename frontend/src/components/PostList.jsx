
import Posts from "./Posts";

function PostList({ posts }) {
    return (
        <div className="post-list">
            {posts.map((post) => (
                <Posts
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    img={post.img}
                    alt={post.alt}
                    likes={post.likes}
                    comments={post.comments}
                />
            ))}
        </div>
    );
}

export default PostList;