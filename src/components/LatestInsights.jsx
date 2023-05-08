import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import sec6img1 from "../assets/images/png/sec6img1.png"
import sec6img2 from "../assets/images/png/sec6img2.png"

const LatestInsights = () => {
  return (
    <section className=" bg_mainblack position-relative">
      <Container>
        <img
          className=" position-absolute sec6up_vector"
          src={sec6img1}
          alt="vector"
        />
        <div className=" py-lg-5 py-md-3 py-2"></div>
        <h2 className=" ff_inter fw_800 fs_xl  clr_white py-3 mb-3">
          Latest insights
        </h2>
        <div className=" py-lg-5">
          <Row>
            <Col data-aos="fade-right" className=" pe-5 mt-5" lg={4} md={6}>
              <h2 className=" fs_xsm fw_400 ff_inter clr_grey1 mb-3">
                Tech for Social Good
              </h2>
              <h2 className=" fs_lg fw_600 ff_inter clr_white mb-3">
                Apply now to our Open Source Community Manager Program to
                support DPGs!
              </h2>
              <h2 className=" fs_xsm fw_400 ff_inter clr_grey1 mb-4">
                Tech for Social Good is excited to announce the launch of our
                new Activating Developers initiative, and our new OS Community
                Manager Program to support digital public goods.
              </h2>
              <a className=" ff_inter fw_600 clr_white" href="">
                Read More <span className=" ms-2"> &#62;</span>
              </a>
            </Col>
            <Col className=" pe-5 mt-5" lg={4} md={6}>
              <h2 className=" fs_xsm fw_400 ff_inter clr_grey1 mb-3">
                Tech for Social Good
              </h2>
              <h2 className=" fs_lg fw_600 ff_inter clr_white mb-3">
                Social Impact, Tech for Social Good at CSW 2023
              </h2>
              <h2 className=" fs_xsm fw_400 ff_inter clr_grey1 mb-lg-5 mb-4">
                Read about the two CSW67 side-events Social Impact, Tech for
                Social Good is hosting.
              </h2>
              <div className=" pt-lg-4">
                <a className=" ff_inter fw_600 clr_white" href="">
                  Read More <span className=" ms-2"> &#62;</span>
                </a>
              </div>
            </Col>
            <Col data-aos="fade-left" className=" pe-5 mt-5" lg={4} md={6}>
              <h2 className=" fs_xsm fw_400 ff_inter clr_grey1 mb-3">
                Tech for Social Good
              </h2>
              <h2 className=" fs_lg fw_600 ff_inter clr_white mb-3">
                How Tech for Social Good supported the Sustainable Development
                Goals (SDGs) in 2022
              </h2>
              <h2 className=" fs_xsm fw_400 ff_inter clr_grey1 mb-4">
                Read about how Tech for Social Good mapped its time to the SDGs
                in 2022
              </h2>
              <a className=" ff_inter fw_600 clr_white" href="">
                Read More <span className=" ms-2"> &#62;</span>
              </a>
            </Col>
          </Row>
        </div>
        <div className=" py-3 py-md-4 py-lg-5"></div>
        <img
          className=" position-absolute sec6down_vector"
          src={sec6img2}
          alt="vector"
        />
      </Container>
    </section>
  );
}

export default LatestInsights