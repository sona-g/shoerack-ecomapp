import React from 'react';
import './products.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi'
//import Filters from '../components/Filter'

const Products = (props) => {
    const [data, setData] = useState([]);
    const {wishlistProducts, wishlist} = props;


    const url = 'https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US';

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
                .then(data => setData(data.products))
                .catch(err => console.error('error:' + err));
        }
        getProducts();
    }, []);


    //console.log(data);
    //console.log(searchInput);
    // console.log(data.id)
    // console.log(data[0].isSellingFast)


    const ProductCards = () => {

        return (
            <>
                <div className="card-columns">
                    {data.map((detail) => {
                        const imgUrl = "https://" + detail.imageUrl;
                        return (
                            <div className="product-container" key={detail.id}>
                                <Card variant="top" style={{ width: '18rem' }}>
                                    <Link to={`/pages/products/${detail.id}`}><Card.Img id={detail.id} src={imgUrl} alt="" /></Link>
                                    <Card.Body>
                                        <Card.Title>
                                            <span>{detail.name}</span>
                                            <span>{detail.price.current.text}</span>
                                            <HiOutlineHeart onClick={() => {wishlistProducts(wishlist.includes(detail.id) ? <HiHeart /> : <HiOutlineHeart />)}}/>
                                            </Card.Title>
                                        <Card.Subtitle style={{ padding: 10 }}>
                                            <span>{detail.isSellingFast && (<div>Selling Fast</div>)}</span>
                                            <span>{(detail.price.current.value < 60) ? (<div>SALE</div>) : (<div>NEW ARRIVAL</div>)}</span>
                                        </Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })}
                </div>
                <div>
                    {/* {searchInput.map((detail) => {
                    const imgUrl = "https://" + detail.imageUrl;
                    return (
                        <div className="product-container" key={detail.id}>
                            <Card variant="top" style={{width: '18rem' }}>
                                <Link to={`/pages/Products/${detail.id}`}><Card.Img id={detail.id} src={imgUrl} alt="" /></Link>
                                <Card.Body>
                                    <Card.Title>
                                        <span>{detail.name}</span>
                                        <span>{detail.price.current.text}</span>
                                    </Card.Title>
                                    <Card.Subtitle style={{ padding: 10 }}>
                                        <span>{detail.isSellingFast && (<div>Selling Fast</div>)}</span>
                                        <span>{(detail.price.current.value < 60) ? (<div>SALE</div>) : (<div>NEW ARRIVAL</div>)}</span>
                                    </Card.Subtitle>
                                </Card.Body>
                            </Card>
                            </div>
                    )
                })} */}
                </div>
            </>
        )

    }

    return (
        <div>
            {<ProductCards />}
        </div>
    );
};

export default Products;