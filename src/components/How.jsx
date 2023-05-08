import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const How = () => {
  return (
    <section className=" py-5">
      <Container>
        <div className=' py-5'>
          <h2 className="clr_mainblack fs_2xl ff_inter fw_800 mb-3">
            How we’re making a difference
          </h2>
          <Row>
            <Col className=" mt-3 mt-sm-0" data-aos="fade-right" lg={4} sm={6}>
              <h2 className=" clr_mainblack fw_800 fs_3xl ff_inter">$5M+</h2>
              <p className=" fs_xsm  fw_400 clr_grey2 ff_inter">
                GitHub employee donations in 2021
              </p>
            </Col>
            <Col data-aos="fade-up" lg={4} sm={6}>
              <h2 className=" clr_mainblack fw_800 fs_3xl ff_inter">18</h2>
              <p className=" fs_xsm  fw_400 clr_grey2 ff_inter">
                countries across six continents participate in Social Impact
                programs
              </p>
            </Col>
            <Col data-aos="fade-left" lg={4} sm={6}>
              <h2 className=" clr_mainblack fw_800 fs_3xl ff_inter">30+</h2>
              <p className=" fs_xsm  fw_400 clr_grey2 ff_inter">
                events participated in 2019-2021 with more than 17,000 people
                attending
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default How