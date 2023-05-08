import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import footlogo from "../assets/images/png/footlogo.png";
import facebook from "../assets/images/svg/facebook.svg";
import twitter from "../assets/images/svg/twitter.svg";
import youtube from "../assets/images/svg/youtube.svg";
import linkedin from "../assets/images/svg/linkedin.svg";
import github from "../assets/images/svg/github.svg";

const Myfooter = () => {
  return (
    <section className=" pt-5 bg_mainblack">
      <Container>
        <Row className=" pb-5">
          <Col lg={4}>
            <a href="#">
              <img src={footlogo} alt="logo" />
            </a>
          </Col>
          <Col lg={8}>
            <Row>
              <Col className=" mt-4" lg={3} xs={6} sm={4}>
                <ul className=" ps-0">
                  <li className=" clr_white ff_inter fw_500 fs_xsm mb-3">
                    Product
                  </li>
                  <li className="mb_17">
                    <a
                      className=" ff_inter fw_400  clr_grey1 whiteline   fs_xxsm"
                      href=""
                    >
                      Features
                    </a>
                  </li>
                  <li className="mb_17">
                    <a
                      className=" ff_inter fw_400  clr_grey1 whiteline  fs_xxsm"
                      href=""
                    >
                      Security
                    </a>
                  </li>
                  <li className="mb_17">
                    <a
                      className=" ff_inter fw_400  clr_grey1 whiteline  fs_xxsm"
                      href=""
                    >
                      Enterprise
                    </a>
                  </li>
                  <li className="mb_17">
                    <a
                      className=" ff_inter fw_400  clr_grey1 whiteline  fs_xxsm"
                      href=""
                    >
                      Customer stories
                    </a>
                  </li>
                  <li className="mb_17">
                    <a
                      className=" ff_inter fw_400  clr_grey1 whiteline  fs_xxsm"
                      href=""
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="mb_17">
                    <a
                      className=" ff_inter fw_400  clr_grey1 whiteline  fs_xxsm"
                      href=""
                    >
                      Resources
                    </a>
                  </li>
                </ul>
              </Col>
              <Col className=" mt-4" lg={3} xs={6} sm={4}>
                <ul className=" ps-0">
                  <li className=" clr_white ff_inter fw_500 fs_xsm mb-3">
                    Platform
                  </li>
                  <li className="mb_17">
                    <a
                      className=" ff_inter fw_400  clr_grey1 whiteline   fs_xxsm"
                      href=""
                    >
                      Developer API
                    </a>
                  </li>
                  <li className="mb_17">
                    <a
                      className=" ff_inter fw_400  clr_grey1 whiteline  fs_xxsm"
                      href=""
                    >
                      Partners
                    </a>
                  </li>
                  <li className="mb_17">
                    <a
                      className=" ff_inter fw_400  clr_grey1 whiteline  fs_xxsm"
                      href=""
                    >
                      Atom
                    </a>
                  </li>
                  <li className="mb_17">
                    <a
                      className=" ff_inter fw_400  clr_grey1 whiteline  fs_xxsm"
                      href=""
                    >
                      Electron
                    </a>
                  </li>
                  <li className="mb_17">
                    <a
                      className=" ff_inter fw_400  clr_grey1 whiteline  fs_xxsm"
                      href=""
                    >
                      GitHub Desktop
                    </a>
                  </li>
                </ul>
              </Col>
              <Col className=" mt-4" lg={3} xs={6} sm={4}>
                <ul className=" ps-0">
                  <li className=" clr_white ff_inter fw_500 fs_xsm mb-3">
                    Support
                  </li>
                  <li className="mb_17">
                    <a
                      className=" ff_inter fw_400  clr_grey1 whiteline   fs_xxsm"
                      href=""
                    >
                      Docs
                    </a>
                  </li>
                  <li className="mb_17">
                    <a
                      className=" ff_inter fw_400  clr_grey1 whiteline  fs_xxsm"
                      href=""
                    >
                      Community Forum
                    </a>
                  </li>
                  <li className="mb_17">
                    <a
                      className=" ff_inter fw_400  clr_grey1 whiteline  fs_xxsm"
                      href=""
                    >
                      Professional Services
                    </a>
                  </li>
                  <li className="mb_17">
                    <a
                      className=" ff_inter fw_400  clr_grey1 whiteline  fs_xxsm"
                      href=""
                    >
                      Learning Lab
                    </a>
                  </li>
                  <li className="mb_17">
                    <a
                      className=" ff_inter fw_400  clr_grey1 whiteline  fs_xxsm"
                      href=""
                    >
                      Status
                    </a>
                  </li>
                  <li className="mb_17">
                    <a
                      className=" ff_inter fw_400  clr_grey1 whiteline  fs_xxsm"
                      href=""
                    >
                      Contact GitHub
                    </a>
                  </li>
                </ul>
              </Col>
              <Col className=" mt-4" lg={3} xs={6} sm={4}>
                <ul className=" ps-0">
                  <li className=" clr_white ff_inter fw_500 fs_xsm mb-3">
                    Company
                  </li>

                  <li className="mb_17">
                    <a
                      className=" ff_inter fw_400  clr_grey1 whiteline  fs_xxsm"
                      href=""
                    >
                      About
                    </a>
                  </li>
                  <li className="mb_17">
                    <a
                      className=" ff_inter fw_400  clr_grey1 whiteline  fs_xxsm"
                      href=""
                    >
                      Blog
                    </a>
                  </li>
                  <li className="mb_17">
                    <a
                      className=" ff_inter fw_400  clr_grey1 whiteline  fs_xxsm"
                      href=""
                    >
                      Careers
                    </a>
                  </li>
                  <li className="mb_17">
                    <a
                      className=" ff_inter fw_400  clr_grey1 whiteline  fs_xxsm"
                      href=""
                    >
                      Press
                    </a>
                  </li>
                  <li className="mb_17">
                    <a
                      className=" ff_inter fw_400  clr_grey1 whiteline  fs_xxsm"
                      href="#"
                    >
                      Shop
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className=" bg_darkgrey py-4">
        <Container>
          <div className=" d-sm-flex justify-content-sm-between flex-column flex-sm-row align-items-center">
            <div className="  d-flex align-items-center">
              <p className=" ff_inter fw_400 fs_3xsm clr_grey1 mb-0 ">
                © 2023 GitHub, Inc.
              </p>
              <a
                className="ff_inter  fw_400 fs_3xsm clr_grey1 ms-2 ms-sm-3"
                href="#"
              >
                Terms
              </a>

              <a
                className="ff_inter  fw_400 fs_3xsm clr_grey1 ms-2 ms-sm-3"
                href="#"
              >
                Privacy
              </a>
              <a
                className="ff_inter  fw_400 fs_3xsm clr_grey1 ms-2 ms-sm-3"
                href="#"
              >
                Cookie settings
              </a>
            </div>
            <div className=" d-flex gap-3 mt-3 mt-sm-0  ">
              <a className="smallimage" href="#">
                <img src={twitter} alt="twitter" />
              </a>
              <a className="smallimage" href="#">
                <img src={facebook} alt="facebook" />
              </a>
              <a className="smallimage" href="#">
                <img src={youtube} alt="youtube" />
              </a>
              <a className="smallimage" href="#">
                <img src={linkedin} alt="linkedin" />
              </a>
              <a className="smallimage" href="#">
                <img src={github} alt="github" />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Myfooter;
