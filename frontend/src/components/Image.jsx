
function Image({ img, alt }) {
    if (img) {
        return (
            <div className="post-image">
                <img src={img} alt={alt} />
            </div>
        );
    } else {
        return (
            <div className="img-error">
                <p>
                    Image missing
                </p>
            </div>
        );
    }
}

export default Image;