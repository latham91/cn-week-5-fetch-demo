import MovieCard from "../components/MovieCard";
import Search from "../components/Search";
import Spinner from "../components/Spinner";

import PropTypes from "prop-types";

export default function HomePage({ handleSearch, data, filteredMovies }) {
    return (
        <>
            <Search search={handleSearch} />
            <div className="container">
                {filteredMovies.length > 0 &&
                    filteredMovies.map((movie) => {
                        return <MovieCard movie={movie} key={movie.id} />;
                    })}

                {filteredMovies.length === 0 &&
                    data.length > 0 &&
                    data.map((movie) => {
                        return <MovieCard movie={movie} key={movie.id} />;
                    })}
            </div>
            {data.length === 0 && (
                <div className="spinner-container">
                    <Spinner />
                </div>
            )}
        </>
    );
}

HomePage.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    filteredMovies: PropTypes.array.isRequired,
};
