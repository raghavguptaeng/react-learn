import React, { Component } from 'react';
import Raghav from './Title';
class Counters extends Component {
    state = { 
        counters:this.props.counters
     }
    handleDlete = cid =>{
        const newData = this.state.counters.filter(index => index.id !== cid);
        this.setState(
            {
                counters:newData
            }
        );
    } 

    increment = (cid) =>{
        var data = [...this.state.counters];
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

    reset=()=>{
        var data = [];
        for(var i=0 ; i<this.state.counters.length ; ++i){
                data[i] = this.state.counters[i];
                data[i].value = 0;
        }
        this.setState({counters:data});
    }

    render() { 
        return (
        <div>
            <button className="btn btn-primary btn-m m-2" onClick={this.reset}>Reset</button>
            {this.state.counters.map(counter =>
                 <Raghav key={counter.id} onDlkuchbhinaam={this.handleDlete} increment={this.increment} counterData={counter}/>)}  
        </div>
    );
    }
}
 
export default Counters;