import React from "react";
import { Container } from "react-bootstrap";
import pageLogo from "../assets/images/png/pagelogo.png";

const Preloader = () => {
  setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
    document.body.classList.remove("overflow-hidden");
  }, 3000);
  return (
    <section className="bg-dark">
      <Container>
        <div className="preloader">
          <div className="d-flex align-items-center justify-content-center preloader">
            <a
              className=" preloader_animation"
              href="#"
            >
              <img src={pageLogo} alt="pageLogo" />
             
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Preloader;
