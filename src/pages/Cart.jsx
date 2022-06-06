import React from "react";
import { Link } from 'react-router-dom'
//import { useCart, useDispatchCart } from "../components/CartProvider";
import { Button, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { AiFillDelete } from "react-icons/ai"
import './cart.css'

const Cart = (props) => {
  const {cartItems, toAdd, onRemove} = props;
  console.log(cartItems);
  // const product = useCart();
  // console.log(product)
  // const dispatch = useDispatchCart();
  // const [total, setTotal] = useState();

  // const handleRemove = (index) => {
  //   dispatch({ type: "REMOVE", index });
  // };

//   const handleQty = (id) => {
// dispatch({type: "CHANGE_QTY", id });
//   };

  if (cartItems.length === 0) {
    return (
      <div>
        <p style={{textAlign: 'center'}}>Cart is empty</p>
      </div>
    );
  }

  const arrayPrice = cartItems.map((value) => {
    return (
      value?.price.current.value
    )
  });
  const totalPrice = arrayPrice.reduce((x, y) => x + y, 0);

  return (
    <div className="cart">
      <div className="cart-container">
        {/* <p>Total price: ${totalPrice}</p> */}
        <ListGroup>
          {cartItems.map((cartItem) => {
            const imageUrl = "https://" + cartItem?.media?.images?.[0]?.url;
            const price = cartItem?.price.current.value;
            return (
              <ListGroup.Item key={cartItem.id}>
                <Row>
                  <Col md={2}>
                  <Image src={imageUrl} alt={cartItem.brand.name} fluid rounded/>
                  </Col>
                  <Col md={2}><span>{cartItem.brand.name}</span></Col>
                  <Col md={2}><span> ${price}</span></Col>
                  {/* <Col md={2}><Button type="button" variant="light" onClick={() => toAdd(cartItem)}>+</Button></Col> */}
                  <Col md={2}>
                  <Button type="button" variant="light" onClick={() => onRemove(cartItem)}>
                    <AiFillDelete fontSize="20px" /></Button>
                  </Col>
                </Row>
                </ListGroup.Item>
            )

          })}
        </ListGroup>
      </div>
<div className="summary">
<span className="title">Subtotal ({cartItems.length}) items</span>
<span style={{fontWeight: 700, fontSize: 20 }}>Total: ${totalPrice.toFixed(2)}</span>
<Link to="/pages/login"><Button type="button" variant="light" disabled={cartItems.length === 0}>Proceed to Checkout</Button></Link>
</div>
    </div>
  );
};


export default Cart;