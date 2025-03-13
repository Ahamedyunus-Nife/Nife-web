import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Line,
    Marker
} from "react-simple-maps";
import awslogo from "../images/logo/aws.png";

// GeoJSON URL for the world map
import geoUrl from "../images/map.json";

// Coordinates for India (source)
const indiaCoordinates = [78.9629, 20.5937];

// Coordinates for top 20 cities (destinations)
const topCities = [
    { name: "Tokyo", coordinates: [139.6917, 35.6895] },
    { name: "Delhi", coordinates: [77.1025, 28.7041] },
    { name: "Shanghai", coordinates: [121.4737, 31.2304] },
    { name: "Sao Paulo", coordinates: [-46.6333, -23.5505] },
    { name: "Mumbai", coordinates: [72.8777, 19.0760] },
    { name: "Mexico City", coordinates: [-99.1332, 19.4326] },
    { name: "Beijing", coordinates: [116.4074, 39.9042] },
    { name: "Osaka", coordinates: [135.5022, 34.6937] },
    { name: "Cairo", coordinates: [31.2357, 30.0444] },
    { name: "New York City", coordinates: [-74.0060, 40.7128] },
    { name: "Dhaka", coordinates: [90.4125, 23.8103] },
    { name: "Karachi", coordinates: [67.0011, 24.8607] },
    { name: "Buenos Aires", coordinates: [-58.3816, -34.6037] },
    { name: "Istanbul", coordinates: [28.9784, 41.0082] },
    { name: "Kolkata", coordinates: [88.3639, 22.5726] },
    { name: "Manila", coordinates: [120.9842, 14.5995] },
    { name: "Lagos", coordinates: [3.3792, 6.5244] },
    { name: "Rio de Janeiro", coordinates: [-43.1729, -22.9068] },
    { name: "Guangzhou", coordinates: [113.2644, 23.1291] },
    { name: "Los Angeles", coordinates: [-118.2437, 34.0522] },
    { name: "Moscow", coordinates: [37.6173, 55.7558] },
    { name: "Chengdu", coordinates: [104.0665, 30.5728] },
    { name: "Bangalore", coordinates: [77.5946, 12.9716] },
    { name: "Paris", coordinates: [2.3522, 48.8566] },
    { name: "Jakarta", coordinates: [106.8456, -6.2088] },
    { name: "London", coordinates: [-0.1276, 51.5074] },
    { name: "Lima", coordinates: [-77.0428, -12.0464] },
    { name: "Bangkok", coordinates: [100.5167, 13.7500] },
    { name: "Tehran", coordinates: [51.3890, 35.6892] },
    { name: "Ho Chi Minh City", coordinates: [106.6297, 10.8231] },
    { name: "Hong Kong", coordinates: [114.1733, 22.3200] },
    { name: "Hyderabad", coordinates: [78.4744, 17.3850] },
    { name: "Santiago", coordinates: [-70.6483, -33.4569] },
    { name: "Singapore", coordinates: [103.8198, 1.3521] },
    { name: "Kuala Lumpur", coordinates: [101.6869, 3.139] },
    { name: "Riyadh", coordinates: [46.7100, 24.6877] },
    { name: "Baghdad", coordinates: [44.4268, 33.3152] },
    { name: "Kiev", coordinates: [30.5236, 50.4547] },
    { name: "Berlin", coordinates: [13.4050, 52.5200] },
    { name: "Bucharest", coordinates: [26.1025, 44.4268] },
    { name: "Budapest", coordinates: [19.0402, 47.4979] },
    { name: "Athens", coordinates: [23.8103, 37.9838] },
    { name: "Madrid", coordinates: [-3.7038, 40.4168] },
    { name: "Vienna", coordinates: [16.3738, 48.2082] },
    { name: "Brussels", coordinates: [4.3499, 50.8503] },
    { name: "Warsaw", coordinates: [21.0122, 52.2298] },
    { name: "Zurich", coordinates: [8.5417, 47.3769] },
    { name: "Dusseldorf", coordinates: [6.7735, 51.2277] },
    { name: "Oslo", coordinates: [10.7522, 59.9139] },
    // Additional North American cities
    { name: "Toronto", coordinates: [-79.3832, 43.6532] },
    { name: "Chicago", coordinates: [-87.6298, 41.8781] },
    { name: "San Antonio", coordinates: [-98.4936, 29.4241] },
    { name: "San Diego", coordinates: [-117.1611, 32.7157] },
    { name: "Dallas", coordinates: [-96.7969, 32.7767] },
    { name: "San Jose", coordinates: [-121.8863, 37.3382] },
    { name: "Austin", coordinates: [-97.7431, 30.2672] },
    { name: "Jacksonville", coordinates: [-81.6557, 30.3322] },
    { name: "San Francisco", coordinates: [-122.4194, 37.7749] },
    { name: "Charlotte", coordinates: [-80.8431, 35.2271] },
    { name: "Denver", coordinates: [-104.9903, 39.7392] },
    { name: "Washington, D.C.", coordinates: [-77.0369, 38.9072] },
    { name: "Boston", coordinates: [-71.0589, 42.3601] },
];



const LocationForOikos = ({ hideTitle }) => {
    return (
        <Container>
            {!hideTitle && <h2 className="title mx-auto mt-4 text-align-center gradient-text fw-bold">
                Scale to Anywhere in mintues.
            </h2>}


            {!hideTitle && <p className="gray-50 text-center mb-2">
                Scale anywhere! Sky is the limit.
                {" "}
            </p>}
            <Grid container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                spacing={2} className="grid-container">

                <Grid item xs={12} sm={6} >
                    <div>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Card sx={{ mt: 2, minHeight: "150px" }}>
                                    <div style={{ paddingLeft: "10px", paddingTop: "10px" }}>
                                        <svg stroke="currentColor" fill="none" stroke-width="1" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.942 13.02a9 9 0 1 0 -9.47 7.964"></path>
                                            <path d="M3.6 9h16.8"></path>
                                            <path d="M3.6 15h9.9"></path>
                                            <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                                            <path d="M12.5 3c2 3.206 2.837 6.913 2.508 10.537"></path>
                                            <path d="M20 21l2 -2l-2 -2"></path>
                                            <path d="M17 17l-2 2l2 2"></path>
                                        </svg>
                                    </div>
                                    <CardContent>
                                        <Typography variant="h5" component="div" sx={{ fontSize: "1rem" }}>
                                            500+ Locations
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Nife Locations ready to use
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Card sx={{ mt: 2, minHeight: "150px" }}>
                                    <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                                        <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
                                            <div style={{ paddingLeft: "20px", paddingTop: "20px" }}>
                                                <img alt='Nife Scaling supports AWS' src={awslogo} style={{ height: "25px", width: "auto", objectFit: "contain", marginRight: "10px", aspectRatio: "1/1" }} />
                                                <img alt='Nife Scaling supports GCP' src={"https://brandeps.com/logo-download/G/Google-Cloud-logo-vector-01.svg"} style={{ height: "25px", width: "25px", objectFit: "cover", marginRight: "10px", aspectRatio: "1/1" }} />
                                                <img alt='Nife Scaling supports Microsoft Azure' src={"https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg"} style={{ height: "25px", width: "25px", objectFit: "cover", marginRight: "10px", aspectRatio: "1/1" }} />

                                            </div>

                                        </Grid>
                                    </Grid>
                                    <CardContent>
                                        <Typography variant="h5" component="div" sx={{ fontSize: "1rem" }}>
                                            Bring your own Cloud (BYOC)
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Use AWS, GCP, Azure to scale your apps
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Card sx={{ mt: 0, minHeight: "150px" }}>
                                    <div style={{ paddingLeft: "10px", paddingTop: "10px" }}>
                                        <svg stroke="currentColor" fill="none" stroke-width="1" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"></path>
                                            <path d="M15 20h-9a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3h12"></path>
                                            <path d="M7 8v.01"></path>
                                            <path d="M7 16v.01"></path>
                                            <path d="M20 15l-2 3h3l-2 3"></path>
                                        </svg>
                                    </div>
                                    <CardContent>
                                        <Typography variant="h5" component="div" sx={{ fontSize: "1rem" }}>
                                            Bring your own Host (BYOH)
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Add your host and deploy apps
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Card sx={{ mt: 0, minHeight: "150px" }}>
                                    <div style={{ paddingLeft: "20px", paddingTop: "10px" }}>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.5 2a5.001 5.001 0 0 1 4.905 4.027A3 3 0 0 1 13 12H3.5A3.5 3.5 0 0 1 .035 9H5.5a.5.5 0 0 0 0-1H.035a3.5 3.5 0 0 1 3.871-2.977A5.001 5.001 0 0 1 8.5 2zm-6 8a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zM0 13.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"></path>
                                        </svg>
                                    </div>
                                    <CardContent>
                                        <Typography variant="h5" component="div" sx={{ fontSize: "1rem" }}>
                                            Stand Alone Cluster
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Add cluster and deploy apps.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <div className="map-container text-align-center">
                        <ComposableMap projection="geoEquirectangular">
                            <Geographies geography={geoUrl}>
                                {({ geographies }) =>
                                    geographies.map((geo) => (
                                        <Geography
                                            fill="#292929" // Dark grey fill color
                                            key={geo.rsmKey}
                                            geography={geo}
                                        />
                                    ))
                                }
                            </Geographies>
                            {topCities.map((city, index) => (
                                <React.Fragment key={index}>
                                    <Marker coordinates={city.coordinates}>
                                        <circle
                                            r={2}
                                            fill="#2dd881"
                                        >
                                            <animate
                                                attributeName="opacity"
                                                dur="0.5s"
                                                values="0.5;1;0.9;0.8;0.7"
                                                repeatCount="indefinite"
                                                begin={`${index * 0.02}s`} // Delay each circle based on its index
                                            />
                                        </circle>
                                        <circle
                                            r={2}
                                            fill="#00de034d"
                                        >
                                            <animate
                                                attributeName="r"
                                                dur="2s"
                                                values="3;6;3;3"
                                                repeatCount="indefinite"
                                                begin={`${index * 0.02}s`} // Delay each circle based on its index
                                            />
                                            <animate
                                                attributeName="opacity"
                                                dur="2s"
                                                values="1;0.7;1;1"
                                                repeatCount="indefinite"
                                                begin={`${index * 0.5}s`} // Delay each circle based on its index
                                            />
                                        </circle>
                                    </Marker>
                                </React.Fragment>
                            ))}
                        </ComposableMap>
                    </div>
                </Grid>

                {!hideTitle && <Grid item xs={12} sm={12}>
                    <Typography variant='h4' component={"h2"} sx={{ fontWeight: "bold", textAlign: "center", mt: 0, mb: 2 }}>Paying only for machines that actually run</Typography>
                    <p className="gray-50 text-center mb-4">
                        with our advance scaling features.
                        {" "}
                    </p>
                </Grid>}
                {!hideTitle && <Grid item xs={6} sm={6} md={3}>
                    <div className="text-align-center">
                        <svg
                            stroke="url(#grad1)"
                            style={{ textAlign: "center" }}
                            fill="none"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            height="50px"
                            width="50px"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: "grey", stopOpacity: 1 }} />
                                </linearGradient>
                            </defs>
                            <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
                        </svg>
                        <Typography variant="body2" sx={{ my: 2, textAlign: "center" }}>Move locations</Typography>
                    </div></Grid>}
                {!hideTitle && <Grid item xs={6} sm={6} md={3}>
                    <div className="text-align-center">
                        <svg
                            style={{ textAlign: "center" }}
                            fill="url(#grad1)"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            height="50px"
                            width="50px"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: "grey", stopOpacity: 1 }} />
                                </linearGradient>
                            </defs>
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M20 1v3h3v2h-3v3h-2V6h-3V4h3V1h2zm-8 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm1-9.94v2.02A6.53 6.53 0 0 0 12 5c-3.35 0-6 2.57-6 6.2 0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.79 6-9.14V11h2v.2c0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 6.22 7.8 3 12 3c.34 0 .67.02 1 .06z"></path>
                        </svg>
                        <Typography variant="body2" sx={{ my: 2, textAlign: "center" }}>Add locations</Typography>
                    </div></Grid>}
                {!hideTitle && <Grid item xs={6} sm={6} md={3}>
                    <div className="text-align-center">
                        <svg
                            style={{ textAlign: "center" }}
                            fill="url(#grad1)"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            height="50px"
                            width="50px"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: "grey", stopOpacity: 1 }} />
                                </linearGradient>
                            </defs>
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M18 11v.2c0 2.34-1.95 5.44-6 9.14-4.05-3.7-6-6.79-6-9.14C6 7.57 8.65 5 12 5c.34 0 .68.03 1 .08V3.06c-.33-.04-.66-.06-1-.06-4.2 0-8 3.22-8 8.2 0 3.32 2.67 7.25 8 11.8 5.33-4.55 8-8.48 8-11.8V11h-2z"></path>
                            <circle cx="12" cy="11" r="2"></circle>
                            <path d="m22.54 2.88-1.42-1.42L19 3.59l-2.12-2.13-1.42 1.42L17.59 5l-2.13 2.12 1.42 1.42L19 6.41l2.12 2.13 1.42-1.42L20.41 5z"></path>
                        </svg>
                        <Typography variant="body2" sx={{ my: 2, textAlign: "center" }}>Suspend locations</Typography>
                    </div></Grid>}
                {!hideTitle && <Grid item xs={6} sm={6} md={3}>
                    <div className="text-align-center">
                        <svg
                            style={{ textAlign: "center" }}
                            fill="url(#grad1)"
                            stroke="url(#grad1)"
                            stroke-width="0.5"
                            viewBox="0 0 16 16"
                            height="50px"
                            width="50px"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: "white", stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: "grey", stopOpacity: 1 }} />
                                </linearGradient>
                            </defs>
                            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"></path>
                            <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"></path>
                        </svg>
                        <Typography variant="body2" sx={{ my: 2, textAlign: "center" }}>Backup location</Typography>
                    </div>
                </Grid>}
            </Grid>
            <div style={{ marginBottom: "10px" }}></div>
        </Container>
    );
};

export default LocationForOikos;
