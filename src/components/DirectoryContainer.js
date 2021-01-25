import React, { Component } from "react";
import Title from "./Title/index";
import Table from "./Table/index";
import Filter from "./Filter/index";
import API from "../utils/API";

class DirectoryContainer extends Component {
    state = {
        result: {},
        filter: ""
    };

    randomUser = () => {
        API.search().then(res => 
            this.setState({ result: res.data })).catch(err => console.log(err));

    };

    render() {
        return (
            <React.Fragment>
                <Title>Employee  Directory</Title>
                <Filter />
                <Table />
            </React.Fragment>
        );
    }

}


export default DirectoryContainer;