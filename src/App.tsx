import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ListPage } from "./list";
import { DetailPage } from "./detail"; 

export function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<ListPage />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/character/:id" element={<DetailPage />} /> 
        </Routes>
        </BrowserRouter>
    );
    }