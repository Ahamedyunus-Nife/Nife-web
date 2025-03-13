import { Button } from "@mui/material";
import { Container } from "react-bootstrap";
import AnimationTitles from "../components/functions/AnimationTitles";

function PlatusSubscribe() {
  return (
    <div className="subscribe">
      <Container>
        <AnimationTitles
          duration={1}
          title={`Ready to optimize your cloud costs with Platus?`}
          className="title text-center mx-auto w-75"
        />
        <p className="gray-50 text-center mt-3 mb-2">
          Start your 15-day FREE Trial today and explore powerful real-time monitoring, detailed reporting, and proactive alerts tailored to your needs.
          <br /><Button onClick={() => window.location.href = "https://launch.nife.io/"} sx={{ mt: 4, fontWeight: "bold" }} size="large" className="text-align-center" variant="contained">
            Optimize YouTubeour Cloud Today
          </Button>
          <Button onClick={() => window.location.href = "https://launch.nife.io/contact-us"} sx={{ mt: 4, fontWeight: "bold",ml:2 }} size="large" className="text-align-center" variant="text">
            Request Demo
          </Button>
        </p>



      </Container>
    </div>
  );
}

export default PlatusSubscribe;
