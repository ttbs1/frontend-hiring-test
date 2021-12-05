import React, { Component } from "react";
import { getCalls } from "../util/api-con";
import { CallsList } from "../components/CallsList";
import { Pagination } from "../components/Pagination";
import "./calls.css";

export default class Calls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            offset: 10,
            calls: []
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        getCalls(0, this.state.offset).then(response => {
            let calls = response;
            this.setState({ calls });
        });
    }

    handleClick(index) {
        let offset = this.state.offset;
        getCalls((index - 1) * offset, offset).then(response => {
            let calls = response;
            this.setState({
                calls,
                page: index
            });
        });
    }

    render() {
        return (
            <>
                <div className="container-fluid d-flex justify-content-center mt-3 mb-3">
                    {
                        this.state.calls && this.state.calls.nodes &&
                        <CallsList calls={this.state.calls} callback="Loading calls..."></CallsList>
                    }
                </div>
                
                <Pagination count={this.state.calls.totalCount} callback={this.handleClick}></Pagination>
            </>
        );
    }
}
