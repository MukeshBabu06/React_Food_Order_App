import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Fcontact.css";

function Fcontact() {
  return (
    <Container
      fluid
      className="Fcontactt mt-1 "
    >
      <Row className="mt-5 p-0">
        {/* <div className="Row d-flex align-items-center"> */}
        <Col lg={6} md={7} className='mt-5 pt-5' >
          <img
            src="https://img.freepik.com/premium-photo/top-view-crispy-fried-chicken-white-plate-wooden-background_840989-5491.jpghttps://img.freepik.com/premium-photo/plate-fried-chicken-wings-with-black-background_25996-5235.jpg"
            alt="moms"
            class="d-flex align-items-center justify-content-center ms-5 mb-5 mt-3 img-fluid"
          />
        </Col>
        <Col lg={5} md={6} className='my-4 pt-3' >
          <h1 className="mt-3 mb-3 text-center">Contact information</h1>
          <form action="" className="Fform-cont">
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Name*"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Email*"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                name="mobile"
                id="mobile"
                className="form-control"
                placeholder="Phone number*"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                className="form-control"
                placeholder="Write an optional message"
                required
              ></textarea>
            </div>
            <div className="form-check">
              <input type="checkbox" id="terms" class="form-check-input" />
              <label for="terms" className="form-check-label">
                By providing your contact details, you agree to our <br />
                <a href="">Privacy Policy</a>
              </label>
            </div>
            <div className="Fbttn">
              <button className="btn btn-light" type="submit">
                Submit
              </button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Fcontact;
