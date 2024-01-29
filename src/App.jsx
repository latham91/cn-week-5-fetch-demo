import "./App.css";

import { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";
import Search from "./components/Search";
import Spinner from "./components/Spinner";

export default function App() {
    const [data, setData] = useState([]);
    const [filtedMovies, setFiltedMovies] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("https://ghibliapi.vercel.app/films");

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
            <Search search={handleSearch} />
            <div className="container">
                {filtedMovies.length > 0 &&
                    filtedMovies.map((movie) => {
                        return <MovieCard movie={movie} key={movie.id} />;
                    })}

                {filtedMovies.length === 0 && data.length > 0 ? (
                    data.map((movie) => {
                        return <MovieCard movie={movie} key={movie.id} />;
                    })
                ) : (
                    <div className="spinner-container">
                        <Spinner />
                    </div>
                )}
            </div>
        </>
    );
}
