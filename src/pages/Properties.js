// Import bootstrap react components
import { Card, Container } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
// import framer motion
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";









function Properties() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const active = () => {
    console.log("notjinl")
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.npoint.io/429393ab56ea69fc2446'); // Replace with your API endpoint
        const data = await response.json();
        setItems(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(items)
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    // Start properties
    <div className="properties">
      <Container>
        <AnimationTitles

          className="title mx-auto text-align-center"
          title="Marketplace"
          duration={2}
        />
        {/* Start tabs */}
        <div className="tabs d-flex justify-content-start justify-content-sm-center align-items-center flex-nowrap w-lg-50">
          <Swiper
            className="mySwiper overflow-none"
            grabCursor={true}
            spaceBetween={15}
            slidesPerView={6}
            breakpoints={{
              0: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 6,
              },
            }}
          >
            <SwiperSlide>
              <Button className="ms-0 bg-black-100 border-0" onClick={active}>
                All
              </Button>
            </SwiperSlide>
            {["Productivity","deployment","blogging","game","seo"].map((e) => {
              return <SwiperSlide>
                <Button
                  className="ms-0 bg-black-100 border-0 active"
                  onClick={active}
                >
                  {e}
                </Button>
              </SwiperSlide>
            })}


          </Swiper>
        </div>
     
        <motion.div
          initial={{ x: -80 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            slidesPerView={4}
            spaceBetween={15}
            grabCursor={true}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              520: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1198: {
                slidesPerView: 4,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper mt-4"
          >
            {items && items.map((e) => {
              return (<SwiperSlide key={e.name}>
             
                <Card className="bg-black-100 rounded" style={{ width: '18rem', margin: 'auto' }}>
                  <Card.Body className="p-4">
                    <div className="rounded overflow-hidden position-relative">
                      {e.logo ? <img
                        // variant="top"
                        alt="Nothing"
                        style={{ height: "50px", width: "50px", objectFit: "cover", aspectRatio: "1/1", margin: "10px", borderRadius: "5px", padding: "5px" }}
                        src={e.logo}
                      /> : <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M190.4 354.1L91.9 256l98.4-98.1-30-29.9L32 256l128.4 128 30-29.9zm131.2 0L420 256l-98.4-98.1 30-29.9L480 256 351.6 384l-30-29.9z"></path></svg>}

                    </div>
                    <h5 className="mt-2 text-white fw-normal">
                      {e.name}
                    </h5>
                    <p className="gray-90">{e.type}</p>
                    <div>
                      <div>
                        <Button fullWidth variant="contained">One CLICK AWAY</Button>
                      </div>
                      <div>
                        <Button fullWidth sx={{ mt: 1 }}>view details</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </SwiperSlide>)
            })}


          </Swiper>
        </motion.div>
        {/* End cards */}
      </Container>
    </div>
    // End properties
  );
}

export default Properties;
