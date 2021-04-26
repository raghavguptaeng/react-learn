import React, { Component } from 'react';
import Raghav from './Title';
class Counters extends Component {
    state = { 
        counters:[
            {id:1,value:0},
            {id:2,value:1},
            {id:3,value:6},
            {id:4,value:0}
        ]
     }
    render() { 
        return (
        <div>
            {this.state.counters.map(counter => <Raghav key={counter.id} value={counter.value}  />)}  
               
        </div>
    );
    }
}
 
export default Counters;