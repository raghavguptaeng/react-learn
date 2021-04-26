import React, { Component } from 'react';
class Raghav extends Component{
    
    render(){
        console.log(this.props);
        return(
            <React.Fragment>
                <br></br>
                <span style={this.styles} className = {this.getLabelcolor()}> {this.tellCount()} </span> 

                <button className = 'btn btn-secondary btn-sm m-22' onClick={()=>this.props.increment(this.props.counterData.id)}> increment </button>  

                <button className = 'btn btn-danger btn-sm m-2' onClick={ ()=>this.props.onDlkuchbhinaam(this.props.counterData.id) } >Delete</button>
            </React.Fragment>    
        );
    }
    // following function changes our label colour as the value of count changes
    getLabelcolor() {
        var badgeClasses = "badge m-2 badge-";
        badgeClasses += (this.props.counterData.value === 0) ? "warning" : "primary";
        return badgeClasses;
    }   
    // following function tells us the value of count in our badge 
    tellCount(){
        const variable = this.props;
        if(variable.counterData.value === 0){
            return 'ZERO';
        }
        else{
            return variable.counterData.value;
        }
    }
}
export default Raghav;