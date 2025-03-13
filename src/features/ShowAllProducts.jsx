import React, { startTransition } from 'react';
import { Container, Grid, Typography, Button, Card, CardContent, CardMedia, Box } from '@mui/material';

// Sample images for the products, you can replace these with actual image URLs or assets.
import oikosImg from '../images/logo/OikosDark.svg';
import platusImg from '../images/logo/PlatusNew.svg';
import syncdriveImg from '../images/logo/SyncDriveLight.svg';
import HorizontalLine from '../components/functions/HorizontalLine';
import { useNavigate } from 'react-router-dom';
import { Security } from '@mui/icons-material';
import { MdOutlineAutoAwesome } from 'react-icons/md';
import { PiChartLineUpBold } from 'react-icons/pi';
import { Helmet } from 'react-helmet-async'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import AnimatedComponent from '../pages/Security';
import LocationForOikos from '../pages/LocationForOikos';
import AIDrivenFeatures from './AIDrivenDetails';

const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Innovative Products for Business Growth | Nife.io",
    "description": "Discover Nife.io's cutting-edge products like Oikos, Platus, SyncDrive, Zeke, and Nyx 6G designed to enhance deployment, cloud management, and connectivity for your business.",
    "url": "https://nife.io/products",
    "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Oikos", "description": "Deploy anything, anytime, anywhere across multiple infrastructures and environments." },
            { "@type": "ListItem", "position": 2, "name": "Platus", "description": "Gain insights into your cloud infrastructure and manage deployment budgets effectively." },
            { "@type": "ListItem", "position": 3, "name": "SyncDrive", "description": "Sync your local and cloud storage instantly." },
            { "@type": "ListItem", "position": 4, "name": "Zeke", "description": "Standalone tools designed to enhance the Oikos platform." },
            { "@type": "ListItem", "position": 5, "name": "Nyx 6G", "description": "Experience ultra-fast data speeds and seamless communication with Nyx 6G." }
        ]
    }
};

const ShowAllProducts = () => {

    return (
        <div>
            <Helmet>
                {/* Metadata for SEO */}

                <meta
                    name="description"
                    content="Explore Nife.io's world-class products like Oikos, Platus, SyncDrive, Zeke, and Nyx 6G to enhance deployment, cloud management, and next-gen connectivity."
                />
                <meta
                    name="keywords"
                    content="Nife.io products, Oikos, Platus, SyncDrive, Zeke, Nyx 6G, deployment tools, cloud management, connectivity tools, AI-driven solutions, scalable products"
                />
                <link rel="canonical" href="https://nife.io/products" />
                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>
            {/* Header Section */}
            <header style={{ background: 'linear-gradient(to right, #0d6efd, #0056b3, #4dabf7, #0d6efd9e)', padding: '0', borderBottom: '0px solid #000' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={0} alignItems="center" justifyContent={"flex-start"}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h3" color="white" gutterBottom>
                                Innovative Solutions for the Future
                            </Typography>
                            <Typography variant="h5" color="white" paragraph>
                                Explore our world-class products designed to enhance your business and everyday life.
                            </Typography>
                            <Button variant="contained" sx={{ color: "white" }} size="large" href="#products">
                                Explore Our Products
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <img src="https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/Online%20world-amico.svg" alt="Hero" style={{ width: '100%', borderRadius: '8px' }} />
                        </Grid>
                    </Grid>
                </Container>
            </header>

            {/* Products Section */}
            <section id="products" style={{ padding: '80px 0' }}>
                <Container maxWidth="lg">
                    <Typography variant="h1" sx={{ fontWeight: "bold", fontSize: "3rem" }} align="center" gutterBottom>
                        Our Products
                    </Typography>
                    <HorizontalLine />
                    <br />
                    <Grid container spacing={4} justifyContent="center">
                        {/* Product Cards */}
                        <ProductCard
                            name="Oikos"
                            tagline="Deploy Anything! Anytime Anywhere!"
                            description=" Deploy workloads to distributed computing resources over multiple infrastructures, environments & geographies."
                            img={oikosImg}
                            link="/oikos"
                        />

                        <ProductCard
                            name="Zeke"
                            tagline="The Heartbeat of Your Cloud Ecosystem"
                            description="Zeke is a standalone solution deployed on your server, seamlessly connecting and orchestrating your multicloud environment for optimized performance."
                            img={"https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/Zeke.svg"}
                            link="/"
                        />
                        <ProductCard
                            name="Platus"
                            tagline="Navigating Your Deployment budgets with Precisions"
                            description="Connect your cloud accounts to gain in-depth insights into your cloud infrastructure."
                            img={platusImg}
                            link="/platus"
                        />


                        <ProductCard
                            name="Nyx 6G"
                            tagline="Decentralized, Intelligent, and Ultra-Fast—Welcome to the New Edge"
                            description="Driving the future of intelligent applications with high-speed edge computing and 6G connectivity for enhanced user experiences."
                            img={"https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/nyx-6g.svg"}
                            link="/nyx-6g"
                        />
                        <ProductCard
                            name="SyncDrive"
                            tagline="Syncing Innovation Crafted for your own Infra"
                            description="Sync, store, and transfer files securely from local systems to your private cloud at lightning speed, giving you complete control over the data anytime."
                            img={syncdriveImg}
                            link="/"
                        />
                    </Grid>
                </Container>
            </section>

            {/* Features Section */}
            <section style={{ padding: '80px 0' }}>
                <Container maxWidth="lg">
                    <Typography variant="h4" align="center" sx={{ mb: 10 }} gutterBottom>
                        Why Choose Our Products?
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} sm={4} sx={{ color: "#366df5" }}>
                            <Box textAlign="center" sx={{ mb: 2 }}>

                                <Security style={{ fontSize: "2rem" }} />
                                <Typography variant="h5" sx={{ fontWeight: "bold" }}>Security</Typography>
                            </Box>
                        </Grid>
                        <Grid item sm={8}>

                            <Typography paragraph>State-of-the-art protection for your devices and data, ensuring that your business stays safe and secure.</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <AnimatedComponent hideTitle={true} />
                        </Grid>
                        <Grid item xs={12} sm={4} sx={{ color: "#e252a0" }}>
                            <Box textAlign="center" sx={{ mb: 2 }}>

                                <MdOutlineAutoAwesome style={{ fontSize: "2rem" }} />
                                <Typography variant="h5" sx={{ fontWeight: "bold" }}>AI-Driven</Typography>

                            </Box>
                        </Grid>
                        <Grid item sm={8}>
                            <Typography paragraph>Leverage the power of artificial intelligence for smarter solutions that optimize your processes and reduce costs.</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <AIDrivenFeatures />
                        </Grid>
                        <Grid item xs={12} sm={4} sx={{ color: "#21b852" }}>
                            <Box textAlign="center" sx={{ mb: 2 }}>

                                <PiChartLineUpBold style={{ fontSize: "2rem" }} />
                                <Typography variant="h5" sx={{ fontWeight: "bold" }}>Scalability</Typography>
                            </Box>
                        </Grid>
                        <Grid item sm={8}>
                            <Typography paragraph>Built to scale with your growing business needs, our products are designed for flexibility and long-term success.</Typography>

                        </Grid>
                        <Grid item xs={12}>
                            <LocationForOikos hideTitle={true} />
                        </Grid>
                    </Grid>

                    {/* {selectedTab === "security" && }
                    {selectedTab === "Scalability" && <LocationForOikos/>}
                    {selectedTab === "ai" && <AnimatedComponent/>} */}
                </Container>
            </section>


        </div>
    );
};

const ProductCard = ({ name, tagline, description, img, link }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        startTransition(() => {
            navigate(link); // Navigate to the provided link without blocking UI
        });
    };

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: '12px', boxShadow: 3 }}>
                <CardMedia
                    component="img"
                    alt={name}
                    sx={{ objectFit: "contain", p: 4, maxHeight: '200px' }}
                    image={img}
                />
                <CardContent>
                    {/* <Typography variant="h6" sx={{fontSize:"1.2rem", fontWeight:"bold", textAlign:"center"}}>{name}</Typography> */}
                    <Typography variant="body2" sx={{ color: name === "Zeke" ? "#c6994b" : ("#00d7ff"), fontSize: "1rem", fontStyle: "italic", textAlign: "center", mb: 2 }} paragraph><RiDoubleQuotesL />{tagline} <RiDoubleQuotesR /></Typography>
                    <Typography variant="body2" sx={{ fontSize: "1.5rem" }} textAlign={"center"} color="textSecondary" paragraph>{description}</Typography>
                    <Button
                        size="small"
                        color="primary"
                        fullWidth
                        onClick={handleNavigate}  // Use the handler here
                        sx={{ mt: 2 }}>
                        Learn More
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ShowAllProducts;
