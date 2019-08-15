import React, {Component} from 'react';
import { Container, Navbar } from "react-bootstrap"

class Footer extends Component {
    render() {
        return (
            <Navbar fixed = "bottom" expand="lg" variant="light" bg="light" className = "justify-content-right">
                <Container>
                    <Navbar.Brand href="#" >Golden Swallow 金燕堂 2019</Navbar.Brand>
                </Container>
            </Navbar>
        );
    }
}

export default Footer;
