import React, {Component} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";

class Recipes extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={6} md={6}>
                        <Card bg = 'secondary'>
                            <Card.Img variant="top" src="soup.png" />
                            <Card.Body>
                                <Card.Title>BLESSING BIRDNEST SOUP</Card.Title>
                                <Card.Text>
                                  <h5>Instructions</h5>
                                    <ol>
                                      <li>Soak bird’s nest in water for a minimum of two hours to overnight to expand the strands.</li>
                                      <li>Separate the strands and clean the nest of impurities. Discard water.</li>
                                       <li>Soak and wash the nest again if necessary using fresh clean water every time. (If you clean a large quantity of nest at one time,
                                           store the cleaned nest in the freezer for longer storage time or in the refrigerator for next day cooking)</li>
                                    </ol>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={6}>
                        <Card bg = 'secondary'>
                            <Card.Img variant="top" src="drink.png" />
                            <Card.Body>
                                <Card.Title>BLESSING BIRDNEST DRINK</Card.Title>
                                <Card.Text>
                                  <h5>Instructions</h5>
                                  <p>Add Blessing Birdnest’s 7 oz. single jar to
                                      a big bowl of fresh fruit cocktail for s simple and healthy dessert the whole family will enjoy.
                                  </p>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    </Row>
            </Container>
        );
    }
}

export default Recipes;
