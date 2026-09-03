
function SearchBar({ visible }) {
    if (visible) {
        return (
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
        );
    }
}

export default SearchBar;