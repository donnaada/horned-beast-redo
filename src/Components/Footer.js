import { Component } from 'react';

class Footer extends Component {
    render() { 
        return (
            <>
            <footer>
                <p>{this.props.author}</p>
            </footer>
            </>
        );
    }
}
 
export default Footer;