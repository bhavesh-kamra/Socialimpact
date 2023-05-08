import React, { useState } from 'react'
import backtotop from "../assets/images/svg/backtotop.svg"
import { Col, Container, Row } from "react-bootstrap";

const BackToTop = () => {

    const [first, setfirst] = useState(true);
    const onTop = () => {
      document.documentElement.scrollTop = 0;
    };
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 200) {
        setfirst(false);
      } else {
        setfirst(true);
      }
    });
  return (
    <section>
      <Container>
        <div className="z-index-5">
          <img
            onClick={() => onTop()}
            className={
              first
                ? "d-none backtotop_btn position-fixed"
                : "d-block backtotop_btn position-fixed"
            }
            src={backtotop}
            alt="image"
          />
        </div>
      </Container>
    </section>
  );
}

export default BackToTop