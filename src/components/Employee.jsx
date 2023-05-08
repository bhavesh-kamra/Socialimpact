import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import sec5img1 from "../assets/images/png/sec5img1.png"
import sec5img2 from "../assets/images/png/sec5img2.png"
import sec5img3 from "../assets/images/png/sec5img3.png"

const Employee = () => {
  return (
    <section>
      <Container>
        <div className=" text-start  m-auto py-5 mx_570">
          <h2 className=" fw_800 ff_inter fs_2xl clr_mainblack">
            Employee Giving
          </h2>
          <p className="fw_400 ff_inter fs_md clr_grey2 pb-lg-5">
            Employee Giving leverages the power of employee charitable
            donations, volunteerism, and mentorship to help social sector
            partners reach those in need.
          </p>
        </div>
        <Row className=" justify-content-between">
          <Col data-aos="fade-right" lg={4} sm={6}>
            <h2 className=" clr_mainblack fw_800 fs_3xl ff_inter">2,200+</h2>
            <p className=" fs_xsm ff_inter  fw_400 clr_grey2 mx_320">
              nonprofits received donations from GitHub employees in 2022
            </p>
          </Col>
          <Col lg={4} sm={6}>
            <h2 className=" clr_mainblack fw_800 fs_3xl ff_inter">10,000+</h2>
            <p className=" fs_xsm ff_inter  fw_400 clr_grey2 mx_320">
              volunteer hours completed by GitHub employees in 2022
            </p>
          </Col>
          <Col data-aos="fade-left" lg={4} sm={6}>
            <h2 className=" clr_mainblack fw_800 fs_3xl ff_inter">7,500+</h2>
            <p className=" fs_xsm ff_inter  fw_400 clr_grey2 mx_320">
              free team licenses have been distributed to-date
            </p>
          </Col>
        </Row>
        <div className=" py-lg-5">
          <Row className=" py-5">
            <Col data-aos="fade-right" className=" mt-5" lg={4} md={6}>
              <img className=" w-100 mb-3" src={sec5img1} alt="volunteer" />
              <h2 className=" ff_inter fs_lg fw_600 clr_mainblack mb-3">
                Volunteering
              </h2>
              <p className=" ff_inter fw_400 fs_xsm clr_grey3">
                GitHub employees love to volunteer virtually and in their local
                communities. Every hour that employees volunteer, they will
                receive a $20 credit to donate to a nonprofit of their choice,
                up to $15,000.
              </p>
            </Col>
            <Col data-aos="fade-up" className=" mt-5" lg={4} md={6}>
              <img className=" w-100 mb-3" src={sec5img2} alt="volunteer" />
              <h2 className=" ff_inter fs_lg fw_600 clr_mainblack mb-3">
                Matching
              </h2>
              <p className=" ff_inter fw_400 fs_xsm clr_grey3">
                When an employee donates to a nonprofit that they care about, be
                it human rights or climate change organizations, we match each
                donation dollar for dollar, up to $15,000.
              </p>
            </Col>
            <Col data-aos="fade-left" className=" mt-5" lg={4} md={6}>
              <img className=" w-100 mb-3" src={sec5img3} alt="volunteer" />
              <h2 className=" ff_inter fs_lg fw_600 clr_mainblack mb-3">
                GitHub Gives
              </h2>
              <p className=" ff_inter fw_400 fs_xsm clr_grey3">
                GitHub employees participate each December in our giving
                campaign to raise funds for our local communities. In December
                2021, as a company, we raised over $1.98 million for nonprofits
                around the world.
              </p>
            </Col>
          </Row>
        </div>
        <div className=" py-md-5 py-2 my-4"></div>
      </Container>
    </section>
  );
}

export default Employee