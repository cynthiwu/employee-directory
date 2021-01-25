import React from 'react';
import "./style.css";

function Filter(props) {
    return (
        <form>
            <div>
                <input name="filter" value={props.filter} type = "text" id="filter" onChange={props.handleInputChange}/>
            </div>
        </form>
    );
};

export default Filter;