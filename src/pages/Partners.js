// Import bootstrap react components
import { Container } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// Import Framer-motion
import { motion } from "framer-motion";
import { Autoplay } from "swiper/modules";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Partners() {
  const navigate = useNavigate();
  return (
    // Start partners
    <div style={{ textAlign: "center" }}>
      <h2 className="title mx-auto text-align-center gradient-text fw-bold">
        Customers Who Trust Us
      </h2>
      <p className="text-center text-white mb-4" style={{ fontSize: '1.2rem' }}>
        Journey Towards Unmatched Excellence
      </p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="partners">
        <Container className="d-flex align-items-center flex-nowrap overflow-hidden">
          <Swiper
            className="mySwiper"
            loop={true}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            grabCursor={true}
            modules={[Autoplay]}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              520: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
              },
              1198: {
                slidesPerView: 6,
              },
            }}
          >
            <SwiperSlide>
              <img src={require("../images/companylogo/1.png")} alt="Nife Partners company logo" style={{ height: "100px", padding: "10px", filter: "grayscale(1) invert(100%)", opacity: "0.8", border: "solid red 0px" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={require("../images/companylogo/2.png")} alt="Nife Partners company logo" style={{ height: "100px", padding: "10px", filter: "grayscale(1) invert(100%)", opacity: "0.8", border: "solid red 0px" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={require("../images/companylogo/3.png")} alt="Nife Partners company logo" style={{ height: "100px", padding: "10px", filter: "grayscale(1) invert(100%)", opacity: "0.8", border: "solid red 0px" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={require("../images/companylogo/4.png")} alt="Nife Partners company logo" style={{ height: "100px", padding: "10px", filter: "grayscale(1) invert(100%)", opacity: "0.8", border: "solid red 0px" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={require("../images/companylogo/5.png")} alt="Nife Partners company logo" style={{ height: "100px", padding: "10px", filter: "grayscale(1) invert(100%)", opacity: "0.8", border: "solid red 0px" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={require("../images/companylogo/6.png")} alt="Nife Partners company logo" style={{ height: "100px", padding: "10px", filter: "grayscale(1) invert(100%)", opacity: "0.8", border: "solid red 0px" }} />
            </SwiperSlide>

            <SwiperSlide>
              <img src={require("../images/companylogo/7.png")} alt="Nife Partners company logo" style={{ height: "100px", padding: "10px", filter: "grayscale(1) invert(100%)", opacity: "0.8", border: "solid red 0px" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={require("../images/companylogo/8.png")} alt="Nife Partners company logo" style={{ height: "100px", padding: "10px", filter: "grayscale(1) invert(100%)", opacity: "0.8", border: "solid red 0px" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={require("../images/companylogo/9.png")} alt="Nife Partners company logo" style={{ height: "100px", padding: "10px", filter: "grayscale(1) invert(100%)", opacity: "0.8", border: "solid red 0px" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={require("../images/companylogo/10.png")} alt="Nife Partners company logo" style={{ height: "100px", padding: "10px", filter: "grayscale(1) invert(100%)", opacity: "0.8", border: "solid red 0px" }} />
            </SwiperSlide>


            <SwiperSlide>
              <img src={require("../images/companylogo/11.png")} alt="Nife Partners company logo" style={{ height: "100px", padding: "10px", filter: "grayscale(1) invert(100%)", opacity: "0.8", border: "solid red 0px" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={require("../images/companylogo/12.png")} alt="Nife Partners company logo" style={{ height: "100px", padding: "10px", filter: "grayscale(1) invert(100%)", opacity: "0.8", border: "solid red 0px" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={require("../images/companylogo/13.png")} alt="Nife Partners company logo" style={{ height: "100px", padding: "10px", filter: "grayscale(1) invert(100%)", opacity: "0.8", border: "solid red 0px" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={require("../images/companylogo/14.png")} alt="Nife Partners company logo" style={{ height: "100px", padding: "10px", filter: "grayscale(1) invert(100%)", opacity: "0.8", border: "solid red 0px" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={require("../images/companylogo/15.png")} alt="Nife Partners company logo" style={{ height: "100px", padding: "10px", filter: "grayscale(1) invert(100%)", opacity: "0.8", border: "solid red 0px" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={require("../images/companylogo/16.png")} alt="Nife Partners company logo" style={{ height: "100px", padding: "10px", filter: "grayscale(1) invert(100%)", opacity: "0.8", border: "solid red 0px" }} />
            </SwiperSlide>
          </Swiper>
        </Container>
      </motion.div>

      <Button sx={{ fontWeight: "bold", textAlign: "center" }} disableElevation variant="contained" onClick={() => navigate("/case-study/")}>view case study</Button>
    </div>
    // End partners
  );
}

export default Partners;
