import React, { Component } from 'react';
class NavBar extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <nav className="navbar navbar-light bg-light">
                    <div class="container-fluid">
                        <a className="navbar-brand" href="#">
                            Number Of Components {this.props.count}
                        </a>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}
 
export default NavBar;