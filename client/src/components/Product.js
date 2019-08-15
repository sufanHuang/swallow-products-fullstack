import React, { Component, Fragment }  from 'react';
import { Button, Card, Col } from "react-bootstrap"

export default class Product extends Component {

  state = {
    isEditMode: false,
    updatedProductTitle: this.props.title,
    updatedProductBody:this.props.body
  }

  handleProductEdit = event => {
    event.preventDefault();
    this.setState({ isEditMode: true });
  }

  handleEditSave = event => {
    event.preventDefault(event);
    this.setState({ isEditMode: false });
    this.props.handleUpdateProduct(this.props.id,this.state.updatedProductTitle,this.state.updatedProductBody);
  }

  onAddProductTitleChange = event => this.setState({ "updatedProductTitle": event.target.value });
  onAddProductBodyChange = event => this.setState({ "updatedProductBody": event.target.value });


    render() {
    return (
      <Col>
        <Card key={this.props.id} className = 'product-card' style ={{ width:'18rem',margin:'0.2rem'}}>
        {
          this.state.isEditMode
          ? <Card.Body>
              <Card.Title>Edit product title</Card.Title>
              <input
                className="input is-medium"
                type="text"
                placeholder="Enter Title"
                value={this.state.updatedProductTitle}
                onChange={this.onAddProductTitleChange}
              />
              <p>Edit product</p>
              <input
                  className="input"
                  type="text"
                  placeholder="Description"
                  value={this.state.updatedProductBody}
                  onChange={this.onAddProductBodyChange}
              />
              <p className="product-id">id: { this.props.id }</p>
              <button type="submit"
                className="button"
                onClick={ this.handleEditSave }
              >save</button>
            </Card.Body>
          : <Card.Body>
              <Card.Title className="product-title">{ this.props.title }</Card.Title>
              <Card.Title className="product-body">{ this.props.body }</Card.Title>
              <Card.Subtitle className="product-id">id: { this.props.id }</Card.Subtitle>
            </Card.Body>
        }
        {
            this.props.isAdmin &&
            <Fragment>
                <Button  variant ="primary" size= 'sm' href="/" onClick={this.handleProductEdit} className = "admin-button">Edit</Button>
                <Button variant ="danger" size= 'sm' onClick={event => this.props.handleDeleteProduct(this.props.id, event)} className = "admin-button">Delete</Button>
            </Fragment>
        }
        </Card>
      </Col>
    )
  }
}
