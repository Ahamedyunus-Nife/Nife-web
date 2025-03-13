import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimationTitles from "../components/functions/AnimationTitles";
import { Grid } from "@mui/material";
// const { Container } = require("react-bootstrap");

function Join() {
  return (
    <div className="join pt-2">
      <AnimationTitles
        duration={1}

        title="Organize. Build. Scale."
        className="title mx-auto text-align-center gradient-text fw-bold"
      />
      <p className="gray-50 text-center mb-1">
        From your first user to your billionth, our platform provides a seamless path to production.
        {" "}
      </p>
      <Container className="mt-3 text-align-center">

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >

          <Swiper
            grabCursor={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              998: {
                slidesPerView: 3,
              },
              1198: {
                slidesPerView: 3.5,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide className="py-4 px-3 align-items-start flex-column">
              <h4 className="gray-100 mb-5">1</h4>
              {/* <img src={require("../images/illustration/01.webp")} alt="img" /> */}
              <AnimationTitles
                duration={1}
                title="Organize"
                className="text-white mb-4 mt-5 h4"
              />
              <p className="gray-50">
                more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
              </p>
            </SwiperSlide>
            <SwiperSlide className="py-4 px-3 align-items-start flex-column">
              <h4 className="gray-100 mb-5">2</h4>
              {/* <img src={require("../images/illustration/02.webp")} alt="img" /> */}
              <AnimationTitles
                duration={1}
                title="Build"
                className="text-white mb-4 mt-5 h4"
              />
              <p className="gray-50">
                more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
              </p>
            </SwiperSlide>
            <SwiperSlide className="py-4 px-3 align-items-start flex-column">
              <h4 className="gray-100 mb-5">3</h4>
            
              <AnimationTitles
                duration={1}
                title="Scale"
                className="text-white mb-4 mt-5 h4"
              />
              <p className="gray-50">
                more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
              </p>
            </SwiperSlide>
            {/* <SwiperSlide className="py-4 px-3 align-items-start flex-column">
            <h4 className="gray-100 mb-5">4</h4>
            <img src={require("../images/illustration/04.webp")} alt="img" />
            <AnimationTitles
            duration={1}
              title="Create Solutions"
              className="text-white mb-4 mt-5 h4"
            />
            <p className="gray-50">
              Decentralized community-ran platform for fundraising
            </p>
          </SwiperSlide> */}
          </Swiper>
        </Grid>



      </Container>
     
    </div>
  );
}

export default Join;
