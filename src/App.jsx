import "./App.css";

import { useState, useEffect } from "react";

export default function App() {
    const [data, setData] = useState([]);

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

    return (
        <div>
            {data.length > 0 ? (
                data.map((movie) => (
                    <>
                        <div key={movie.id}>
                            <img src={movie.image} alt={movie.title + " image"} width="150px" />
                            <h2>{movie.title}</h2>
                            <p>{movie.description}</p>
                        </div>
                        <hr />
                    </>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
