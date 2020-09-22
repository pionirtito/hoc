import React, { Component } from 'react'
import "./CadetBox.css"
import withCounter from "../hoc/withCounter"

class CadetBox extends Component {

    render() {
        return (
            <div onClick={this.props.incCounter} className="CadetBox">
                {this.props.counter}
            </div>
        );
    }
}

export default withCounter(CadetBox);