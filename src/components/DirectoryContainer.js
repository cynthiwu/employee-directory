import React, { Component } from "react";
import Title from "./Title/index";
import Table from "./Table/index";
import Filter from "./Filter/index";
import API from "../utils/API";

class DirectoryContainer extends Component {
    state = {
        result: [],
        filter: ""
    };

    componentDidMount() {
        this.randomUser();
    };

    randomUser = () => {
        API.search().then(res => {
            console.log(res);
            this.setState({ result: res.data.results })
        }).catch(err => console.log(err));
        
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <React.Fragment>
                <Title>Employee  Directory</Title>
                <Filter filter={this.state.filter} handleInputChange={this.handleInputChange}/>
                <Table users={this.state.result} filter={this.state.filter}/>
            </React.Fragment>
        );
    }

}


export default DirectoryContainer;