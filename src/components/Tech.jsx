import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import sec4img1 from "../assets/images/png/sec4img1.png"

const Tech = () => {
  return (
    <section className=" py-md-5 bg_white">
      <Container>
        <Row className=" flex-column-reverse flex-lg-row">
          <Col
            data-aos="fade-right"
            className=" mt-3 py-4 py-lg-0"
            md={12}
            lg={6}
          >
            <div className="d-flex flex-column justify-content-between align-items-start h-100">
              <h6 className=" fs_sm  clr_grey2 fw_400 ff_inter mb-3">
                Our work
              </h6>
              <h2 className=" fs_2xl clr_mainblack fw_800 ff_inter">
                Tech for Social Good
              </h2>
              <p className=" fs_md  clr_grey2 fw_400 ff_inter">
                Tech for Social Good (TSG) leverages GitHub’s platform and
                products, community and people to strengthen the social sector’s
                efforts to achieve the Sustainable Development Goals. Its major
                programs focus on research, community building, and Skills-Based
                Volunteering.
              </p>
              <p className=" ff_inter fw_800 fs_sm clr_blue">
                New! We recently launched an Open Source Community Manager
                Program to support DPGs. Read more here.
              </p>
              <button className="cmn_btn border-0 clr_white c_pointer">
                Learn more about TSG <span className=" ms-3">&gt;</span>
              </button>
            </div>
          </Col>
          <Col
            className=" text-center mt-3  "
            data-aos="fade-left"
            md={12}
            lg={6}
          >
            <img
              className=" w-100 h-100  object_cover mx_600"
              src={sec4img1}
              alt="women"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Tech