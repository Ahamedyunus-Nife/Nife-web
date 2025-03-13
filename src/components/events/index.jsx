// EventsPage.js
import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import EventCard from './EventCard';
import { Helmet } from 'react-helmet-async'

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Nife's Past Events",
    "itemListElement": [
      {
        "@type": "Event",
        "name": "KubeCon + CloudNativeCon 2024",
        "startDate": "2024-04-28",
        "location": {
          "@type": "Place",
          "name": "Los Angeles, CA",
          "address": "Los Angeles, CA"
        },
        "description": "The premier conference for Kubernetes and Cloud Native technologies."
      },
      {
        "@type": "Event",
        "name": "IMC Event 2024",
        "startDate": "2024-05-15",
        "location": {
          "@type": "Place",
          "name": "Las Vegas, NV",
          "address": "Las Vegas, NV"
        },
        "description": "International Marketing Conference focusing on digital marketing trends and technologies."
      },
      {
        "@type": "Event",
        "name": "VMware Explore 2024",
        "startDate": "2024-06-10",
        "location": {
          "@type": "Place",
          "name": "San Francisco, CA",
          "address": "San Francisco, CA"
        },
        "description": "VMware’s global event focusing on cloud computing, virtualization, and enterprise IT solutions."
      },
      {
        "@type": "Event",
        "name": "Metaverse Quest 2024",
        "startDate": "2024-07-20",
        "location": {
          "@type": "Place",
          "name": "Online",
          "address": "Online"
        },
        "description": "Exploring the future of the Metaverse through workshops and expert-led sessions."
      },
      {
        "@type": "Event",
        "name": "TIE IIOT Summit 2021",
        "startDate": "2021-11-03",
        "location": {
          "@type": "Place",
          "name": "Chicago, IL",
          "address": "Chicago, IL"
        },
        "description": "A summit focusing on the Industrial Internet of Things (IIOT) and digital transformation in industries."
      }
    ]
  }


const eventsData = [
  {
    title: 'KubeCon + CloudNativeCon 2024',
    date: 'April 28, 2024',
    location: 'Los Angeles, CA',
    description: 'The premier conference for Kubernetes and Cloud Native technologies.',
    image: 'https://live.staticflickr.com/65535/53612250537_f85ceeb455_z.jpg',
    borderColor: '#3498db', // Blue
  },
  {
    title: 'IMC Event 2024',
    date: 'May 15, 2024',
    location: 'Las Vegas, NV',
    description: 'International Marketing Conference focusing on digital marketing trends and technologies.',
    image: 'https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/imc-event.jpg',
    borderColor: '#e74c3c', // Red
  },
  {
    title: 'VMware Explore 2024',
    date: 'June 10, 2024',
    location: 'San Francisco, CA',
    description: 'VMware’s global event focusing on cloud computing, virtualization, and enterprise IT solutions.',
    image: 'https://blogs.vmware.com/hol/files/2023/11/Screenshot-2023-11-27-at-11.17.25-AM-576x324.png',
    borderColor: '#2ecc71', // Green
  },
  {
    title: 'Metaverse Quest 2024',
    date: 'July 20, 2024',
    location: 'Event',
    description: 'Exploring the future of the Metaverse through workshops and expert-led sessions.',
    image: 'https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/meta-quest-event.jpg',
    borderColor: '#f39c12', // Orange
  },
  {
    title: 'TIE IIOT Summit 2021',
    date: 'November 3, 2021',
    location: 'Chicago, IL',
    description: 'A summit focusing on the Industrial Internet of Things (IIOT) and digital transformation in industries.',
    image: 'https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/nife-event1.jpg',
    borderColor: '#9b59b6', // Purple
  },
];


const EventsPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
       <Helmet>
       <meta name="keywords" content="Nife events, KubeCon 2024, CloudNativeCon 2024, IMC Event 2024, VMware Explore 2024, Metaverse Quest 2024, TIE IIOT Summit 2021, Kubernetes events, cloud computing events, digital marketing events, IIOT summit, metaverse workshops" />

       <link rel="canonical" href="https://nife.io/events" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        </Helmet>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" align="center">
          Nife's Past Events
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {eventsData.map((event, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <EventCard event={event} borderColor={event.borderColor} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default EventsPage;
