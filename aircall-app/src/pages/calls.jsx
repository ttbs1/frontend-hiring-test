//import { useState, useEffect } from "react";
import React, { Component } from "react";
import { getCalls } from "../util/api-con";
import { CallsList } from "../components/CallsList";
import { Pagination } from "../components/Pagination";
import "./calls.css";
//import { useNavigate } from "react-router-dom";

export default class Calls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            pages: 0,
            calls: []
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        getCalls().then(response => {
            let calls = response;
            this.setState({ calls, pages: response.totalCount / 10 });
        });
    }

    handleClick(index, e) {

        console.log(index)
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="container-fluid d-flex justify-content-center">
                    {this.state.calls && this.state.calls.nodes &&
                        <CallsList calls={this.state.calls} callback="Loading calls..."></CallsList>}
                </div>

                <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
                        <li className="page-item"><button className="page-link" onClick={(e) => this.handleClick(0, e)}> &laquo; </button></li>
                        { 
                            new Array(Math.ceil(this.state.pages)).fill(0).map((_, index) => (
                                <li className="page-item"><button className="page-link" onClick={(e) => this.handleClick(index+1, e)} key={index+1}>{index+1}</button></li>
                            ))
                        }
                        <li className="page-item"><button className="page-link" onClick={(e) => this.handleClick(0, e)}> &raquo; </button></li>
                    </ul>
                </nav>
            </div>
        );
    }
}
