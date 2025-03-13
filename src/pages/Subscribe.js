import { Button } from "@mui/material";
import { Container } from "react-bootstrap";
import AnimationTitles from "../components/functions/AnimationTitles";

function Subscribe() {
  return (
    <div className="subscribe">
      <Container>
        <AnimationTitles
        duration={1}
          title={`Ready to deploy on Nife?`}
          className="title text-center mx-auto w-75"
        />
        <p className="gray-50 text-center mt-3 mb-5">
          Start 15 Days FREE Trial to see our customizable platform, security, and performance in action.
         <br/><Button onClick={() => window.location.href = "https://launch.nife.io/"} sx={{mt:4,fontWeight:"bold"}} size="large" className="text-align-center" variant="contained">
            Start today
          </Button> </p>
      


      </Container>
    </div>
  );
}

export default Subscribe;
