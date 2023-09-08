import { Button, Card, CardBody, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import UserNav from "../navbar/UserNav";
import "./restaurant.css";
import AliceCarousel from 'react-alice-carousel';
import Aos from "aos";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../api/api";
import Footer from "../footer/Footer";

function Restaurant() {

    const [categores, setCategory] = useState([]);
    const [product, setProduct] = useState([]);
    const [products, setOneProduct] = useState({});

    useEffect(() => {
        getCategory();
        getProduct();
        getOneProduct();
        Aos.init({
            duration: 1500,
        });
    }, []);

    // category responsive
    const responsive = {
        0: { items: 2 },
        256: { items: 3 },
        512: { items: 4 },
        1024: { items: 5 }
    }

    // get category
    function getCategory() {
        axios.get(url + "category/").then(res => setCategory(res.data));
    }

    // get product
    function getProduct() {
        axios.get(url + "product/").then(res => setProduct(res.data));
    }

    // get sarlavha product
    function getOneProduct() {
        axios.get(url + "product/" + sessionStorage.getItem("productId") + "/").then(res => setOneProduct(res.data))
    }

    return (
        <div>
            <Container>
                <UserNav /> {/* navbar menu */}
                <Row className="mb-5 mt-4">
                    <Col md="9" className="gx-5">

                        {/* restaurant main sarlavha */}
                        <div className="restaurant-main" data-aos="zoom-in">
                            <div className="mt-5" style={{ backgroundImage: "url(" + products.image + ")" }}></div>
                        </div>
                        <div className="restaurant-main__text">
                            <p className="ms-5" data-aos="fade-down-right">
                                {products.title}
                            </p>
                            <span className="restaurant-main__p ms-5" data-aos="zoom-in-up">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 72 72">
                                        <path fill="#d0cfce" stroke="#d0cfce" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="m53.756 19.737l4.586-3.55l3.06 3.954l-4.253 3.291" />
                                        <path fill="#d0cfce" d="M31.313 7h11.008v6.294H31.313z" />
                                        <circle cx="36.821" cy="36.294" r="23" fill="#FFF" />
                                        <circle cx="36.821" cy="36.294" r="23" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                                        <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="m56.366 17.717l1.976-1.53l3.06 3.954l-1.832 1.418M32.321 9.727V7h9v2.893" />
                                        <circle cx="36.347" cy="16.982" r="1" />
                                        <circle cx="36.347" cy="55.024" r="1" />
                                        <ellipse cx="49.797" cy="22.553" rx=".988" ry="1.012" transform="rotate(-45.001 49.797 22.553)" />
                                        <ellipse cx="22.898" cy="49.453" rx=".988" ry="1.012" transform="rotate(-45.001 22.897 49.453)" />
                                        <circle cx="55.369" cy="36.003" r="1" />
                                        <circle cx="17.326" cy="36.003" r="1" />
                                        <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M36.84 35.91h-15.4m15.445.015l-10.89 10.89" />
                                        <ellipse cx="49.797" cy="49.453" rx="1.012" ry=".988" transform="rotate(-45.001 49.797 49.454)" />
                                        <ellipse cx="22.898" cy="22.553" rx="1.012" ry=".988" transform="rotate(-45.001 22.897 22.553)" />
                                    </svg>
                                </span>
                                <span className="ms-1 fs-5">30 - 60 daqiqa</span>
                            </span>
                        </div>
                        {/* end restaurant main sarlavha */}

                        {/* category btn */}
                        <AliceCarousel
                            mouseTracking
                            items={categores.map((item, i) =>
                                <Button className="categoryBtn" key={i}>{item.title}</Button>
                            )}
                            responsive={responsive}
                            disableButtonsControls
                            disableDotsControls
                            autoPlay
                            autoPlayInterval={1000} />
                        {/* end category btn */}

                        <p className="mt-5 mb-0 ms-1 fw-bold fs-3" data-aos="fade-right">
                            Mahsulotlar
                        </p>

                        {/* card product */}
                        <Row>
                            {product.map((item, i) =>
                                <Col md="4" className="g-4" data-aos="flip-left" duration="4000" key={i}>
                                    <Card className="res-main__card">
                                        <img alt="cardImgRes" src={item.image} />
                                        <CardBody>
                                            <CardTitle className="res-main__cardTitle fw-bolder text-dark">
                                                {item.title}
                                            </CardTitle>
                                            <CardText>
                                                {item.price} (so'm)
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )}
                        </Row>
                        {/* end card product */}
                    </Col>

                    {/* savat  */}
                    <Col md="3" className="gx-3">
                        <div className="restaurant-savat">
                            <p className="text-dark fs-3 fw-bold">
                                Savat
                                <span className="float-end">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                    </svg>
                                </span>
                            </p>
                            <p className="fw-bolder text-center mt-5 pt-3 text-body-tertiary">
                                Keling, shunday qilaylik.
                            </p>
                            <Row>
                                <Col className="text-start col">
                                    <p className="fw-semibold res-savat__text">
                                        Yetkazish vaqti
                                    </p>
                                    <p className="fw-bold fs-5">
                                        30-60 daqiqa
                                    </p>
                                </Col>
                                <Col className="text-end">
                                    <p className="fw-semibold res-savat__text">
                                        Jami to'lov
                                    </p>
                                    <p className="fw-bold fs-5">
                                        {products.price} (so'm)
                                    </p>
                                </Col>
                            </Row>
                            <p className="text-light bg-body-secondary fs-5 text-center rounded-4 pt-2 pb-2">
                                Ro'yxatdan o'chirilish
                            </p>
                        </div>
                    </Col>
                    {/* end savat */}
                </Row>
            </Container>
            <Footer />
        </div>
    )
}
export default Restaurant;