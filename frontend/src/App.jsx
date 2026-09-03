import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Splash from "./pages/Splash";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Profile from "./pages/Profile";

import NotFound from "./pages/NotFound";

function App() {
    return <BrowserRouter>

        <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Account" element={<Profile />} />

            <Route path="/Profile/:id" element={<Profile />} />
            <Route path="/Post/:id" element={<Post />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
}

export default App;