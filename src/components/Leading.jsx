import React from "react";
import { Container } from "react-bootstrap";
import woman from "../assets/images/svg/woman.svg";
import sec3vectorright from "../assets/images/png/sec3vectorright.png";
import sec3vecleft from "../assets/images/png/sec3vecleft.png";
import sec3downvec from "../assets/images/png/sec3downvec.png";
import Slider from "react-slick";

const Leading = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    fade: true,
  };
  return (
    <section className=" bg_mainblack py-5 position-relative mt">
      <img
        className=" position-absolute sec3_rightvect d-none d-md-block"
        src={sec3vectorright}
        alt="vector"
      />
      <img
        className=" position-absolute sec3_leftvect"
        src={sec3vecleft}
        alt="vector"
      />
      <img
        className=" position-absolute sec3_downvect"
        src={sec3downvec}
        alt="vector"
      />
      <Container>
        <div className="py-5"></div>
        <Slider {...settings}>
          <div className="mx_790 mx-auto">
            <p className=" fw_500 ff_inter  clr_white fs_xl mb-3 ">
              Leading the Open Source in the Social Sector report research was a
              unique opportunity to identify critical insights at an incredibly
              important intersection. The research has already strengthened
              social sector open source capacity and has led to more research
              opportunities for Olive Branch International to engage with GitHub
              Tech for Social Good and use the knowledge gained from the
              engagement to navigate other open-source opportunities for the
              social sector.
            </p>
            <h2 className="ff_firacode fw_400 fs_xsm  clr_grey2">
              Gina Assaf // Olive Branch International
            </h2>
            <div className=" mb-2">
              <img className="womanradius" src={woman} alt="woman" />
            </div>
          </div>
          <div className="mx_790 mx-auto">
            <p className=" fw_500 ff_inter  clr_white fs_xl mb-3 ">
              Leading the Open Source in the Social Sector report research was a
              unique opportunity to identify critical insights at an incredibly
              opportunities for Olive Branch International to engage with GitHub
              Tech for Social Good and use the knowledge gained from the
              engagement to navigate other open-source opportunities for the
              social sector. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Inventore numquam, nisi alias ad est, nam nostrum optio
              totam exercitationem dolorum culpa! Sunt placeat consequatur porro
              iste corrupti voluptates, ullam obcaecati!
            </p>
            <h2 className="ff_firacode fw_400 fs_xsm  clr_grey2">
              Gina Assaf // Olive Branch International
            </h2>
            <div className="mb-2">
              <img className="womanradius" src={woman} alt="woman" />
            </div>
          </div>
          <div className="mx_790 mx-auto">
            <p className=" fw_500 ff_inter  clr_white fs_xl mb-3 ">
              Leading the Open Source in the Social Sector report research was a
              unique opportunity to identify critical insights at an incredibly
              important intersection. The research has already strengthened
              social sector. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Quos, quisquam delectus sunt suscipit laudantium ut aliquid
              eveniet perferendis dicta unde eius nobis doloribus nemo expedita
              aperiam, repellat et incidunt. Delectus!
            </p>
            <h2 className="ff_firacode fw_400 fs_xsm  clr_grey2">
              Gina Assaf // Olive Branch International
            </h2>
            <div className="">
              <img className="womanradius" src={woman} alt="woman" />
            </div>
          </div>
          <div className="mx_790 mx-auto">
            <p className=" fw_500 ff_inter  clr_white fs_xl mb-3 ">
              Leading the Open Source in the Social Sector report research was a
              unique opportunity to identify critical insights at an incredibly
              important intersection. The research has already strengthened
              social sector open source capacity and has led to more research
              opportunities for Olive Branch International to engage with GitHub
              Tech for Social Good and use the knowledge gained from the
              engagement to navigate other open-source opportunities for the
              social sector.
            </p>
            <h2 className="ff_firacode fw_400 fs_xsm  clr_grey2">
              Gina Assaf // Olive Branch International
            </h2>
            <div className="mb-2">
              <img className="womanradius" src={woman} alt="woman" />
            </div>
          </div>
          <div className="mx_790 mx-auto">
            <p className=" fw_500 ff_inter  clr_white fs_xl mb-3 ">
              Leading the Open Source in the Social Sector report research was a
              unique opportunity to identify critical insights at an incredibly
              important intersection. The research has already strengthened
              social sector open source capacity and has led to more research.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
              quos amet repellendus reiciendis, fugiat vero illum, optio
              exercitationem iste libero animi voluptate voluptates eligendi?
              Consequuntur ab saepe possimus dolores explicabo.
            </p>
            <h2 className="ff_firacode fw_400 fs_xsm  clr_grey2">
              Gina Assaf // Olive Branch International
            </h2>
            <div className="mb-2">
              <img className="womanradius" src={woman} alt="woman" />
            </div>
          </div>
        </Slider>
        <div className=" py-5"></div>
      </Container>
    </section>
  );
};

export default Leading;
