import React from "react";
import "./style.css";

function Table(props) {

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th onClick={props.sort} scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
                {props.users?.length && props.users.filter(user => (user.name.first + " " + user.name.last).toLowerCase().includes(props.filter)).map(item => 
                    <tr key={item.index}>
                        <img src={item.picture.thumbnail}/>
                        <td>{item.name.first} {item.name.last}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{new Date(item.dob.date).toLocaleDateString()}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};


export default Table;


