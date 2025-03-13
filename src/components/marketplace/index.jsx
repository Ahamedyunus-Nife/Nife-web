import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiBox, FiExternalLink, FiArrowRight } from 'react-icons/fi';  // Importing fallback and external link icon
import { FaCircle } from 'react-icons/fa';  // Importing the FaCircle icon
import { CircularProgress } from '@mui/material';

// Color map for each type with shades of blue, purple, and green
const typeColorMap = {
    "Productivity": "#1e40af", // Dark Blue
    "Deployment": "#2563eb", // Medium Blue
    "Blogging": "#7c3aed", // Purple
    "Game": "#8b5cf6", // Purple
    "Sample": "#16a34a", // Strong Green
    "Automation": "#10b981", // Bright Green
    "Analytics": "#9333ea", // Purple
    "Archiving and Digital Preservation (DP)": "#3b82f6", // Light Blue
    "Bookmarks": "#34d399", // Mint Green
    "Human Resources Management (HRM)": "#0d6efd", // Standard Blue
    "Media Streaming - Audio Streaming": "#22c55e", // Medium Green
    "Money management": "#0ea5e9", // Sky Blue
    "wiki": "#8b5cf6", // Purple
    "Video Surveillance": "#3b82f6", // Light Blue
    "URL Shorteners": "#10b981", // Bright Green
    "Time Tracking": "#d946ef", // Magenta Purple
    "Task Management & To-do Lists": "#3b82f6", // Light Blue
    "Status/Uptime pages": "#2563eb", // Medium Blue
    "SEO": "#34d399", // Mint Green
    "Software Development": "#7c3aed" // Purple
};


const MarketplaceApps = () => {
    const [apps, setApps] = useState([]);
    const [filteredApps, setFilteredApps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');
    const [typeFilter, setTypeFilter] = useState('');
    const [licenseFilter, setLicenseFilter] = useState('');
    const [types, setTypes] = useState([]);
    const [licenses, setLicenses] = useState([]);

    // Fetch data when component mounts
    useEffect(() => {
        fetch('https://api.npoint.io/429393ab56ea69fc2446')
            .then((response) => response.json())
            .then((data) => {
                setApps(data);
                setFilteredApps(data);

                // Extract unique types and licenses
                const uniqueTypes = [...new Set(data.map((app) => app.type))];
                const uniqueLicenses = [...new Set(data.map((app) => app.License))];

                setTypes(uniqueTypes);
                setLicenses(uniqueLicenses);
                setLoading(false);
            })
            .catch((err) => {
                setError('Failed to fetch apps');
                setLoading(false);
            });
    }, []);

    // Handle search and filter changes
    useEffect(() => {
        let filtered = apps;

        // Filter by search text
        if (search) {
            filtered = filtered.filter((app) =>
                app.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Filter by type
        if (typeFilter) {
            filtered = filtered.filter((app) => app.type === typeFilter);
        }

        // Filter by license
        if (licenseFilter) {
            filtered = filtered.filter((app) => app.License === licenseFilter);
        }

        setFilteredApps(filtered);
    }, [search, typeFilter, licenseFilter, apps]);

    if (loading) {
        return <Loading>
        <CircularProgress/>
        <br/>
        Loading Apps...
        </Loading>;
    }

    if (error) {
        return <Error>{error}</Error>;
    }

    return (
        <Container>
            <Title>Marketplace Apps</Title>

            {/* Search and Filter Section */}
            <SearchFilterContainer>
                <SearchInput
                    type="text"
                    placeholder="Search apps..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {/* Type Filter */}
                <FilterSelect
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                >
                    <option value="">All Types</option>
                    {types.map((type, index) => (
                        <option key={index} value={type}>
                            {type}
                        </option>
                    ))}
                </FilterSelect>

                {/* License Filter */}
                <FilterSelect
                    value={licenseFilter}
                    onChange={(e) => setLicenseFilter(e.target.value)}
                >
                    <option value="">All Licenses</option>
                    {licenses.map((license, index) => (
                        <option key={index} value={license}>
                            {license}
                        </option>
                    ))}
                </FilterSelect>
            </SearchFilterContainer>

            <AppsList>
                {filteredApps.map((app, index) => (
                    <AppCard key={index}>
                        {/* App Logo and Home Link */}
                        <LogoContainer>
                            {app.logo ? (
                                <AppLogo src={app.logo} alt={app.name} />
                            ) : (
                                <FallbackLogo />
                            )}
                            {/* Home Link Button */}
                            <HomeLinkButton href={app.home} target="_blank" rel="noopener noreferrer">
                                <FiExternalLink />
                            </HomeLinkButton>
                        </LogoContainer>

                        <AppName>{app.name}</AppName>

                        {/* Description */}
                        <Description>
                            {app.desc.length > 100 ? `${app.desc.substring(0, 100)}...` : app.desc}
                        </Description>

                        {/* Type as FaCircle icon with color */}
                        <TypeContainer>
                            <FaCircle color={typeColorMap[app.type] || "#000"} size={14} />
                            <TypeText>{app.type}</TypeText>
                        </TypeContainer>

                        <Info><strong>License:</strong> {app.License}</Info>

                        {/* Deploy Button (CTA) */}
                        <DeployButton href={`https://launch.nife.io/deploy?name=${app.name}`} target="_blank" rel="noopener noreferrer" >
                            Tap to Deploy <FiArrowRight />
                        </DeployButton>
                    </AppCard>
                ))}
            </AppsList>
        </Container>
    );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #121212;  // Dark mode background
  color: #eaeaea;  // Light text color for dark mode
`;

const Title = styled.h1`
  text-align: center;
  color: #eaeaea;
`;

const SearchFilterContainer = styled.div`
  display: flex;
  justify-content: center;  // Changed to space-between for better spacing
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;  // Stack the filters vertically on smaller screens
    align-items: center;
  }
`;

const SearchInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  width: 250px;
  font-size: 1em;

  @media (max-width: 768px) {
    width: 80%;  // Make the search input take up most of the width on small screens
    margin-bottom: 10px;
  }
`;

const FilterSelect = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 1em;
  width: 250px;  // Width adjusted for consistency

  @media (max-width: 768px) {
    width: 80%;  // Make the filters take up most of the width on small screens
    margin-bottom: 10px;
  }
`;

const AppsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;  // Stack the apps vertically on small screens
  }
`;

const AppCard = styled.div`
  background: linear-gradient(to bottom, #1e1e1e, #333);  // Gradient background for the card
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease, background 0.3s ease;  // Added transition for background and transform
  color: #eaeaea;  // Light text color in card
  position: relative;  // Positioning context for the circle

  /* Create the large circle with only 1/4 visible initially */
  &::after {
    content: '';
    position: absolute;
    bottom: 0px;  // Position it at the bottom of the card
    right: 0px;  // Position it at the right of the card
    width: 300px;  // Initial size of the circle
    height: 300px;  // Initial size of the circle
    background-color:rgba(37, 100, 235, 0.78);  // Blue color
    clip-path: circle(25% at 100% 100%);  // Clip the circle to show only a quarter of it
    transition: clip-path 0.5s ease, width 0.5s ease, height 0.5s ease;  // Smooth transition for expansion
  }

  &:hover {
    transform: translateY(-10px);
    background: linear-gradient(to bottom, #333, #444);  // Hover gradient effect

    /* On hover, expand the circle fully */
    &::after {
      clip-path: circle(50% at 100% 100%);  // Show the full circle
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 15px;
`;

const AppLogo = styled.img`
  width: 80px;  // Increased logo size
  height: 80px;
  object-fit: contain;
  border-radius: 50%;
`;

const FallbackLogo = styled(FiBox)`
  width: 80px;  // Increased fallback logo size
  height: 80px;
  color: #eaeaea;  // Light color for the fallback icon
`;

const HomeLinkButton = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #0d6efd;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  font-size: 1.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const AppName = styled.h3`
  margin-bottom: 10px;
  font-size: 1.4em;
  font-weight: bold;
  color: white;  // Primary color for app name
`;

const Description = styled.p`
  color: #aaa;  // Slightly lighter text for description
  margin-bottom: 10px;
`;

const Info = styled.p`
  margin: 5px 0;
  color: #bbb;  // Light text for additional info
`;

const TypeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const TypeText = styled.span`
  margin-left: 8px;
  color: #eaeaea;
  font-size: 1em;
`;

const DeployButton = styled.a`
  background-color: transparent;
  color: #4caaf6;
  padding: 12px 0px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 0px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }

  svg {
    margin-left: 10px;
    font-size: 1.2em;
  }
`;

const Loading = styled.div`
  text-align: center;
  min-height: 500vh;
  font-size: 1.5em;
  color: #eaeaea;  // Light color for loading text
`;

const Error = styled.div`
  text-align: center;
  font-size: 1.5em;
  color: red;
`;

export default MarketplaceApps;
