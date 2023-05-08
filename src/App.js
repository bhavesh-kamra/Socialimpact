import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import MyNav from "./components/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Social from "./components/Social";
import How from "./components/How";
import Tech from "./components/Tech";
import SignUp from "./components/SignUp";
import Engagement from "./components/Engagement";
import Want from "./components/Want";
import Employee from "./components/Employee";
import LatestInsights from "./components/LatestInsights";
import Myfooter from "./components/Myfooter";
import Leading from "./components/Leading";
import BackToTop from "./components/BackToTop";
import Preloader from "./components/PreLoader";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      delay: 100,
    });
  }, []);
  return (
    <>
      <div className=" overflow-hidden">
        <MyNav />
        <Social />
        <How />
        <Leading />
        <Tech />
        <Employee />
        <LatestInsights />
        <Engagement />
        <SignUp />
        <Want />
        <Myfooter />
        <BackToTop />
        <Preloader />
      </div>
    </>
  );
}

export default App;
