const VenueModel = require('../models/venue');

exports.addVenue = async (req, res) => {
  try {
    const { name, location, capacity, price } = req.body;
    const venue = new VenueModel({ name, location, capacity, price });
    await venue.save();
    res.status(201).json({ message: 'Venue added successfully', venue });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
};

exports.getVenues = async (req, res) => {
  try {
    const venues = await VenueModel.find({});
    res.status(200).json(venues);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
};

exports.bookVenue = async (req, res) => {
  try {
    const { venueId, date } = req.body;
    const venue = await VenueModel.findById(venueId);
    if (!venue.isAvailable) {
      return res.status(400).json({ message: 'Venue is not available' });
    }
    // Logic for booking creation (handling in BookingController)
    res.status(200).json({ message: 'Booking request created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
};
