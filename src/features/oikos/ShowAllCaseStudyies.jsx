import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Container, Card, CardContent, Button, Chip, MenuItem, Select, InputLabel, FormControl, TextField } from '@mui/material';
import caseStudyData from './casestudy.json';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async'; // Import Helmet for SEO

const ShowAllCaseStudy = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // State for selected provider and search keyword
    const [selectedProvider, setSelectedProvider] = useState('');
    const [searchKeyword, setSearchKeyword] = useState('');

    // Get all unique providers from the case study data
    const providers = [...new Set(caseStudyData.map((caseStudy) => caseStudy.solution.provider))];

    // Check for filter parameter in the URL query string
    const urlParams = new URLSearchParams(location.search);
    const filterProvider = urlParams.get('filter');

    useEffect(() => {
        if (filterProvider) {
            setSelectedProvider(filterProvider); // Set provider filter based on URL
        }
    }, [filterProvider]);

    // Filter case studies based on selected provider
    const filteredByProvider = selectedProvider
        ? caseStudyData.filter((caseStudy) => caseStudy.solution.provider === selectedProvider)
        : caseStudyData;

    // Further filter case studies based on the search keyword
    const filteredCaseStudies = filteredByProvider.filter((caseStudy) =>
        caseStudy.client_overview.about.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        caseStudy.solution.description.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    const CaseStudyCard = ({ client_overview, slug, solution }) => {
        return (
            <Card
                sx={{
                    maxWidth: 345,
                    boxShadow: "#1976d26e 0px 20px 30px 0px",
                    cursor: 'pointer',
                    borderRadius: "10px"
                }}
                onClick={() => navigate(`/case-study/${slug}`)}
            >
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {client_overview.about}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {solution.description.length > 300 ? solution.description.slice(0, 300) + "..." : solution.description}
                    </Typography>

                    <Chip label={solution.provider} sx={{ mt: 2 }} size="medium" variant="filled" />
                    <Button sx={{ mt: 2 }} variant="contained" fullWidth endIcon={<FaArrowRight />}>Read</Button>
                </CardContent>
            </Card>
        );
    };

    return (
        <Box>
            {/* SEO with React Helmet */}
            <Helmet>
                <title>Our Case Studies - Nife</title>
                <meta
                    name="description"
                    content="Explore how Nife's solutions have helped our clients succeed in cloud and edge computing."
                />
                <meta
                    name="keywords"
                    content="Case Studies, Cloud Solutions, Edge Computing, Hybrid Cloud, Nife"
                />
                <meta property="og:title" content="Our Case Studies - Nife" />
                <meta
                    property="og:description"
                    content="Explore how Nife's solutions have helped our clients succeed in cloud and edge computing."
                />
                <meta property="og:image" content="https://nife.io/case-studies-banner.png" />
                <meta property="og:image:alt" content="Case Studies Banner" />
                <meta name="twitter:title" content="Our Case Studies - Nife" />
                <meta
                    name="twitter:description"
                    content="Explore how Nife's solutions have helped our clients succeed in cloud and edge computing."
                />
                <meta name="twitter:image" content="https://nife.io/case-studies-banner.png" />
                <meta name="twitter:image:alt" content="Case Studies Banner" />
            </Helmet>

            {/* Banner Section */}
            <Box
                sx={{
                    backgroundColor: '#1976d2',
                    color: 'white',
                    textAlign: 'center',
                    py: 4,
                }}
            >
                <Typography variant="h3">Our Case Studies</Typography>
                <Typography variant="h6">Explore how we've helped our clients succeed</Typography>
            </Box>

            {/* Search and Filter Section */}
            <Container sx={{ mt: 4 }}>
                <Grid container spacing={4} direction="row" alignItems="center">
                    {/* Search Bar */}
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField
                            fullWidth
                            label="Search"
                            variant="outlined"
                            value={searchKeyword}
                            onChange={(e) => setSearchKeyword(e.target.value)}
                        />
                    </Grid>

                    {/* Provider Filter */}
                    <Grid item xs={12} sm={6} md={4}>
                        <FormControl fullWidth>
                            <InputLabel id="provider-filter-label">Filter by Provider</InputLabel>
                            <Select
                                labelId="provider-filter-label"
                                id="provider-filter"
                                value={selectedProvider}
                                onChange={(e) => setSelectedProvider(e.target.value)}
                                label="Filter by Provider"
                            >
                                <MenuItem value="">All Providers</MenuItem>
                                {providers.map((provider, index) => (
                                    <MenuItem key={index} value={provider}>
                                        {provider}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Container>

            {/* Case Study Cards Section */}
            <Container sx={{ mt: 4 }}>
                <Grid container spacing={4}>
                    {filteredCaseStudies.length === 0 ? (
                        <Grid item xs={12}>
                            <Typography variant="h6" color="text.secondary" align="center">
                                No case studies found. Try adjusting your search or filters.
                            </Typography>
                        </Grid>
                    ) : (
                        filteredCaseStudies.map((caseStudy) => (
                            <Grid item xs={12} sm={6} md={4} key={caseStudy.id}>
                                <CaseStudyCard {...caseStudy} />
                            </Grid>
                        ))
                    )}
                </Grid>
            </Container>
        </Box>
    );
};

export default ShowAllCaseStudy;
