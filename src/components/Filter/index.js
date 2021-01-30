import React from 'react';
import "./style.css";

function Filter(props) {
    return (
        <form class="form">
            <div>
                <p>Use to </p>
                <input name="filter" value={props.filter} type = "text" id="filter" placeholder="Filter your search" onChange={props.handleInputChange}/>
            </div>
        </form>
    );
};

export default Filter;