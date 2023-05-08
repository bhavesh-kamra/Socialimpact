import React from 'react'
import { Container } from 'react-bootstrap'
import sec1vector from "../assets/images/png/sec1vector.png"
import bgvector from "../assets/images/png/sec1vector.png"

const Social = () => {
  return (
    <section className=" position-relative bg_mainblack py-md-5 mt">
      <img
        className=" position-absolute sec1vector "
        src={sec1vector}
        alt="vector"
      />
      <Container>
        <div className=" py-5"></div>
        <div className=" text-center d-flex justify-content-center">
          <div className="mx_720 text-center py-5 ">
            <p className=" fs_md clr_grey1 ff_inter  fw_400 mb-0 pt-5">
              GitHub
            </p>
            <h1 className=" fs_4xl  fw_800 clr_white">Social Impact</h1>
            <p className=" fs_md clr_grey1 ff_inter  fw_400  pb-sm-5">
              The Social Impact team empowers nonprofits and the greater social
              sector to drive positive and lasting contributions to the world
              with GitHub products, our brand, and our employees.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Social