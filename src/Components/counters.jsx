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

    increment = cid =>{
        var data = [];
        for(var i=0 ; i<this.state.counters.length ; ++i){
            if(this.state.counters[i].id === cid){
                data[i] = this.state.counters[i];
                data[i].value++;
            }
            else{
                data[i] = this.state.counters[i];
            }
        }
        this.setState({counters:data});
    }

    render() { 
        return (
        <div>
            {this.state.counters.map(counter =>
                 <Raghav key={counter.id} onDlkuchbhinaam={this.handleDlete} increment={this.increment} counterData={counter}/>)}  
        </div>
    );
    }
}
 
export default Counters;