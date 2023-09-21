import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Nav from "./components/Nav";



function App() {
    return (
        <main>
            
            <Nav />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="#" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </main>
    );
}

export default App;
