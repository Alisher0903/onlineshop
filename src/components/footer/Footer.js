import { Button, Col, Container, Row } from "reactstrap";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="container-fluid footer-main">
            <Container>
                <Row>
                    {/* Brend and links */}
                    <Col>
                        <p className="fw-bolder fs-4 footer-brend"><Link to="/">Product__Store</Link></p>
                        <Row className="mt-5 mb-5 footer-link">
                            <Col className="col-4">
                                <p><Link>Hamkorlar</Link></p>
                                <p><Link>Yetkazib berish</Link></p>
                                <p><Link>product store</Link></p>
                                <p><Link>Kontaktlar</Link></p>
                            </Col>
                            <Col>
                                <p><Link>Savol va Javob</Link></p>
                                <p><Link>Taklif</Link></p>
                                <p><Link>To'lov</Link></p>
                                <p><Link>Ishlar</Link></p>
                            </Col>
                        </Row>
                    </Col>
                    {/* End brend and links */}

                    <Col className="mt-5 mb-5">
                        {/* footer btn */}
                        <div className="float-end">
                            <Button color="dark" className="app-store__btn rounded-4 fw-medium">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 100 100">
                                    <g fill="white" fill-rule="evenodd" clip-rule="evenodd">
                                        <path d="M82.047 36.841c-4.124-5.139-9.91-8.112-15.372-8.112c-7.226 0-10.279 3.433-15.292 3.433c-5.167 0-9.096-3.428-15.346-3.428c-6.139 0-12.666 3.729-16.804 10.102c-5.823 8.962-4.837 25.824 4.605 40.193C27.215 84.167 31.725 89.945 37.622 90c5.241.048 6.724-3.343 13.835-3.383c7.112-.039 8.457 3.42 13.697 3.371c5.897-.056 10.655-6.454 14.03-11.593c2.419-3.681 3.32-5.541 5.199-9.702c-13.651-5.158-15.846-24.447-2.336-31.852z" />
                                        <path d="M61.194 22.988c2.625-3.368 4.619-8.126 3.895-12.988c-4.288.296-9.304 3.023-12.232 6.58c-2.658 3.228-4.853 8.015-3.999 12.668c4.681.145 9.525-2.652 12.336-6.26z" />
                                    </g>
                                </svg>
                                App Store
                            </Button>
                            <Button color="dark" className="app-store__btn ms-4 rounded-4 fw-medium">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 24 24">
                                    <path fill="white" d="M3.61 1.814L13.793 12L3.611 22.186a.996.996 0 0 1-.61-.92V2.735a1 1 0 0 1 .609-.921ZM14.5 12.707l2.302 2.302l-10.937 6.333l8.635-8.635Zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.207 12l2.492-2.491ZM5.865 2.658L16.803 8.99L14.5 11.293L5.865 2.658Z" />
                                </svg>
                                Google Play
                            </Button>


                        </div>
                        {/* end footer btn */}

                        {/* ijtimoiy tarmoqlar */}
                        <div className="social-networks">
                            {/* facebook */}
                            <Link>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                                </svg>
                            </Link>
                            {/* telegram */}
                            <Link>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12 4a8 8 0 1 0 8 8a8 8 0 0 0-8-8Zm3.93 5.48l-1.31 6.19c-.1.44-.36.54-.73.34l-2-1.48l-1 .93a.51.51 0 0 1-.4.2l.14-2l3.7-3.35c.17-.14 0-.22-.24-.08l-4.54 2.85l-2-.62c-.43-.13-.44-.43.09-.63l7.71-3c.38-.11.7.11.58.65Z" />
                                </svg>
                            </Link>
                            {/* instagram */}
                            <Link>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" stroke-width="1.5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z" />
                                        <path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m17.5 6.51l.01-.011" />
                                    </g>
                                </svg>
                            </Link>
                        </div>
                        {/* end ijtimoiy tarmoqlar */}

                        {/* eng so'ngi text */}
                        <p className="text">
                            © 2015-2023 Bringo. Служба заказов и доставки еды.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}
export default Footer;