import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Venues.css';
import Navbar from '../../components/Navbar/Navbar';

interface Venue {
  _id: string;
  name: string;
  location: string;
  capacity: number;
  price: number;
  isAvailable: boolean;
  description: string;
  timeslot: string;
}

const VenuePage: React.FC = () => {
  const [venues, setVenues] = useState<Venue[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedVenueId, setSelectedVenueId] = useState<string | null>(null);
  const [description, setDescription] = useState<string>('');
  const [timeslot, setTimeslot] = useState<string>('');
  const [formVisibility, setFormVisibility] = useState<{ [key: string]: boolean }>({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response = await axios.get('http://localhost:8000/venues', {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}` || '',
          },
        });
        setVenues(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching venues:', err);
        setError('Failed to fetch venues');
        setLoading(false);
      }
    };
    fetchVenues();
  }, []);

  const handleBooking = async () => {
    try {
      await axios.post('http://localhost:8000/venues/book', {
        venueId: selectedVenueId,
        date: new Date().toISOString().split('T')[0],
        description,
        timeslot
      }, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}` || '',
        },
      });
      alert('Venue booked successfully!');
      setDescription('');
      setTimeslot('');
      setFormVisibility({});
      navigate('/bookings');
    } catch (err) {
      setError('Error booking venue. Please try again.');
    }
  };

  const toggleFormVisibility = (venueId: string) => {
    setFormVisibility(prevState => ({
      ...prevState,
      [venueId]: !prevState[venueId]
    }));
    setSelectedVenueId(venueId);
  };

  if (loading) {
    return <p>Loading venues...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <Navbar />
      <h1>Available Venues</h1>
      <div className="venue-list">
        {venues.length === 0 ? (
          <p>No venues available at the moment.</p>
        ) : (
          venues.map((venue) => (
            <div key={venue._id} className="venue-card">
              <h2 className="venue-name">{venue.name}</h2>
              <p className="venue-location">Location: {venue.location}</p>
              <p className="venue-capacity">Capacity: {venue.capacity} people</p>
              <p className="venue-price">Price: ${venue.price}</p>
              {venue.isAvailable ? (
                <div className="venue-actions">
                  <button
                    className="book-button"
                    type="button"
                    onClick={() => toggleFormVisibility(venue._id)}
                  >
                    Book Now
                  </button>
                </div>
              ) : (
                <button className="not-available-button" type="button" disabled>
                  Not Available
                </button>
              )}
              {formVisibility[venue._id] && (
                <div className="booking-form">
                  <h3>Book {venue.name}</h3>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleBooking();
                    }}
                  >
                    <label htmlFor="description" className="booking-label">
                      Description
                      {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
                      <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                      ></textarea>
                    </label>
                    <label htmlFor="timeslot" className="booking-label">
                      Timeslot
                      <input
                        type="datetime-local"
                        id="timeslot"
                        value={timeslot}
                        onChange={(e) => setTimeslot(e.target.value)}
                        required
                      />
                    </label>
                    <button type="submit" className="book-button">Submit</button>
                  </form>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default VenuePage;
