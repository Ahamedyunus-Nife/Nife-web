import { Button } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import bghero from "../images/bg/bg-hero.png";
import EventDialog from "../layouts/EventDialog";
import { useEffect, useState } from "react";

function HeroContent() {

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const eventData = {
    title: "Amusement Expo International",
    image: "/path-to-your-image.jpg", // Replace with your actual image URL or import
    description: "Meet us at the Amusement Expo International to explore our latest offerings!",
    date: "March 27-30, 2023",
    location: "Las Vegas Convention Center",
    booth: "A-1250",
  };

  useEffect(() => {
    // Check if the 'showEvent' key exists in localStorage
    // const hasSeenEvent = localStorage.getItem('showEvent');
    // if (!hasSeenEvent) {
    //   setIsDialogOpen(true); // Show the dialog if the key doesn't exist
    // }
  }, []);

  const handleCloseDialog = () => {
    setIsDialogOpen(false); // Close the dialog
    localStorage.setItem('showEvent', 'true'); // Set the key to prevent showing the dialog again
  };

  return (
    <div className="loading position-relative">
      <Container className="d-flex flex-column flex-md-row align-items-center mt-0 overflow-hidden">
        <motion.div
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-md-start"
        >
          <h1 className="gradient-text ">Unclutter Your Cloud - Save Costs, Deploy Faster, Scale Seamlessly</h1>
          <p className="gray-90 mt-3 fs-5">
            Connect to any Cloud, Bare-metal, or Kubernetes servers and infrastructure management. With Nife, it’s all about seamless automation, allowing you to focus on what truly matters—your application.
          </p>
          <Button variant="contained" className="m-0 my-3 px-5 py-2 fw-bold" onClick={() => window.location.href = "https://landing.nife.io/request-demo"}>Request Demo</Button>
          <Button className="m-2 my-3 px-5 py-2 fw-bold" onClick={() => window.location.href = "https://launch.nife.io/"}>Get Started Today</Button>
          
          <div
            style={{ color: "white" }}
            className="d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center my-4 gap-3 gap-md-0"
          >
            <div className="text-center">
              <h5 className="fw-bold fs-4 fs-md-1">200K+</h5>
              <span className="gray-100">Man hours saved</span>
            </div>
            <div className="text-center">
              <h5 className="fw-bold fs-4 fs-md-1">20K+</h5>
              <span className="gray-100">Releases</span>
            </div>
            <div className="text-center">
              <h5 className="fw-bold fs-4 fs-md-1">97%</h5>
              <span className="gray-100">Reduction</span>
            </div>
            <div className="text-center">
              <h5 className="fw-bold fs-4 fs-md-1">10K+</h5>
              <span className="gray-100">Deployments</span>
            </div>
          </div>


          
        </motion.div>
        
        <motion.div
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-5 text-center"
        >
          <div className="cards">
            <img alt="Nife Labs - Oikos homepage demo" src={bghero} style={{ width: "100%",height:"100%" }} />
            
          </div>
        </motion.div>
      </Container>
      <EventDialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        eventData={eventData}
      />
    </div>
  );
}

export default HeroContent;
