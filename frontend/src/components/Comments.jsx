function Comments({ comments }) {
    return (
        <div className="comment-section">
            {comments.map((comment) => (
                <div key={comment.id}>
                    <div className="comment-header">
                        <span className="comment-user">{comment.user}</span>
                        <span className="comment-time">{comment.time}</span>
                    </div>
                    <p className="comment-text">{comment.text}</p>
                </div>
            ))}
        </div>
    );
}

export default Comments;


