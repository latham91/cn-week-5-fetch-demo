import "./MoviePage.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export default function MoviePage() {
    const [loading, setLoading] = useState(true);
    const [movieData, setMovieData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://ghibliapi.vercel.app/films/${id}`);

                if (!response.ok) {
                    throw new Error(`Failed to fetch data: ${response.status}`);
                }

                const data = await response.json();

                console.log(data);
                setMovieData(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div>
            <div className="film-header-container">
                <h1 className="film-header">
                    {movieData.title} ({movieData.original_title})
                </h1>
                <img className="film-banner" src={movieData.movie_banner} alt={movieData.title + " banner"} />
            </div>
            <div className="movie-content-container">
                <div className="movie-left">
                    <div>
                        <img className="film-art" src={movieData.image} alt={movieData.title + " image"} />
                    </div>
                </div>
                <div className="movie-right">
                    <div>
                        <h3 className="film-info-header">Description</h3>
                        <p className="film-info">{movieData.description}</p>

                        <h3 className="film-info-header">Director</h3>
                        <p className="film-info">{movieData.director}</p>

                        <h3 className="film-info-header">Producer</h3>
                        <p className="film-info">{movieData.producer}</p>

                        <h3 className="film-info-header">Release Date</h3>
                        <p className="film-info">{movieData.release_date}</p>

                        <h3 className="film-info-header">Rotten Tomatoes Score</h3>
                        <p className="film-info">{movieData.rt_score}</p>

                        <h3 className="film-info-header">Running Time</h3>
                        <p className="film-info">{movieData.running_time} minutes</p>

                        <h3 className="film-info-header">URL</h3>
                        <p className="film-info">{movieData.url}</p>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
}

MoviePage.propTypes = {
    id: PropTypes.string.isRequired,
};
