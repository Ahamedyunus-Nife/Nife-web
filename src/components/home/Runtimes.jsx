import { motion } from "framer-motion";
import React from 'react';
import { Card } from "react-bootstrap";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import remixlogo from "../../images/logo/Remix.png";

function Runtimes() {
  const items = [
    { name: "react", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "python", url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "docker", url: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Docker_%28container_engine%29_logo_%28cropped%29.png" },
    { name: "angular", url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" },
    { name: "deno", url: "https://upload.wikimedia.org/wikipedia/commons/8/84/Deno.svg", invert: true  },
    { name: "ember", url: "https://upload.wikimedia.org/wikipedia/commons/2/27/Ember-logo.png" },
    { name: "go", url: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg" },
    { name: "hugo", url: "https://upload.wikimedia.org/wikipedia/commons/a/af/Logo_of_Hugo_the_static_website_generator.svg" },
    { name: "java", url: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
    { name: "javascript", url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { name: "nodejs", url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "remix", url: remixlogo, invert: true },
    { name: "ruby", url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg" },
    { name: "typescript", url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
    { name: "unity", url: "https://upload.wikimedia.org/wikipedia/commons/1/19/Unity_Technologies_logo.svg",invert:true },
    { name: "vite", url: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" },
    { name: "vuejs", url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" },
  ];

  return (
    <div className="runtimes">
      
     
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
                slidesPerView: 5,
              },
              1198: {
                slidesPerView: 5,
              },
            }}
            navigation={false}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper mt-4 p-5"
            autoplay={{ delay: 2000, disableOnInteraction: false }}
          >
            {items.map((e) => (
              <SwiperSlide key={e.name}>
                <Card className="bg-black-100 rounded" style={{ margin: 'auto',height:"100px",width:"100px" }}>
                  <Card.Body className="p-4">
                    <img alt={`Nife support runtime ${e.name}`} src={e.url} height={"100%"} width={"100%"} style={{ objectFit: "contain", aspectRatio:"1/1", filter: e.invert ? "invert(100%)" : undefined}} />
                  </Card.Body>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
  
      <br/>
    </div>
  );
}

export default Runtimes;
