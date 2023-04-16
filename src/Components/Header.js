import React, { Component } from 'react';

class Header extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <h1>{this.props.brand}</h1>
            </>
        );
    }
}
 
export default Header;