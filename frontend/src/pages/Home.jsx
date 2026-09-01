import tree from '../assets/tree.jpg';

function Home() {
    return <div>
        <h2>TidBit</h2>

        <input type="text" placeholder="Search"></input>

        <div>
            <button>Global</button>
            <button>Popularity (High - Low)</button>
            <button>Date (New - Old)</button>
            <button>Type (Post)</button>
        </div>

        {/* Posts components */}
        <div>
            <h3>Title</h3>
            <a>Posted by user</a> <br></br>

            <img src={tree} alt="Image of tree" style={{ maxWidth: '200px', maxHeight: '200px' }} />
            <br></br>

            <a>N likes </a>
            <a>N comments</a>
        </div>
    </div>
}

export default Home;