// import DataAreaContext from "../utils/DataAreaContext";
// import React, { useContext } from "react";
import React from "react";

const SearchName = () => {
    // const context = useContext(DataAreaContext);

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse row" id="navbarNav">
                <div className="search-area col-4">
                    <div className="searchbox">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="">
                                    Search
            </span>
                            </div>
                            <input
                                className="form-control mr-sm-2"
                                type="search"
                                placeholder="name"
                                aria-label="Search"
                                // onChange={e => context.handleSearchChange(e)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    );
}
export default SearchName;