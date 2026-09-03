function Filters() {
    return (
        <div className="filters">
            <button className="filter-btn active"><strong>Global</strong></button>
            <button className="filter-btn"><strong>Popularity</strong> (High - Low)</button>
            <button className="filter-btn"><strong>Date</strong> (New - Old)</button>
            <button className="filter-btn"><strong>Type</strong> (Post)</button>
        </div>
    );
}

export default Filters;