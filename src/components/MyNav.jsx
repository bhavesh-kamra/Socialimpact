import React, { useState } from "react";
import { Container } from "react-bootstrap";
import pagelogo from "../assets/images/png/pagelogo.png";
import cross from "../assets/images/svg/cross.svg";

const MyNav = () => {
  const [first, setfirst] = useState(true);
  return (
    <section className=" bg_mainblack position-fixed w-100 z_index">
      <Container>
        <nav className=" d-flex align-items-center justify-content-between py-2  top-0">
          <a href="#">
            <img src={pagelogo} alt="pagelog" />
          </a>

          <ul
            className={
              first
                ? " mb-0 d-flex align-items-center gap-4 mobileview hidden"
                : " mb-0 d-flex align-items-center gap-4 mobileview  show"
            }
          >
            <li className="">
              <a className="fs_xxsm clr_white fw_400 ff_inter line" href="#">
                Social Impact
              </a>
            </li>
            <li className="">
              <a className="fs_xxsm clr_white fw_400 ff_inter line" href="#">
                Tech for Social Good
              </a>
            </li>
            <li className="">
              <a className="fs_xxsm clr_white fw_400 ff_inter line" href="#">
                Insights
              </a>
            </li>
            <img
              className=" position-absolute d-md-none cross_pos c_pointer"
              onClick={() => {
                setfirst(true);
              }}
              src={cross}
              alt="cross"
            />
          </ul>
          <div
            className="navbox d-flex justify-content-center align-items-center c_pointer d-md-none"
            onClick={() => {
              setfirst(false);
            }}
          >
            <span className="navline"></span>
          </div>
        </nav>
      </Container>
    </section>
  );
};

export default MyNav;
