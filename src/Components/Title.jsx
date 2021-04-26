import React, { Component } from 'react';
class Raghav extends Component{
    state = {
        value: this.props.value,
    };
    render(){
        console.log(this.props);
        return(
            <React.Fragment>
                <br></br>
                <span style={this.styles} className = {this.getLabelcolor()}> {this.tellCount()} </span> 
                <button className = 'btn btn-secondary btn-sm m-22' onClick={this.increment}> increment </button>  
            </React.Fragment>    
        );
    }
    increment = ()=>{
        this.setState({
            value: this.state.value+1
        })
    };
    // following function changes our label colour as the value of count changes
    getLabelcolor() {
        var badgeClasses = "badge m-2 badge-";
        badgeClasses += (this.state.value === 0) ? "warning" : "primary";
        return badgeClasses;
    }   
    // following function tells us the value of count in our badge 
    tellCount(){
        const variable = this.state;
        if(variable.value === 0){
            return 'ZERO';
        }
        else{
            return variable.value;
        }
    }
}
export default Raghav;