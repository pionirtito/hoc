import React, { Component } from 'react'
import "./App.css"
import CadetBox from './components/CadetBox/CadetBox'
import TomatoBox from './components/TomatoBox/TomatoBox'

class App extends Component {
    // state = {  }
    render() { 
        return ( 
            <div className="App">
                <TomatoBox name="Nikola" /> {/* !!! name u stvari ide u NewComponent, a ne ovde, pa mora da se prosledi iz NewComponenta takodje */}
                <CadetBox />
            </div>
         );
    }
}
 
export default App;