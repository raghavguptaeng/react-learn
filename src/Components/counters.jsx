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
    handleDlete = cid =>{
        const newData = this.state.counters.filter(index => index.id !== cid);
        this.setState(
            {
                counters:newData
            }
        );
    } 


    render() { 
        return (
        <div>
            {this.state.counters.map(counter => <Raghav key={counter.id} id={counter.id}  onDlkuchbhinaam={this.handleDlete} value={counter.value}  />)}  
        </div>
    );
    }
}
 
export default Counters;