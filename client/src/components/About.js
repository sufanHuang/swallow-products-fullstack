import React, {Component} from 'react';
import {Container, Card, Row, Col } from "react-bootstrap";

class About extends Component {
    render() {
        return (
            <div>
            <Container>
                <Card bg = 'light'>
                    <Card.Img variant="top" src="aboutHeader.jpg" />
                    <Card.Body>
                        <Card.Title >About Our Products</Card.Title>
                        <Card.Text>
                            <p> At Golden Swallow, we use only the highest quality authentic swiftlet bird’s nest with
                                no additives/preservatives to ensure you enjoy the best of what bird’s nests have to offer.</p>
                            <p>Considered food “fit for the emperor,” swiftlet bird’s nest has been consumed and
                                respected as effective Traditional Chinese Medicine in China for centuries.
                                Trusted to be rich in amino acids, proteins, carbohydrates, and minerals,
                                bird’s nest has been enjoyed by many generations.</p>
                            <p>Consumption of this ready-to-drink Blessing Birdnest product will help you start
                                your day with a time-honored, beneficial tradition without the need for cooking.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
                <br/>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                      <Card bg = 'secondary'>
                          <Card.Body>
                              <Card.Title>100% NATURAL</Card.Title>
                              <Card.Text>
                                  All our products are 100% natural. We bring only the best quality products to market.
                                  Each beverage is made from the finest Super-grade bird nest, selected for superior
                                  quality, high protein content, long strands and overall wholesomeness. We never use preservatives.                              </Card.Text>
                          </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={6} md={4}>
                        <Card bg = 'secondary'>
                            <Card.Body>
                                <Card.Title>ECO-FRIENDLY</Card.Title>
                                <Card.Text>
                                    We harvest each bird nest after the eggs hatch and the baby birds mature, to ensure natural
                                    regeneration. We are deeply committed
                                    to maintaining a sustainable environment for the birds which provide us with such treasured deli                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4}>
                        <Card bg = 'secondary'>
                            <Card.Body>
                                <Card.Title>HARVESTED WITH CARE</Card.Title>
                                <Card.Text>
                                    All our products are made with raw, natural material. We have our own bird nest houses
                                    that we harvest periodically as well as dependable supply partners to meet market demand. Our cleaning
                                    operation is done in-house by our own staff in Indonesia.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}

export default About;
