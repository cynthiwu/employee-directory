import React from "react";
import "./style.css";

function Table(props) {

    return (
        <div className="container">
            <div className="row">
                <table className="col-lg-12 col-md-6 col-sm-2 table table-striped">
                    <thead className="text-center">
                        <tr>
                            <th scope="col">Image</th>
                            <th onClick={props.sort} scope="col"><u>Name</u></th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">DOB</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {props.users?.length && props.users.filter(user => (user.name.first + " " + user.name.last).toLowerCase().includes(props.filter)).map(item => 
                            <tr key={item.index} className="text-center">
                                <img className="py-3" src={item.picture.medium}/>
                                <td className="align-middle">{item.name.first} {item.name.last}</td>
                                <td className="align-middle">{item.phone}</td>
                                <td className="align-middle">{item.email}</td>
                                <td className="align-middle">{new Date(item.dob.date).toLocaleDateString()}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default Table;


