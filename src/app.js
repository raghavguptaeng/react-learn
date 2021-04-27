import React, { Component } from 'react';
import NavBar from './Components/navbar';
import Counters from './Components/counters';

class App extends Component {
    state = { counters:[
        {id:1,value:0},
        {id:2,value:0},
        {id:3,value:6},
        {id:4,value:0}
    ] }
    render() { 
        return (  
            <React.Fragment>
                <NavBar count={this.state.counters.length} />
                    <main className='container'>
                        <Counters counters = {this.state.counters} />
                    </main>
            </React.Fragment>
        );
    }
}
 
export default App;