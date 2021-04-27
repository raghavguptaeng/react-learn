import React, { Component } from 'react';
import Raghav from './Title';
class Counters extends Component {

    render() { 
        const {del,inc,res,data} = this.props;
        return (
        <div>
            <button className="btn btn-primary btn-m m-2" onClick={res}>Reset</button>
            {data.map(counter =>
                 <Raghav key={counter.id} onDlkuchbhinaam={del} increment={inc} counterData={counter}/>)}  
        </div>
    );
    }
}
 
export default Counters;