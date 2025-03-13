import { Box, Button, Chip, Grid, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo/logo.png";
import { HoverBoxTooltip } from "./HoverBox";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import GroupComponent from "./GroupComponents";
import { ImNewspaper } from "react-icons/im";
import { GiBarracksTent } from "react-icons/gi";
import { RiOpenSourceFill } from "react-icons/ri";
import ShowTopUseCases from "./GroupSolutions";

function NavBar() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));
  return (
    <Navbar expand="lg" className="py-3">
      <Container>
        <Navbar.Brand className="me-lg-5">
          <img onClick={() => navigate("/")} className="logo" style={{ height: "100px", aspectRatio: "16/9", objectFit: "cover" }} src={logo} alt="Nife Labs logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <HoverBoxTooltip title={
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
              >
                <Grid item>
                  <Box sx={{
                    minWidth: "800px", minHeight: "300px", borderRadius: "12px", p: 4,
                    bordeRadius: "16px",
                    boxShadow: "0 4px 30px rgb(0, 0, 0)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    background: "linear-gradient(to right, #121212, #000)"
                  }}>
                    <Grid container spacing={2}>
                      <GroupComponent />
                    </Grid>
                  </Box>
                </Grid>

              </Grid>

            }>
              <Typography 
              sx={{
                cursor: "pointer", transition: 'opacity 0.3s ease',
                '&:hover': {
                  opacity: 0.5,
                }
              }}>Platform<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 192l128 128 128-128z"></path></svg></Typography>
            </HoverBoxTooltip>

            <HoverBoxTooltip title={
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
              >
                <Grid item>
                  <Box sx={{
                    minWidth: "600px", minHeight: "300px", borderRadius: "12px", p: 4,
                    bordeRadius: "16px",
                    boxShadow: "0 4px 30px rgb(0, 0, 0)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    background: "linear-gradient(to right, #121212, #000)"
                  }}>
                    <Grid container spacing={2}>
                      <ShowTopUseCases />
                    </Grid>
                  </Box>
                </Grid>

              </Grid>

            }>
              <Typography className="px-lg-3"
              sx={{
                cursor: "pointer", transition: 'opacity 0.3s ease',
                '&:hover': {
                  opacity: 0.5,
                }
              }}>Solutions<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 192l128 128 128-128z"></path></svg></Typography>
            </HoverBoxTooltip>

            <HoverBoxTooltip title={
              <Box sx={{
                minWidth: "300px", borderRadius: "12px", p: 2,
                bordeRadius: "16px",
                boxShadow: "0 4px 30px rgb(0, 0, 0)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                background: "linear-gradient(to right, #121212, #000)"
              }}>
                <List dense={true}>


                  <ListItemButton sx={{ px: 1, py: 0.8, borderRadius: "5px" }}
                    onClick={() => navigate("/publications")} >
                    <ListItemIcon>
                      <IconButton aria-labelledby='About Us Icon' sx={{ borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.3)" }}>
                        <ImNewspaper />
                      </IconButton>
                    </ListItemIcon>
                    <ListItemText primary={"Publications"} secondary="View Details"
                    />
                  </ListItemButton>




                  <ListItemButton sx={{ px: 1, py: 0.8, borderRadius: "5px" }}
                    onClick={() => window.location.href = "https://go.doclink.me/view/80B504A5-0570-496D-9FCA-23A727C113E2"} >
                    <ListItemIcon>
                      <IconButton aria-labelledby='Checklist Icon' sx={{ borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.3)" }}>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.99979 7V3C6.99979 2.44772 7.4475 2 7.99979 2H20.9998C21.5521 2 21.9998 2.44772 21.9998 3V16C21.9998 16.5523 21.5521 17 20.9998 17H17V20.9925C17 21.5489 16.551 22 15.9925 22H3.00728C2.45086 22 2 21.5511 2 20.9925L2.00276 8.00748C2.00288 7.45107 2.4518 7 3.01025 7H6.99979ZM8.99979 7H15.9927C16.549 7 17 7.44892 17 8.00748V15H19.9998V4H8.99979V7ZM8.50242 18L14.1593 12.3431L12.7451 10.9289L8.50242 15.1716L6.3811 13.0503L4.96689 14.4645L8.50242 18Z"></path></svg>
                      </IconButton>
                    </ListItemIcon>
                    <ListItemText primary={"Checklist"} secondary="for DevOps"
                    />
                  </ListItemButton>



                  <ListItemButton sx={{ px: 1, py: 0.8, borderRadius: "5px" }}
                    onClick={() => window.location.href = "https://go.doclink.me/view/686D4C3C-03AD-4679-A06D-39B193E0550A"} >
                    <ListItemIcon>
                      <IconButton aria-labelledby='Cheat Sheet Icon' sx={{ borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.3)" }}>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm7 2h8v2h-8V7zm0 4h8v2h-8v-2zm0 4h8v2h-8v-2zM6 7h2v2H6V7zm0 4h2v2H6v-2zm0 4h2v2H6v-2z"></path></svg>
                      </IconButton>
                    </ListItemIcon>
                    <ListItemText primary={"Cheat Sheet"} secondary="Linux command lines"
                    />
                  </ListItemButton>






                  <ListItemButton sx={{ px: 1, py: 0.8, borderRadius: "5px" }}
                    onClick={() => window.location.href = "/events"} >
                    <ListItemIcon>
                      <IconButton aria-labelledby='Partner Icon' sx={{ borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.3)" }}>
                        <GiBarracksTent />
                      </IconButton>
                    </ListItemIcon>
                    <ListItemText primary={"Events"} secondary="View Details"
                    />
                  </ListItemButton>
                  <ListItemButton sx={{ px: 1, py: 0.8, borderRadius: "5px" }}
                    onClick={() => window.location.href = "/open-source/"} >
                    <ListItemIcon>
                      <IconButton aria-labelledby='Career Icon' sx={{ borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.3)" }}>
                        <RiOpenSourceFill />
                      </IconButton>
                    </ListItemIcon>
                    <ListItemText primary={"Open Source"} secondary="View Details"
                    />
                  </ListItemButton>
                  <ListItemButton sx={{ px: 1, py: 0.8, borderRadius: "5px" }}
                    onClick={() => window.location.href = "https://freetools.nife.io"} >
                    <ListItemIcon>
                      <IconButton aria-labelledby='Career Icon' sx={{ borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.3)" }}>
                        <RiOpenSourceFill />
                      </IconButton>
                    </ListItemIcon>
                    <ListItemText primary={"Free Tools"} secondary="View Details"
                    />
                  </ListItemButton>



                  <HoverBoxTooltip
                    title={
                      <Box sx={{
                        minWidth: "300px",
                        borderRadius: "12px",
                        p: 2,
                        boxShadow: "0 4px 30px rgb(0, 0, 0)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        background: "linear-gradient(to right, #121212, #000)"
                      }}>
                        <ListItemButton sx={{ px: 1, py: 0.8, borderRadius: "5px" }}
                          onClick={() => window.location.href = "https://beacon.by/nife-labs/devops-for-modern-businesses-harness-the-power-of-devops-to-perform-better?utm_source=Newsletter&utm_medium=email&utm_content=Your+Ebook+Download&utm_campaign=Ebook+Email"} >
                          <ListItemText primary={"DevOps for Modern Businesses"} />
                        </ListItemButton>
                        <ListItemButton sx={{ px: 1, py: 0.8, borderRadius: "5px" }}
                          onClick={() => window.location.href = "https://beacon.by/nife-labs/multi-cloud-technology-for-financial-services"} >
                          <ListItemText primary={"Cloud Technology & its Benefits for Financial Services​"} />
                        </ListItemButton>

                      </Box>
                    }
                    placement="right" // Tooltip appears on the right side
                  >
                    <Typography
                    sx={{ 
                        py:1,
                        cursor: "pointer",
                        transition: "background 0.3s ease, opacity 0.3s ease",
                        '&:hover': { 
                        background: "rgba(255, 255, 255, 0.1)", 
                        borderRadius: "8px",
                        opacity: 0.8 
                                  }
                        }}>
                      <ListItemIcon>
                        <IconButton aria-labelledby='Case Study Icon' sx={{ borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.3)",ml:1,mt:1 }}>
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M428 224H288a48 48 0 0 1-48-48V36a4 4 0 0 0-4-4h-92a64 64 0 0 0-64 64v320a64 64 0 0 0 64 64h224a64 64 0 0 0 64-64V228a4 4 0 0 0-4-4zm-92 160H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32zm0-80H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32z"></path><path d="M419.22 188.59 275.41 44.78a2 2 0 0 0-3.41 1.41V176a16 16 0 0 0 16 16h129.81a2 2 0 0 0 1.41-3.41z"></path></svg>
                        </IconButton>
                        <ListItemText primary={"E book"} secondary="view details" sx={{ml:2, mt:1}} />
                      </ListItemIcon>
                     <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="m10 17l5-5l-5-5z" /></svg>
                    </Typography>
                  </HoverBoxTooltip>

                </List>
              </Box>
            }>

              <Typography className="pr-lg-3" sx={{
              cursor: "pointer", transition: 'opacity 0.3s ease',
              '&:hover': {
                opacity: 0.5,
              }
            }}>
                Resources<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 192l128 128 128-128z"></path></svg>
              </Typography>
            </HoverBoxTooltip >
            <Typography sx={{
              cursor: "pointer", transition: 'opacity 0.3s ease',
              '&:hover': {
                opacity: 0.5,
              }
            }}
              onClick={() => window.location.href = "/marketplace/"} className="px-lg-2">Marketplace</Typography>

            <Typography sx={{
              cursor: "pointer", transition: 'opacity 0.3s ease',
              '&:hover': {
                opacity: 0.5,
              }
            }}
              onClick={() => window.location.href = "https://docs.nife.io/blog/"} className="px-lg-2">Blogs</Typography>

            <HoverBoxTooltip title={
              <Box sx={{
                minWidth: "300px", borderRadius: "12px", p: 2,
                bordeRadius: "16px",
                boxShadow: "0 4px 30px rgb(0, 0, 0)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                background: "linear-gradient(to right, #121212, #000)"
              }}>
                <ListItemButton sx={{ px: 1, py: 0.8, borderRadius: "5px" }}
                  onClick={() => navigate("/about-us")} >
                  <ListItemIcon>
                    <IconButton aria-labelledby='About Us Icon' sx={{ borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.3)" }}>
                      <svg stroke="currentColor" fill="none" style={{ rotate: "180deg" }} stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
                    </IconButton>
                  </ListItemIcon>
                  <ListItemText primary={"About Us"} secondary="Our Story"
                  />
                </ListItemButton>
                <ListItemButton sx={{ px: 1, py: 0.8, borderRadius: "5px" }}
                  onClick={() => window.location.href = "/partner"} >
                  <ListItemIcon>
                    <IconButton aria-labelledby='Partner Icon' sx={{ borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.3)" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke-width="2" viewBox="0 0 24 24" width="1em" height="1em" class="h-5 w-5 stroke-2 group-hover/icon:stroke-blue-500  stroke-neutral-500 undefined"><path d="M9 16A7 7 0 1 0 9 2a7 7 0 0 0 0 14Z"></path><path d="M15 22a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"></path></svg>
                    </IconButton>
                  </ListItemIcon>
                  <ListItemText primary={"Partner"} secondary="View Details"
                  />
                </ListItemButton>
                <ListItemButton sx={{ px: 1, py: 0.8, borderRadius: "5px" }}
                  onClick={() => window.location.href = "/careers/"} >
                  <ListItemIcon>
                    <IconButton aria-labelledby='Career Icon' sx={{ borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.3)" }}>
                      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 16l6 -7l5 5l5 -6"></path><path d="M15 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M10 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M4 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M20 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path></svg>
                    </IconButton>
                  </ListItemIcon>
                  <ListItemText primary={"Career"} secondary="Future Opportunities"
                  />
                </ListItemButton>

              </Box>
            }>
              <Typography className="px-lg-3"
              sx={{
                cursor: "pointer", transition: 'opacity 0.3s ease',
                '&:hover': {
                  opacity: 0.5,
                }
              }}>
                Company<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 192l128 128 128-128z"></path></svg>
              </Typography>
            </HoverBoxTooltip>


          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center order">
          <span className="line d-lg-inline-block d-none"></span>

          {isMobile ? <Chip onClick={() => window.location.href = "https://launch.nife.io/"} onDelete={() => window.location.href = "https://launch.nife.io/"} deleteIcon={<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M15.5 5H11l5 7-5 7h4.5l5-7z"></path><path d="M8.5 5H4l5 7-5 7h4.5l5-7z"></path></svg>} label="GET STARTED TODAY" clickable /> : <Button
            fullWidth
            // sx={{ml:3}}
            variant="contained"
            onClick={() => window.location.href = "https://launch.nife.io/"}
          >
            Get started
          </Button>}
        </div>
      </Container >
    </Navbar >
  );
}

export default NavBar;
