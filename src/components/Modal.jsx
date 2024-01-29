import "./Modal.css";

import PropTypes from "prop-types";
import { LuX } from "react-icons/lu";

import { useRef } from "react";

export default function Modal({ movie, close }) {
    const modalBg = useRef();

    const handleClose = (event) => {
        if (event.target === modalBg.current) {
            close();
        }

        return;
    };

    return (
        <div onClick={handleClose} ref={modalBg} className="modal-background">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title">
                        {movie.title} ({movie.original_title})
                    </h2>
                    <LuX onClick={close} className="modal-icon" size={30} />
                </div>
                <div className="modal-description">
                    <img src={movie.image} alt={movie.title + " image"} />

                    <div className="description-container">
                        <h3>Description:</h3>
                        <p>{movie.description}</p>
                        <hr />

                        <h3>Director:</h3>
                        <p>🎬 {movie.director}</p>
                        <hr />

                        <h3>Producer:</h3>
                        <p>🎥 {movie.producer}</p>
                        <hr />

                        <h3>Release Date:</h3>
                        <p>⏱️ {movie.release_date}</p>
                        <hr />

                        <h3>Running time:</h3>
                        <p>⏱️ {movie.running_time} minutes</p>
                        <hr />

                        <h3>Rotton Tomatoes Score:</h3>
                        <p>🍅 {movie.rt_score}/100</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

Modal.propTypes = {
    movie: PropTypes.object.isRequired,
    close: PropTypes.func.isRequired,
};
