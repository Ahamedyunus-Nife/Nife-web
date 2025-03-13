import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";

function AboutUs() {
  return (
    <div className="about mb-5">
      <Container className="d-flex justify-content-between flex-wrap flex-md-nowrap">
        <motion.div
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimationTitles duration={1} title="About Us" className="title" />
          <p className="gray-50 fs-6 mb-2">
            Nife is a global edge application platform company that rapidly empowers enterprises and developers to launch their applications within the Nife Edge Grid.
          </p>
          <p className="gray-50 fs-6 mb-2">
            At Nife, we simplify the complexity of 5G, edge computing and cloud through a suite of APIs and tools that allow ease of launch and scale with security and privacy, keeping operating expenses at a fraction of the cost of legacy infrastructure.
          </p>
          <p className="gray-50 fs-6 mb-5">
            We work with systems integrators, distributors, and technology partners to realise the power of the edge economy and enable companies and communities to connect with a purpose
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="d-flex flex-column"
        >
          <div className="d-flex">
            <div>
              <img
                src={require("..//images/USA.jpg")}
                className="p-0 me-2 img"
                alt="about us"
              />
            </div>
            <div>
              <img
                src={require("..//images/singapore.jpg")}
                className="p-0 img"
                alt="about us"
              />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img
                src={require("..//images/INDIA.jpg")}
                className="p-0 me-2 img"
                alt="about us"
              />
            </div>
            <div>
              <img
                src={require("..//images/theater-amazonas-manaus.webp")}
                className="p-0 img"
                alt="about us"
              />
            </div>
          </div>
        </motion.div>
      </Container>
      <div className="text-center">
         <AnimationTitles duration={1} title="Our Mission"/>
      <p className="gray-50 fs-6 mb-5">
        Nife.io is on a mission to revolutionize cloud management by simplifying, scaling, and securing enterprise infrastructure.
      </p>
      </div>
     
    </div>
  );
}

export default AboutUs;