import { Swiper, SwiperSlide } from "swiper/react";
import AnimationTitles from "../components/functions/AnimationTitles";
import { motion } from "framer-motion";
import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText, Paper, Rating, Typography } from "@mui/material";

const customerReviews = [
  {
    "customer": "Samir Hasan",
    "from": "CEO, Knowtified",
    "message": "We choose Nife because our customers need global hyperlocal Infra. Our customers get Privacy, Security and even the regional scaling via Nife",
    "image": "https://nife.io/wp-content/uploads/2023/04/resize.png"
  },
  {
    "customer": "Deepak Pedro",
    "from": "Product Manager, Towno",
    "message": "Nife was of great help in all our deployment and hosting challenges. The team was available for any queries at any given point. Looking forward to having more successful collabs in future with Nife.",
    "image": "https://nife.io/wp-content/uploads/2023/04/1678762000357.jpeg"
  },
  {
    "customer": "Shivam Gupta",
    "from": "CEO, Instaminutes",
    "message": "We got all our branches updated in time, and releases are very smooth",
    "image": "https://nife.io/wp-content/uploads/2023/04/Shivam_Pic.jpg"
  }
]

function Developers() {
  return (
    <div className="developers">
      <div className="container-fluid">
        <AnimationTitles
          title="Our the best developers"
          className="title mx-auto"
        />
        <p className="gray-50 text-center mb-5">
          The value of real estate can be affected by its utility, project, and
          demand.{" "}
        </p>
        <motion.div
          initial={{ x: -80 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            className="mySwiper overflow-none justify-content-start"
            grabCursor={true}
            slidesPerView={5}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              596: {
                slidesPerView: 3,
              },
              998: {
                slidesPerView: 4,
              },
              1198: {
                slidesPerView: 5,
              },
            }}
          >
            <SwiperSlide>
              {customerReviews.map((e) => {
                return (<div>
                  <Paper elevation={0} sx={{
                 // You can adjust the border radius as needed
                    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1), inset 0 0 10px rgba(255, 255, 255, 0.3)',
                    '&:hover': {
                      boxShadow: "rgba(22,0, 68, 0.2) 0px 0.05rem 1.05rem 0px",
                    },
                    m: 2, p: 3, borderRadius: "5px",
                  }}>
                    <Rating readOnly name="size-small" defaultValue={5} size="small" />
                    <Typography sx={{ mb: 2 }}>
                      {/* <FaQuoteLeft style={{ marginRight: "10px" }} /> */}
                      {e.message}
                      {/* <FaQuoteRight style={{ marginLeft: "10px" }} />  */}
                       </Typography>

                    <Divider />
                    <ListItem>
                      <ListItemAvatar><Avatar src={e.image} /></ListItemAvatar>
                      <ListItemText primary={e.customer} secondary={e.from} />
                    </ListItem>
                  </Paper>
                </div>)
              })}
            </SwiperSlide>
            {/* <SwiperSlide>
              <div className="d-flex justify-content-between align-items-center py-2 px-3">
                <img
                  className="pe-3"
                  src={require("../images/developers/logo-02.png")}
                  alt="developer"
                />
                <h6 className="text-white m-0">ERA Ukraine Real Estate</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-between align-items-center py-2 px-3">
                <img
                  className="pe-3"
                  src={require("../images/developers/logo-03.png")}
                  alt="developer"
                />
                <h6 className="text-white m-0">Happy Neighbor</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-between align-items-center py-2 px-3">
                <img
                  className="pe-3"
                  src={require("../images/developers/logo-04.png")}
                  alt="developer"
                />
                <h6 className="text-white m-0">American Home Agents</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-between align-items-center py-2 px-3">
                <img
                  className="pe-3"
                  src={require("../images/developers/logo-05.png")}
                  alt="developer"
                />
                <h6 className="text-white m-0">Ukr Home Agents</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-between align-items-center py-2 px-3">
                <img
                  className="pe-3"
                  src={require("../images/developers/logo-06.png")}
                  alt="developer"
                />
                <h6 className="text-white m-0">UA real estate agency</h6>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </motion.div>
        <motion.div
          initial={{ x: 80 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            className="mySwiper overflow-none"
            spaceBetween={50}
            grabCursor={true}
            slidesPerView={4}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              596: {
                slidesPerView: 3,
              },
              1298: {
                slidesPerView: 5,
              },
            }}
          >
            <SwiperSlide>
              <div className="d-flex justify-content-between align-items-center py-2 px-3">
                <img
                  className="pe-3"
                  src={require("../images/developers/logo-07.png")}
                  alt="developer"
                />
                <h6 className="text-white m-0">Red Oak Realty</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-between align-items-center py-2 px-3">
                <img
                  className="pe-3"
                  src={require("../images/developers/logo-08.png")}
                  alt="developer"
                />
                <h6 className="text-white m-0">Dream House</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-between align-items-center py-2 px-3">
                <img
                  className="pe-3"
                  src={require("../images/developers/logo-09.png")}
                  alt="developer"
                />
                <h6 className="text-white m-0">
                  Leading Real Estate Companies
                </h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-between align-items-center py-2 px-3">
                <img
                  className="pe-3"
                  src={require("../images/developers/logo-10.png")}
                  alt="developer"
                />
                <h6 className="text-white m-0">Home Partners of World</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-between align-items-center py-2 px-3">
                <img
                  className="pe-3"
                  src={require("../images/developers/logo-11.png")}
                  alt="developer"
                />
                <h6 className="text-white m-0">Red Oak Realty</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-between align-items-center py-2 px-3">
                <img
                  className="pe-3"
                  src={require("../images/developers/logo-13.png")}
                  alt="developer"
                />
                <h6 className="text-white m-0">American Home Agents</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-between align-items-center py-2 px-3">
                <img
                  className="pe-3"
                  src={require("../images/developers/logo-12.png")}
                  alt="developer"
                />
                <h6 className="text-white m-0">UA real estate agency</h6>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
}

export default Developers;
