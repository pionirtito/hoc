// KONVENCIJA => withNazivFunkcionalnosti.js

import React, { Component } from 'react';

const withCounter = (MainComponent) => { // (komponenta) kojoj se daje funkcionalnost
    class NewComponent extends Component {

        state = {
            counter:0
        }

        incCounter = ()=> {
            this.setState({counter:this.state.counter + 1})
        }

        render () {
            console.log(this.props.name);

            return (// !!! App -> NewComponet -> TomatoBox !!! mora tako
                <MainComponent name={this.props.name} counter={this.state.counter} incCounter={this.incCounter} />
            )
        }
    }

    return NewComponent; // !!! mora ovako => bez ovoga funkcija staje, odnosno ne cuva komponentu

}

export default withCounter;