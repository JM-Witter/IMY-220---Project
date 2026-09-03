
import Navigation from "../components/Navigation";

function NotFound() {
    return (
        <>
            <Navigation />
            
            <main>

                <h1 className="not-found">404 - Page Not Found</h1>
                <p className="not-found">
                    The page you requested does not exist.
                </p>
            </main>
        </>
    );
}


export default NotFound;