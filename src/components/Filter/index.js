import React from 'react';
import "./style.css";

function Filter(props) {
    return (
        <form className="form">
            <div>
                <p className="instructions">Start typing a name in the box below to filter results.</p>
                <input className="input" name="filter" value={props.filter} type = "text" id="filter" placeholder="Filter your search" onChange={props.handleInputChange}/>
            </div>
        </form>
    );
};

export default Filter;