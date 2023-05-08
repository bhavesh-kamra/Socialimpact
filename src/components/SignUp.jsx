import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import sec8img1 from "../assets/images/png/sec8img1.png"

const SignUp = () => {
  return (
    <section className=" py-5 bg_white">
      <Container>
        <Row className=" flex-column-reverse flex-md-row">
          <Col
            data-aos="fade-right"
            className=" mt-3 mt-lg-0 py-4 py-lg-0"
            md={12}
            lg={6}
          >
            <div className="  d-flex align-items-start justify-content-between flex-column">
              <h2 className=" fs_2xl clr_mainblack fw_800 ff_inter">
                Sign up for a nonprofit account on us.
              </h2>
              <p className=" fs_md  clr_grey2 fw_400 ff_inter">
                GitHub nonprofit accounts are designed for official nonprofit
                organizations that are non-government, non-academic,
                non-commercial, non-political in nature, and have no religious
                affiliation. Qualifying nonprofits are eligible for a Team
                account with unlimited private repositories and unlimited users.
              </p>

              <button className="cmn_btn border-0 clr_white c_pointer my-2">
                Request a free Team plan <span className=" ms-3">&gt;</span>
              </button>
              <p className=" ff_inter fw_00 fs_xsm clr_grey2  mt-4">
                Not a nonprofit? Submit a request for your social good project,
                and we’ll let you know if you qualify for a discount.
              </p>
            </div>
          </Col>
          <Col
            data-aos="fade-left"
            className=" text-center mt-3 mt-lg-0"
            md={12}
            lg={6}
          >
            <img
              className=" w-100 h-100 object_cover mx_600"
              src={sec8img1}
              alt="group"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SignUp