import React, { Component } from 'react';
import hornedBeasts from '../hornedBeasts.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HornedBeasts from './HornedBeasts';

class Main extends Component {
    render() { 
        const beasts = hornedBeasts;

        return (
            <Container>
                <Row>
                 {beasts.map((beast)=>(
                        <HornedBeasts
                            key={beast._id}
                            url={beast.image_url} 
                            title={beast.title}
                            description={beast.description}
                            keyword={beast.keyword}
                            horns={beast.horns}
                        />
                 )
                )}
                </Row>
            </Container>
        );
    }
}
 
export default Main;