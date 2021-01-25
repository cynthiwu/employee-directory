import React from 'react';
import "./style.css";

function Filter(props) {
    return (
        <form>
            <div>
                <input name="filter" type = "text" placeholder= "Filter by Name" id="filter" />
            </div>
        </form>
    );
};

export default Filter;