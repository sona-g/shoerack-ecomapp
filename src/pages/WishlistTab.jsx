import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const WishlistTab = (props) => {
    const wishlist = props;
    console.log(wishlist);
    if (wishlist.length === 0) {
        return (
          <div>
            <p style={{textAlign: 'center'}}>CREATE A WISHLIST!</p>
          </div>
        );
      }
    return (
        <div>
            <h3>WISHLIST</h3>
            {wishlist.map((liked) => {
                    const imgUrl = "https://" + liked.imageUrl;
                    return (
                        <div className="product-container" key={liked.id}>
                            <Card variant="top" style={{width: '18rem' }}>
                                <Link to={`/pages/products/${liked.id}`}><Card.Img id={liked.id} src={imgUrl} alt="" /></Link>
                                <Card.Body>
                                    <Card.Title>
                                        <span>{liked.name}</span>
                                        <span>{liked.price.current.text}</span>
                                    </Card.Title>
                                    <Card.Subtitle style={{ padding: 10 }}>
                                        <span>{liked.isSellingFast && (<div>Selling Fast</div>)}</span>
                                        <span>{(liked.price.current.value < 60) ? (<div>SALE</div>) : (<div>NEW ARRIVAL</div>)}</span>
                                    </Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
        </div>
    );
};

export default WishlistTab;