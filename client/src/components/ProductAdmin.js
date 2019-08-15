import React, { Component, Fragment } from 'react';
import Product from './Product';
import axios from "axios";
import { Form, Button,Container,Row } from "react-bootstrap";
const config = require('../config.json');



export default class ProductAdmin extends Component {

  state = {
      newProduct:{
        "title":"",
        "body":""
      },
      products: []
  }


    handleAddProduct = async (event) => {
    event.preventDefault(event);
      try{
        const params = {
            "title":this.state.newProduct.title,
            "body":this.state.newProduct.body,
        }

        await axios.post(`${config.apiGateway.URL}/products`, params)
        this.setState({products:[...this.state.products, this.state.newProduct]})
        this.setState({newProduct:{'title':'','body':''}})
      }catch(err){
        console.log(`An error has occured:${err}`)
      }
  }

  handleUpdateProduct = async (id,title,body) => {
      try{
          const params = {
              "title":title,
              "body":body,
          }
          await axios.put(`${config.apiGateway.URL}/products/${id}`, params)
          const productToUpdate = [...this.state.products].find(currentProduct=>currentProduct.id= id);
          console.log(productToUpdate)
          const updatedProducts = [...this.state.products].filter(currentProduct =>currentProduct.id !== id);
          productToUpdate.title = title;
          productToUpdate.body = body;
          updatedProducts.push(productToUpdate);
          this.setState({products:updatedProducts})
      }catch(err){
          console.log(`An error has occured:${err}`)
      }
  }

  handleDeleteProduct = async(id, event) => {
    event.preventDefault();
      try{
          await axios.delete(`${config.apiGateway.URL}/products/${id}`);
        const updatedProducts = [...this.state.products].filter(currentProduct => currentProduct.id !== id);
        this.setState({products:updatedProducts})
      }catch (err) {
        console.log(`Unable to delete product:${err}`)
      }
  }

  fetchProducts = async() => {
    try{
      const result = await axios.get(`${config.apiGateway.URL}/products`)
      const products = result.data;
      this.setState({products:products})
    } catch (err){
      console.log(`An error has occured; ${err}`)
    }
  }

  onAddProductTitleChange = event => this.setState({ newProduct: { ...this.state.newProduct, "title": event.target.value } });
  onAddProductBodyChange = event => this.setState({ newProduct: { ...this.state.newProduct, "body": event.target.value } })

  componentDidMount = () => {
    this.fetchProducts();
  }

  render() {
    return (
      <Fragment>
          <h1 className="text-center"> Add New Item Here:</h1>
          <Form onSubmit={event => this.handleAddProduct(event)} className = "admin-form">
              <Form.Group controlId="formBasicEmail">
                  <Form.Label>Item Title</Form.Label>
                  <Form.Control
                      type="text"
                      placeholder="Title"
                      value={this.state.newProduct.title}
                      onChange={this.onAddProductTitleChange}
                  />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                  <Form.Label>Item Description</Form.Label>
                  <Form.Control
                      type="text"
                      placeholder="Description"
                      value={this.state.newProduct.body}
                      onChange={this.onAddProductBodyChange}
                  />
              </Form.Group>
              <Button variant="primary" type="submit">Submit</Button>
          </Form>
          <hr/>
          <Container>
            <Row className="justify-content-md-center">
              {
                  this.state.products.map((product) =>
                  <Product
                          isAdmin={true}
                          handleUpdateProduct={this.handleUpdateProduct}
                          handleDeleteProduct={this.handleDeleteProduct}
                          title={product.title}
                          body={product.body}
                          id={product.id}
                          key={product.id}
                      />)
              }
            </Row>
          </Container>
      </Fragment>
    )
  }
}
