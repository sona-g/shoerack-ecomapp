import './productDetails.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap'
// import { useDispatchCart } from '../components/CartProvider';
// import { useCart } from '../components/CartProvider';

const ProductDetails = (props) => {
    const { id } = useParams();
    const [productInfo, setProductInfo] = useState([]);
    const { toAdd } = props;
    // const dispatch = useDispatchCart();

    // const addToCart = (item) => {
    //   dispatch({ type: "ADD", item });
    // };
    // console.log(useCart());



    const url = `https://asos2.p.rapidapi.com/products/v3/detail?id=${id}&lang=en-US&store=US&sizeSchema=US&currency=USD`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'asos2.p.rapidapi.com',
            'X-RapidAPI-Key': '53e9918fcbmsh5b0e6c352fd7d0ap103430jsn0471ab5a76e8'
        }
    };

    useEffect(() => {
        const getProducts = async () => {
            await fetch(url, options)
                .then(res => res.json())
                .then(productInfo => setProductInfo(productInfo))
                .catch(err => console.error('error:' + err));
        }
        getProducts();
    }, []);
    console.log(productInfo);

    const SelectedProduct = () => {
        const imageUrl = "https://" + productInfo?.media?.images?.[0]?.url
        return (
            <div className="single-product">
                <Card>
                    <Card.Img variant="top" src={imageUrl} alt={productInfo?.name} />
                    <Card.Body>
                        <Card.Title>{productInfo?.brand?.name}</Card.Title>

                        <Card.Subtitle style={{ paddingBottom: 10 }}>
                            <span>{productInfo?.variants?.[0]?.displaySizeText}</span>
                            <span>{productInfo?.variants?.[0]?.colour}</span>
                            <span>{productInfo?.variants?.[0]?.price?.current?.text}</span>
                        </Card.Subtitle>
                        <p>{productInfo?.name} </p>
                        <p>{productInfo?.productType?.name}</p>
                        <Button variant="outline-dark" onClick={() => toAdd(productInfo)}>ADD TO CART</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
    return (
        <div>
            {<SelectedProduct />}
        </div>
    );
};

export default ProductDetails;