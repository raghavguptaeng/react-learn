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
            <React.Fragment>
                <NavBar count={this.state.counters.length} />
                    <main className='container'>
                        <Counters inc={this.increment} del={this.handleDlete} res={this.reset} data={this.state.counters} />
                    </main>
            </React.Fragment>
        );
    }
}
 
export default App;