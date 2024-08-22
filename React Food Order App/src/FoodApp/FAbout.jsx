import React, { useState } from 'react'
import {Col, Container,Row} from 'react-bootstrap';
import "./FAbout.css"

function FAbout() {
  return (
    <Container fluid className="Fabout mt-1">
        <Row className='m-0 p-0'>
            <Col lg={6} md={7} className='mt-5 pt-5' >
                        <img src="https://t4.ftcdn.net/jpg/07/01/58/07/360_F_701580770_kgHVtvnfVJJ8Q9C3l0lmqHCdWdgfscfM.jpghttps://t4.ftcdn.net/jpg/07/01/58/07/360_F_701580770_kgHVtvnfVJJ8Q9C3l0lmqHCdWdgfscfM.jpg"
                            alt="moms"
                            class="d-flex align-items-center justfiy-content-center ms-5 mb-5 mt-5 img-fluid"/>
            </Col>
            <Col lg={5} md={6} className='my-4 pt-2' >
            <h1 className="mt-3 mb-3 text-center">About Us</h1>
                         <p>Tasty Twisters was Established in the year 2023. Get Customized food menus with affordable price
                            list. From north indian to south indian food menus and dishes, we deliver at its best
                            quality taste with soul touched taste. We make your day more delighted with our tasty,
                            delicious food services. Book Veg, Non-veg Buffet for lunch, dinner at cheap price. Our food
                            and recipe varies according to the event and the customer's choice. We plan recipes within
                            your budget and ensure that we deliver the tastiest dishes on your special occasion. Our
                            clients can avail a wide range of recipes with rich taste and each dish is prepared by the
                            most adroit cooks of our organization. We have earned accolades from our clients for
                            providing efficient and reliable catering services.Its name has become synonymous with
                            exclusive, high-quality and wholesome Vegetarian and Non-Vegetarian foods, including
                            Chettinad, Tandoor, North Indian dishes, and Chinese items.
                        </p>
            </Col>
        </Row>
    </Container>
  )
}

export default FAbout