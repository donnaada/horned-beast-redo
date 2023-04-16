import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Col from'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { HeartFill } from 'react-bootstrap-icons';

class HornedBeasts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timesClicked: 0
        }
    }
    handleClick = () => {
        this.setState({
            timesClicked: this.state.timesClicked + 1
        })
    }
    
    render() { 
        return (
            <Col xs={12} md={6} lg={4}>
                <h2>{this.props.title}</h2>
                <Image src={this.props.url} fluid></Image>    
                <Button variant="danger" onClick={this.handleClick}>
                    <HeartFill></HeartFill> 
                    <span> {this.state.timesClicked}</span>
                </Button>
            </Col> 
        )
    }
}
 
export default HornedBeasts;