import React from 'react';
import { Container, Navbar, FormControl, Nav, Dropdown, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { HiHeart } from 'react-icons/hi';
import './header.css'



const Header = (props) => {
    const { cartItems, toAdd, onRemove, 
        // data, setData, setSearchInput 
    } = props;


    // const search = async (index) => {
    //     const response = await fetch(`https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=${index}&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US`, {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Host': 'asos2.p.rapidapi.com',
    //             'X-RapidAPI-Key': '53e9918fcbmsh5b0e6c352fd7d0ap103430jsn0471ab5a76e8'
    //         }
    //     });
    //     const data = await response.json();
    //     setSearchInput(data);
    // };

    // const handleSearch = () => {
    //     search(data);
    // };
    // const searchItems = (searchValue) => {
    //     setSearchInput(searchValue)
    //     console.log(searchValue)
    //     const filteredData = data.filter((item) => {
    //         return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
    //     })
    // }

    // console.log(searchItems())


    // const items = useCart();
    // const dispatch = useDispatchCart();
    // console.log(items);

    // const handleRemove = (index) => {
    //     dispatch({ type: "REMOVE", index });
    // };

    // const itemsList = items.map((item) => {
    //     const imageUrl = "https://" + item?.media?.images?.[0]?.url;
    //     return (
    //     <span className="dropdown-item" key={item?.id}> 
    //     <img className="dropdown-img" src={imageUrl} alt="shoes"/>
    //     <div className="dropdown-detail">
    //         <span>{item.brand.name}</span>
    //         <span>${item.price.current.value}</span>
    //     </div>
    //     <AiFillDelete fontSize="20px" style={{cursor: "pointer"}}
    //     onClick={() => handleRemove()}/>
    //     </span>
    //     )
    // })

    return (
        <div>
            <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
                <Container>
                    <Navbar.Brand>
                        <Link to="/"><img className="home" src={require("../assets/home.png")} alt="" /></Link>
                        <Link to="/pages/products" className="nav-collection">LOOKS</Link>
                    </Navbar.Brand>
                    <Navbar.Text className="search">
                        <FormControl style={{ width: 500 }} placeholder="Search a product"
                            className="m-auto"
                            aria-label="Search"
                            // type="search"
                            // id="index"
                            // name="index"
                            // value={''}
                            // onChange={(e) => setData(e.target.value)}
                        />
                    </Navbar.Text>
                    {/* <Button onClick={handleSearch}>O</Button> */}
                    <Nav>
                    <Link to="/pages/wishlist" className="nav-collection"  style={{ cursor: "pointer" }}><HiHeart size={42}/></Link>
                        <Dropdown alignRight>
                            <Dropdown.Toggle variant="dark">
                                <FaShoppingCart color="white" fontSize="25px" />
                                <Badge>{cartItems.length}</Badge>
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{ minwidth: 370 }}>
                                {cartItems.length > 0 ? (
                                    <div>
                                        {cartItems.map((item) => {
                                            return (
                                            <span className="dropdown-item" key={item?.id}>
                                                <img className="dropdown-img" src={`https://${item?.media?.images?.[0]?.url}`} alt={"shoes"} />
                                                <div className="dropdown-detail">
                                                    <span>{item.brand.name}</span>
                                                    <span>${item.price.current.value}</span>
                                                </div>
                                                {/* <Button onClick={() => toAdd(item)}>+</Button> */}
                                                <AiFillDelete fontSize="20px" style={{ cursor: "pointer" }}
                                                    onClick={() => onRemove(item)} />
                                            </span>
                                            )
                                        })}
                                        <Link to="/pages/cart"><Button variant="dark" style={{ width: "95%", margin: "0 10px" }}>GO TO CART</Button></Link>
                                    </div>
                                ) : (
                                    <span style={{ padding: 10 }}>Cart is Empty!</span>
                                )}

                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;