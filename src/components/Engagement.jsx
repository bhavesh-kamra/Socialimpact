import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import sec7img1 from "../assets/images/png/sec7img1.png";

const Engagement = () => {
  return (
    <section className=" py-5 bg_white">
      <Container>
        <div className=" pt-lg-5">
          <Row className=" align-items-center py-5">
            <Col
              data-aos="fade-right"
              className=" text-center mt-3 "
              md={6}
              lg={6}
            >
              <img className=" w-100" src={sec7img1} alt="" />
            </Col>
            <Col
              data-aos="fade-left"
              className=" mt-3 py-4 py-lg-0 ps-lg-5"
              md={6}
              lg={6}
            >
              <h2 className=" fs_2xl clr_mainblack fw_800 ff_inter mb-5">
                Engagement Opportunities
              </h2>
              <p className=" fs_lg  clr_mainblack fw_600 ff_inter">
                Digital Public Goods Open Source Community Manager
              </p>
              <h2 className=" fs_xxsm clr_grey3 fw_400 ff_inter mb-4">
                Applications are now open!
              </h2>
              <a className="  fs_xsm  ff_inter fw_600 clr_mainblack" href="#">
                Read and apply <span className=" ms-3"> &#62;</span>
              </a>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Engagement