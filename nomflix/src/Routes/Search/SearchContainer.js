import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "",
        loading: false,
        error: null
    };

    handleSubmit = () => {

        if (searchTerm !== "") {
            this.searchByTerm(searchTerm);
        }
    };

    searchByTerm = (term) => {
        const { searchTerm } = this.state;
        try {
            this.setState({ loading: true });
        } catch {
            this.setState({ error: "Can't find results" });
        } finally {
            this.setState({ loading: false });
        }
    };

    render() {
        const { movieResults, tvResults, searchTerm, loading, error } = this.state
        return (
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                loading={loading}
                error={error}
            />
        );
    }
}