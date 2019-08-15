import React from 'react'
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faKiwiBird, faUtensilSpoon } from '@fortawesome/free-solid-svg-icons'


export default function HomeContent() {
  return (
    <div className="container">
        <Card bg="secondary" text="white">
            <Link to  = '/products'> <Card.Header ><FontAwesomeIcon icon={faShoppingCart}/>  SHOP</Card.Header></Link>
            <Card.Body>
                <Card.Text>
                    Golden Swallow offers only the highest quality, authentic birds nests.
                    Shop our most popular products, and view our full range of dry bird nest goods.
                </Card.Text>
            </Card.Body>
        </Card>
        <br />

        <Card bg="info" text="white">
            <Link to  = '/about'><Card.Header><FontAwesomeIcon icon={faKiwiBird}/>  About</Card.Header></Link>
            <Card.Body>
                <Card.Text>
                    Loaded with its many health benefits, our edible birds nest is created naturally by the swiftlet birds of Southeast Asia.
                    Birds nest has been consumed as a delicacy in China and surrounding Asian countries for over 400 years.
                </Card.Text>
            </Card.Body>
        </Card>
        <br />

        <Card bg="dark" text="white">
            <Link to  = '/Recipes'><Card.Header><FontAwesomeIcon icon={faUtensilSpoon}/>  Recipes</Card.Header></Link>
            <Card.Body>
                <Card.Text>
                    You can enjoy our birds nest beverages right out of the box, or dress them up!
                    From soups to pastries and more, our recipes will help you get the most out of your nests.
                </Card.Text>
            </Card.Body>
        </Card>
        <br />
    </div>
  )
}
