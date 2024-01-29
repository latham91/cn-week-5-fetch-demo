import "./Search.css";
import PropTypes from "prop-types";

export default function Search({ search }) {
    const handleSubmit = (event, searchInput) => {
        event.preventDefault();

        search(searchInput);
    };

    return (
        <form onSubmit={handleSubmit} className="search-container">
            <input
                onChange={(e) => handleSubmit(e, e.target.value.toLowerCase())}
                type="text"
                placeholder="Search for a movie"
            />
            <button type="submit">Search</button>
        </form>
    );
}

Search.propTypes = {
    search: PropTypes.func.isRequired,
};
