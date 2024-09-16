const express = require('express');
const { addVenue, getVenues } = require('../controllers/venueController'); // Ensure correct imports
const { bookVenue: handleBooking, getBookings } = require('../controllers/bookingController'); // Ensure correct imports
const authMiddleware = require('../middlewars/auth');
const adminMiddleware = require('../middlewars/adminMiddleware');

const router = express.Router();

// Ensure that all controller functions are defined correctly
router.post('/venues', authMiddleware, adminMiddleware, addVenue); // Admin route
router.get('/venues', authMiddleware, getVenues);

router.post('/venues/book', authMiddleware, handleBooking); // Booking route
router.get('/bookings', authMiddleware, getBookings); // Get user bookings

module.exports = router;
