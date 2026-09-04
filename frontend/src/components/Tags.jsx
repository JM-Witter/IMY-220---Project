function Tags({ tags }) {
    return (
        <div className="tags-container">
            {tags.map((tag, id) => (
                <span key={id} className="tag">#{tag}</span>
            ))}
        </div>
    );
}

export default Tags;


