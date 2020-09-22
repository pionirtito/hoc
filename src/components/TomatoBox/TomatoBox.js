import React, { Component } from 'react';
import "./TomatoBox.css"
import withCounter from "../hoc/withCounter"

class TomatoBox extends Component {
    // pre prosledjivanja metodda iz HOC !!! ... u Cadet Box smo izbirasli sve, a ovde ostavili zbog primera zasto radimo
/*     state = {
        counter: 0
    }

    incCounter = () => {
        this.setState({counter: this.state.counter + 1})
    } */
    

    /* render() {
        return (
            <div onClick={this.incCounter} className="TomatoBox">
                {this.state.counter}
            </div>
        );
    } */

    render() {
        return (//mora props
            <div onClick={this.props.incCounter} className="TomatoBox">
                {this.props.counter} {this.props.name}
            </div>
        );
    }
}

export default withCounter(TomatoBox);