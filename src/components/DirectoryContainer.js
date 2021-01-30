import React, { Component } from "react";
import Title from "./Title/index";
import Table from "./Table/index";
import Filter from "./Filter/index";
import API from "../utils/API";

class DirectoryContainer extends Component {
    state = {
        result: [],
        filter: "",
        sort: false
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

    sortByName = () => {

        if (this.state.sort === false) {
    
            let newResult = this.state.result.sort((a, b) => {
                const lowerA = a.name.first.toLowerCase();
                const lowerB = b.name.first.toLowerCase();
                return (lowerA < lowerB) ? -1 : (lowerA > lowerB) ? 1 : 0;
             });

             this.setState({
                result: newResult, sort: true
            });

        } else if (this.state.sort === true) {

            let newResult = this.state.result.sort((a, b) => {
                const lowerA = a.name.first.toLowerCase();
                const lowerB = b.name.first.toLowerCase();
                return (lowerA > lowerB) ? -1 : (lowerA < lowerB) ? 1 : 0;
             });

             this.setState({
                result: newResult, sort: false
            });
        };
    };

    render() {
        return (
            <React.Fragment>
                <Title>Employee  Directory</Title>
                <Filter filter={this.state.filter} handleInputChange={this.handleInputChange}/>
                <Table users={this.state.result} filter={this.state.filter} sort={this.sortByName}/>
            </React.Fragment>
        );
    }

}


export default DirectoryContainer;