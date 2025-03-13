import { LinkedIn } from '@mui/icons-material';
import { Box, Button, Container, Grid, IconButton, Link, Paper, Typography } from '@mui/material';
import React from 'react';
import { FaRegFileAlt } from 'react-icons/fa'; // For patent icon
import { IoNewspaperOutline } from 'react-icons/io5';
import { Helmet } from 'react-helmet-async'

const publicationsData = [
  {
    title: 'Object Recognition and Classification for Robotics Using Virtualization and AI Acceleration on Cloud and Edge',
    type: 'Conference paper',
    authors: 'Aditi Patil & Nida Sahar Rafee',
    date: '20 September 2021',
    abstract: `With the development of cloud robotics, a much broader scope of multidisciplinary applications to create smart systems is now available...`,
    cover: 'https://media.springernature.com/w316/springer-static/cover-hires/book/978-981-16-2937-2',
    link: 'https://link.springer.com/chapter/10.1007/978-981-16-2937-2_10',  // Link to full paper or publication
  },
  {
    "title": "TIA White Paper: Resilience at the Edge",
    "type": "White Paper",
"authors": "Jack Pyne, Jayson Hamilton (MidPoint Technology Group), Jim Young (CommScope), Marc Cram (Legrand), Nida Sahar (Nife), Scott Payton (Global Data Center Engineering), Jacques Fluet (TIA)",
    "date": "2024",
    "abstract": "When planning an Edge Data Center (EDC) deployment, the need to address availability of planned workloads to ensure resiliency is a top priority. The key characteristics of an EDC can be significantly different than those that top the list for larger enterprise or multi-tenant data centers. To help balance the costs and operational aspects of any EDC strategy, this paper outlines a number of critical questions that should be addressed to ensure resiliency at the edge.",
    "cover": "https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/TIA-White-Paper-Resilience-at-the-Edge.jpg",
    "link": "https://tiaonline.org/resource/tia-white-paper-resilience-at-the-edge/"
  }
,  
  {
    title: 'Patents by Inventor Nida Sahar Rafee',
    type: 'Patent',
    date: 'September 27, 2021',
    authors: 'Nida Sahar Rafee',
    cover: 'https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/patent.png',
    patents: [
      {
        number: '11860890',
        type: 'Grant',
        filed: 'September 27, 2021',
        date: 'January 2, 2024',
        abstract: 'A processor-implemented method for synchronizing and reconciling data stream in real-time between an edge node and a cloud node...',
        cover: 'https://www.example.com/patent-cover.jpg',  // Example patent cover
        link: 'https://patents.justia.com/inventor/nida-sahar-rafee',  // Link to full patent or USPTO details
      },
      {
        number: '20230095514',
        type: 'Application',
        filed: 'September 27, 2021',
        date: 'March 30, 2023',
        abstract: 'A processor-implemented method for synchronizing and reconciling data stream in real-time between an edge node and a cloud node...',
        cover: 'https://www.example.com/patent-cover2.jpg',  // Another example patent cover
        link: 'https://patents.justia.com/inventor/nida-sahar-rafee',
      }
    ]
  }
];

const PublicationsPage = () => {
  return (
    <>

      <Helmet>
        
        <meta name="description" content="Explore patents and research publications by Nida Sahar Rafee on AI, edge computing, and cloud robotics. Learn about real-time data synchronization and advanced AI solutions." />
        <meta name="keywords" content="AI Research, Cloud Robotics, Edge Computing, Data Synchronization, Nida Sahar Rafee, AI Patents" />
        <link rel="canonical" href="https://nife.io/publications" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Collection",
            "name": "Publications",
            "hasPart": [
              {
                "@type": "ScholarlyArticle",
                "headline": "Object Recognition and Classification for Robotics Using Virtualization and AI Acceleration on Cloud and Edge",
                "author": [
                  { "@type": "Person", "name": "Aditi Patil" },
                  { "@type": "Person", "name": "Nida Sahar Rafee" }
                ],
                "datePublished": "2021-09-20",
                "publisher": { "@type": "Organization", "name": "Springer Nature" },
                "image": "https://media.springernature.com/w316/springer-static/cover-hires/book/978-981-16-2937-2",
                "url": "https://link.springer.com/chapter/10.1007/978-981-16-2937-2_10"
              },
              {
                "@type": "Patent",
                "name": "Patent by Nida Sahar Rafee",
                "inventor": {
                  "@type": "Person",
                  "name": "Nida Sahar Rafee"
                },
                "patentNumber": "11860890",
                "filingDate": "2021-09-27",
                "issueDate": "2024-01-02",
                "url": "https://patents.justia.com/inventor/nida-sahar-rafee"
              },
              {
                "@type": "Patent",
                "name": "Patent by Nida Sahar Rafee",
                "inventor": {
                  "@type": "Person",
                  "name": "Nida Sahar Rafee"
                },
                "patentNumber": "20230095514",
                "filingDate": "2021-09-27",
                "issueDate": "2023-03-30",
                "url": "https://patents.justia.com/inventor/nida-sahar-rafee"
              }
            ]
          })}
        </script>
      </Helmet>


      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h3" sx={{ fontSize: "2.5rem", fontWeight: 600 }} gutterBottom align="center">
          Publications
        </Typography>

        <Grid container spacing={6}>
          {publicationsData.map((publication, index) => (
            <Grid item xs={12} key={index}>
              <Paper variant="outlined" sx={{ padding: 4, borderRadius: 2, boxShadow: 3 }}>
                <Grid container spacing={4} alignItems="center">

                  {/* Left Side: Cover Image */}
                  <Grid item xs={12} sm={4}>
                    {publication.cover && (
                      <img
                        src={publication.cover}
                        alt="Publication Cover"
                        style={{
                          width: '100%',
                          height: 'auto',
                          borderRadius: '8px',
                          objectFit: 'cover',
                        }}
                      />
                    )}
                  </Grid>

                  {/* Right Side: Title, Authors, Date, etc. */}
                  <Grid item xs={12} sm={8}>
                    <Typography variant="h5" sx={{ fontWeight: 500, marginBottom: 2 }}>
                      {publication.title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 1 }}>
                      <strong>Authors:</strong> {publication.authors}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
                      <strong>Published:</strong> {publication.date}
                    </Typography>
                    <Typography variant="body2" paragraph sx={{ marginBottom: 2 }}>
                      <strong>Abstract:</strong> {publication.abstract}
                      <Link href={publication.link} color="primary" sx={{ marginLeft: 1 }}>
                        Read More
                      </Link>
                    </Typography>

                    {publication.link && (
                      <Button
                        variant="contained"
                        href={publication.link}
                        sx={{
                          mt: 2,
                          bgcolor: 'primary.main',
                          '&:hover': { bgcolor: 'primary.dark', opacity: 0.8, transform: 'scale(1.05)' },
                          transition: 'all 0.3s ease',

                          paddingX: 3,
                          paddingY: 1.5
                        }}
                      >
                        Learn More
                      </Button>
                    )}
                  </Grid>
                </Grid>

                {/* Patents Section */}
                {publication.patents && (
                  <Box sx={{ mt: 4 }}>

                    <Grid
                      container
                      direction="row"
                      sx={{
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >

                      <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: 2 }}>
                        Patents by
                      </Typography>
                      <img src="https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/nida.jpg" alt="nida" style={{ width: "100px", margin: "0px 10px", height: "100px", borderRadius: "50%" }} />
                      <Typography variant="h6">
                        Nida Sahar Rafee
                      </Typography>
                      <IconButton><LinkedIn /></IconButton>
                    </Grid>
                    {publication.patents.map((patent, idx) => (
                      <Box key={idx} sx={{ mt: 3, padding: 3, border: '1px solid #ddd', borderRadius: 2 }}>
                        <Grid container spacing={3} alignItems="center">
                          {/* Patent Icon */}
                          <Grid item xs={12} md={1}>
                            <IoNewspaperOutline size={40} color="grey" />
                          </Grid>

                          {/* Patent Details */}
                          <Grid item xs={12} md={11}>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                              <FaRegFileAlt /> Patent Number: {patent.number}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 1 }}>
                              <strong>Filed:</strong> {patent.filed} | <strong>Granted:</strong> {patent.date}
                            </Typography>
                            <Typography variant="body2" sx={{ marginBottom: 2 }}>
                              {patent.abstract}
                            </Typography>
                            <Button
                              variant="outlined"
                              href={patent.link}
                              sx={{
                                mt: 2,
                                borderColor: 'primary.main',
                                color: 'primary.main',
                                '&:hover': { borderColor: 'primary.dark', color: 'primary.dark', opacity: 0.8, transform: 'scale(1.05)' },
                                transition: 'all 0.3s ease',

                                paddingX: 3,
                                paddingY: 1.5
                              }}
                            >
                              Learn More
                            </Button>
                          </Grid>
                        </Grid>
                      </Box>
                    ))}
                  </Box>
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default PublicationsPage;
