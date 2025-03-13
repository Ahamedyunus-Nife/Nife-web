// EventCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const EventCard = ({ event, borderColor }) => {
  return (
    <Card 
      sx={{ 
        maxWidth: 345, 
        marginBottom: 2, 
        boxShadow: `0 4px 10px rgba(0, 0, 0, 0.1), 0 0 15px ${borderColor}`,
        borderRadius: 3,
        border: `3px solid ${borderColor}`,
        '&:hover': {
          boxShadow: `0 8px 20px rgba(0, 0, 0, 0.2), 0 0 25px ${borderColor}`,
        },
      }}
    >
      <CardMedia
        component="img"
        alt={event.title}
        height="100%"
        image={event.image} // Event image URL
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {event.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {event.date} | {event.location}
        </Typography>
        <Typography variant="body2" color="text.primary" sx={{ mt: 1 }}>
          {event.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EventCard;
