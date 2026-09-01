import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Splash from "./pages/Splash";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
    return <BrowserRouter>

        <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/Home" element={<Home />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
}

export default App;