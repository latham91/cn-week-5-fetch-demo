import "./MovieCard.css";
import PropTypes from "prop-types";
import { useState } from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
    const [toggleModal, setToggleModal] = useState(false);

    const closeModal = () => {
        setToggleModal(false);
    };

    const openModal = () => {
        setToggleModal(true);
    };

    return (
        <>
            <div className="movie-card" key={movie.id}>
                <img
                    onClick={openModal}
                    className="movie-image"
                    src={movie.image}
                    alt={movie.title + " image"}
                    draggable={false}
                />
                <h2 className="movie-title">{movie.title}</h2>
                <p className="movie-description">{movie.description.substring(0, 150) + "..."}</p>
                <Link to={`/films/${movie.id}`}>
                    <button className="btnInfo">More Info</button>
                </Link>
            </div>
            {toggleModal && <Modal movie={movie} close={closeModal} status={toggleModal} />}
        </>
    );
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};
