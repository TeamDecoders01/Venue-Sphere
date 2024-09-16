const BookingModel = require('../models/booking');
const VenueModel = require('../models/venue');

exports.bookVenue = async (req, res) => {
  try {
    const { venueId, date } = req.body;
    const userId = req.user._id;
    const booking = new BookingModel({ user: userId, venue: venueId, date });
    await booking.save();

    // Update venue availability
    await VenueModel.findByIdAndUpdate(venueId, { isAvailable: false });

    res.status(201).json({ message: 'Venue booked successfully', booking });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await BookingModel.find({ user: req.user._id }).populate('venue');
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
};
