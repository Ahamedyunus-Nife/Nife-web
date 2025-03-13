import { Box, Container } from "@mui/material";
import React, { Suspense } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import NavBar from '../components/navbar/Navbar';
import NavBarUpdates from '../components/navbar/NewUpdates';
import Footer from '../pages/Footer';
import Subscribe from '../pages/Subscribe';
import PlatusSubscribe from '../pages/PlatusSubscribe';

const MainLayout = ({ children }) => {
    const location = useLocation(); // Use the useLocation hook

    return (
        <div>
            <Box sx={{ animation: "announcement 15s ease infinite", background: "linear-gradient(to right, #0d6efd, #0056b3, #4dabf7, #0d6efd9e)", color: "white" }}>
                <Container>
                    <NavBarUpdates />
                </Container>
            </Box>

            <NavBar />
            <main aria-label="Main content">{children}</main>

            {/* Lazy load the subscription component */}
            <Suspense fallback={<div>Loading...</div>}>
                {location.pathname === '/platus' ? <PlatusSubscribe /> : <Subscribe />}
            </Suspense>
            
            <Footer />
        </div>
    );
};

export default MainLayout;
