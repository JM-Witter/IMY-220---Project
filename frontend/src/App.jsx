import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Splash from "./pages/Splash";
import NotFound from "./pages/NotFound";

import Navigation from "./components/Navigation";

function App() {
    return <BrowserRouter>
        <Navigation />

        <Routes>
            <Route path="/" element={<Splash />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
}

export default App;