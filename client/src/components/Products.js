import React, { Component, Fragment } from 'react';
import axios from "axios";
import { Card, Container, Row, Col } from "react-bootstrap";
const config = require('../config.json');

export default class Products extends Component {

  state = {
    newProduct: null,
    products: []
  }

  fetchProducts = async () => {
      try {
          const result = await axios.get(`${config.apiGateway.URL}/products`);
          console.log(result)
          const products = result.data;
          this.setState({ products: products });
      } catch (err) {
          console.log(`An error has occurred: ${err}`);
      }
  }

  componentDidMount = () => {
    this.fetchProducts();
  }

  render() {
    return (
      <Fragment>
          <Container>
            <h1>Golden Swallow Products</h1>
            <br />
              <Row className="justify-content-md-center">
              {
                  this.state.products && this.state.products.length > 0
                      ? this.state.products.map(product => {
                          return(
                              <Col key = {product.id}>
                                  <Card  style={{ width: '18rem', margin: "1rem"}} className ="product-card">
                                      <Card.Body>
                                          <Card.Title>{ product.title }</Card.Title>
                                          <Card.Text> { product.body }</Card.Text>
                                      </Card.Body>
                                  </Card>
                              </Col>
                          )
                      })
                      : <div>No products available</div>
              }
              </Row>
          </Container>
      </Fragment>
    )
  }
}
