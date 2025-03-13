import AnimationTitles from "../components/functions/AnimationTitles";
import { Grid } from "@mui/material";
import investor1 from "../images/investors/accenture.svg"
import investor2 from "../images/investors/antler.svg"
import investor3 from "../images/investors/ExpertDojo.png"
import investor4 from "../images/investors/IIMB.png"
import investor5 from "../images/investors/Qualcomm.svg"
import investor6 from "../images/investors/Start-Up-Chile.jpg"
import investor7 from "../images/investors/RSCM.jpeg"
import investor8 from "../images/investors/marl 5g.png"
import investor9 from "../images/investors/logo333.png"
import investor10 from "../images/investors/nasscom.svg"

export default function Investors() {
    return (
        <div className="mt-4">
            <AnimationTitles
                duration={1}

                title="Backed by Industry Leaders"
                className="title mx-auto text-align-center"
            />
            <p className="gray-50 text-center mb-2">
                Our Investors.
                {" "}
            </p>
            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
             
                <Grid  item>
                    <img alt="Nife investor APAC Insider Winner - Best Hybrid Cloud" className="investors-img" src={investor3} style={{ height: "50px", margin:"20px", border: "solid red 0px" }} />
                </Grid>
             
                <Grid  item>
                    <img alt="Nife investor Intel Gold Tier Member" className="investors-img" src={investor2} style={{ height: "50px", margin:"20px", padding: "5px", border: "solid red 0px" }} />
                </Grid>
                <Grid  item>
                    <img alt="Nife investor APAC Insider Winner - Best Hybrid Cloud" className="investors-img" src={investor8} style={{ height: "70px", margin:"20px", border: "solid red 0px",background:"#e3e3e3", borderRadius:"4px"}} />
                </Grid>
                <Grid  item>
                    <img alt="Nife investor STL Top 100" className="investors-img" src={investor7} style={{ height: "50px", margin:"20px", border: "solid red 0px",borderRadius:"4px", }} />
                </Grid>

                <Grid  item>
                    <img alt="Nife investor 5G Barcelona Smart Railway Hackathon Winner" className="investors-img" src={investor9} style={{ height: "50px", margin:"20px", border: "solid red 0px" }} />
                </Grid>

                <Grid  item>
                    <img alt="Nife investor Intel Gold Tier Member" className="investors-img" src={investor6} style={{ height: "50px", margin:"20px",borderRadius:"4px", border: "solid red 0px" }} />
                </Grid>
            
                <Grid  item>
                    <img alt="Nife investor STL Top 100" className="investors-img" src={investor1} style={{ height: "50px", margin:"20px", border: "solid red 0px" }} />
                </Grid>
               
              

            </Grid>
    <p className="gray-50 text-center mb-2 mt-4">
             Accelerators.
                {" "}
            </p>
            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
        
            
            <Grid  item>
                    <img alt="Nife investor Intel Gold Tier Member" className="investors-img" src={investor5} style={{ height: "50px", margin:"20px", padding: "5px", border: "solid red 0px" }} />
                </Grid>
            
                <Grid  item>
                    <img alt="Nife investor 5G Barcelona Smart Railway Hackathon Winner" className="investors-img" src={investor4} style={{ height: "50px", margin:"20px", border: "solid red 0px",background:"#fff", borderRadius:"4px" }} />
                </Grid>
                <Grid  item>
                    <img alt="Nife investor Intel Gold Tier Member" className="investors-img" src={investor10} style={{ height: "50px", margin:"20px", padding: "10px", border: "solid red 0px" }} />
                </Grid>
          </Grid>
        </div>
    )
}