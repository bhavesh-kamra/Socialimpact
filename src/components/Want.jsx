import React from "react";
import { Container } from "react-bootstrap";
import rightarrow from "../assets/images/svg/rightarrow.svg";

const Want = () => {
  return (
    <section className=" bg_lightgrey py-5">
      <Container>
        <div className=" pt-3 pb-5">
          <h2 className="  fs_xl ff_inter fw_800 clr_mainblack mb-3">
            Want to get involved?
          </h2>
          <h2 className=" fs_sm ff_inter clr_grey2 fw_400 pb-3">
            Please contact us and our team will get back to you soon.
          </h2>
          <button className="cmn_btn border-0 clr_white c_pointer mt-4 d-flex">
            Contact Social Impact
            <span className=" ms-3">
              <img src={rightarrow} alt="" />
            </span>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Want;
