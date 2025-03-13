import AnimationTitles from "../components/functions/AnimationTitles";
import { Grid } from "@mui/material";
import award1 from "../images/awards/stl.webp"
import award2 from "../images/awards/ipa.webp"
import award3 from "../images/awards/api.webp"
import award4 from "../images/awards/5g.webp"



export default function Awards() {
    return (
        <div className="mt-4">
            <AnimationTitles
                duration={1}

                title="Awards and Features."
                className="title mx-auto text-align-center"
            />
            <p className="gray-50 text-center mb-2">
                We have been busy this year.
                {" "}
            </p>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <img alt="Nife Award STL Top 100" className="awards-img" src={award1} style={{ height: "250px", border: "solid red 0px" }} />
                <img alt="Nife Award APAC Insider Winner - Best Hybrid Cloud" className="awards-img" src={award3} style={{ height: "250px", border: "solid red 0px" }} />
                <img alt="Nife Award 5G Barcelona Smart Railway Hackathon Winner" className="awards-img" src={award4} style={{ height: "250px", border: "solid red 0px" }} />
                <img alt="Nife Award Intel Gold Tier Member" className="awards-img" src={award2} style={{ height: "250px", padding: "10px", border: "solid red 0px" }} />
            </Grid>
            <p className="gray-50 text-center mb-2 mt-4">
                We have been seen in..
                {" "}
            </p>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{mb:30}}
            >
                <img alt="Nife Featues Website" src={"https://www.nna.jp/files/images/headerLogo_asia.svg"} style={{ height: "50px",padding:"10px", filter: "grayscale(1)", border: "solid red 0px" }} />
                <img alt="Nife Featues Website" src={"https://images.yourstory.com/cs/images/homepage/headerV3_YS.svg"} style={{ height: "50px",padding:"10px", filter: "grayscale(1)", border: "solid red 0px" }} />
                <img alt="Nife Featues Website" src={"https://cdn.prod.website-files.com/62d19f82a58657afab15127b/634e9d046e47a91122da631d_antler-logo-red.svg"} style={{ height: "50px",padding:"10px", filter: "grayscale(1)", border: "solid red 0px" }} />
                <img alt="Nife Featues Website" src={"https://link.springer.com/oscar-static/images/darwin/header/img/logo-springerlink-39ee2a28d8.svg"} style={{ height: "50px",padding:"10px", filter: "grayscale(1)", border: "solid red 0px" }} />
                <img alt="Nife Featues Website" src={" https://img-cdn.thepublive.com/fit-in/580x326/filters:format(webp)/shethepeople/media/agency_attachments/iUYfaBbcMozaYLoGnoov.png"} style={{ height: "50px",padding:"10px",opacity:"0.6", filter: "grayscale(1) invert(100%)", border: "solid red 0px" }} />
                <img alt="Nife Featues Website" src={"https://www.marketinginasia.com/wp-content/uploads/2023/01/MIA-Favicon-3D-1.png"} style={{ height: "50px",padding:"10px", filter: "grayscale(1)", border: "solid red 0px" }} />
                <img alt="Nife Featues Website" src={"https://www.womenlines.com/wp-content/uploads/2020/12/cropped-header_logo-1.png"} style={{ height: "50px",padding:"10px", filter: "grayscale(1)", border: "solid red 0px" }} />
                <img alt="Nife Featues Website" src={"https://www.startupleadership.com/img/menu/logo-big.png"} style={{ height: "50px", filter: "grayscale(1)", padding: "10px", border: "solid red 0px" }} />
               
            </Grid>
        </div>
    )
}