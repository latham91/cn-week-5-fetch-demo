import "./App.css";

import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MoviePage from "./pages/MoviePage";
import Homepage from "./pages/Homepage";

export default function App() {
    const [data, setData] = useState([]);
    const [filteredMovies, setFiltedMovies] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://ghibliapi.vercel.app/films`);

            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.status}`);
            }

            const data = await response.json();

            setData(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSearch = (searchValue) => {
        const filteredMovies = data.filter((movie) => {
            return movie.title.toLowerCase().includes(searchValue.toLowerCase());
        });

        setFiltedMovies(filteredMovies);
    };
    return (
        <>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={<Homepage handleSearch={handleSearch} filteredMovies={filteredMovies} data={data} />}
                />
                <Route path="/films/:id" element={<MoviePage />} />
            </Routes>
        </>
    );
}
