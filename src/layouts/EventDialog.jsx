import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';

function EventDialog({ open, onClose, eventData }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={isMobile}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: '#002c47',
          color: '#ffffff',
        },
      }}
    >
      <DialogContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: 3,
          }}
        >
          {/* Title */}
          <Typography variant="h4" sx={{ color: '#ffffff', fontWeight: 'bold' }}>
            {eventData.title || 'Amusement Expo International'}
          </Typography>

          {/* Date and Location */}
          <Typography variant="h6" sx={{ color: '#fdd835' }}>
            {eventData.date || 'March 27-30, 2023'}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
            {eventData.location || 'Las Vegas Convention Center'}
          </Typography>

          {/* Booth Information */}
          <Typography variant="body1" sx={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fdd835' }}>
            {`Booth ${eventData.booth || '#A-1250'}`}
          </Typography>

          {/* Image */}
          <img
            src={eventData.image || '/placeholder-image.jpg'}
            alt={eventData.title || 'Event Image'}
            style={{
              maxWidth: '90%',
              borderRadius: 10,
              border: '2px solid #ffffff',
              objectFit: 'cover',
              marginTop: 16,
            }}
          />

          {/* CTA */}
          <Typography variant="body2" sx={{ marginTop: 3, fontSize: '1rem', opacity: 0.8 }}>
            Don’t miss out on the action — we’d love to see you there!
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions sx={{ justifyContent: 'center' }}>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{
            backgroundColor: '#fdd835',
            color: '#002c47',
            fontWeight: 'bold',
            ':hover': {
              backgroundColor: '#c6a700',
            },
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

EventDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  eventData: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string,
    location: PropTypes.string,
    booth: PropTypes.string,
  }),
};

EventDialog.defaultProps = {
  eventData: {},
};

export default EventDialog;
