import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Input, InputGroup, Row } from "reactstrap";
import UserNav from "../navbar/UserNav";
import './home.css';
import AliceCarousel from 'react-alice-carousel';
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../api/api";
import Aos from "aos";
import Footer from "../footer/Footer";


function Home() {

    useEffect(() => {
        getCategory();
        getProduct();
        Aos.init({
            duration: 2000
        })
    }, [])

    const [categores, setCategory] = useState([]);
    const [product, setProduct] = useState([]);

    // category btn responsive
    const responsive = {
        0: { items: 2 },
        256: { items: 3 },
        512: { items: 4 },
        768: { items: 6 },
        1024: { items: 8 }
    }

    // card click restaurant
    function cardClick(id) {
        sessionStorage.setItem("productId", id);
        const pushRest = document.getElementById('plusRestaurant');
        pushRest.click();
    }

    // get category
    function getCategory() {
        axios.get(url + "category/").then(res => setCategory(res.data));
    }

    // get product
    function getProduct() {
        axios.get(url + "product/").then(res => setProduct(res.data));
    }

    return (
        <div>
            <Container>
                <Link to="/restaurant" id="plusRestaurant"></Link>
                <UserNav />    {/*navbar menu*/}

                {/* Home search */}
                <div className="p__main mt-4" data-aos="fade-down">
                    <InputGroup size="lg" className="w-75" data-aos="flip-left">
                        <Input placeholder="🔍Search..." />
                        <Button color="light border">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </Button>
                    </InputGroup>
                </div>

                {/* home category btn */}
                <div className="mt-5 home__categoryBtn">
                    <p className="fs-2 fw-bold" data-aos="fade-down-right">
                        Mahsulot Categoryalari
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" className="ms-2 text-success" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                        </svg>
                    </p>
                    <AliceCarousel
                        mouseTracking
                        items={categores.map((item, i) =>
                            <Button key={i}>{item.title}</Button>
                        )}
                        responsive={responsive}
                        disableButtonsControls
                        disableDotsControls
                        autoPlay
                        autoPlayInterval={1000} />
                </div>

                {/* card main */}
                <div className="mt-5">
                    <p className="fs-2 fw-bold ms-sm-1 mb-0 pt-3" data-aos="fade-down-right">
                        Barcha mahsulotlar
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" className="ms-2 text-success" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                        </svg>
                    </p>
                    <Row>
                        {product.map((item, i) =>
                            <Col md="4" className="gy-5 gx-4" key={i} onClick={() => cardClick(item.id)} data-aos="zoom-in-right">
                                <Card className="card-main">
                                    <img alt="cardImg" src={item.image} />
                                    <CardBody>
                                        <CardTitle className="fs-5 fw-bolder text-dark">
                                            {item.title}
                                        </CardTitle>
                                        <CardSubtitle className="mb-2 text-muted fw-light card-main__Subtitle">
                                            {item.description}
                                        </CardSubtitle>
                                        <CardText className="fw-bolder card-main__price">
                                            {item.price} (so'm)
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        )}
                    </Row>
                </div>
                <button className="home-btn__continue w-100 py-2 fw-medium rounded-4 mb-5">Qolganini ko'rish</button>
            </Container>
            <Footer />
        </div>
    );
}
export default Home;