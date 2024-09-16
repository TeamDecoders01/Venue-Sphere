import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Define the Venue interface
interface Venue {
  _id: string;
  name: string;
  location: string;
  capacity: number;
  price: number;
  isAvailable: boolean;
}

// VenuePage component
const VenuePage: React.FC = () => {
  const [venues, setVenues] = useState<Venue[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedVenueId, setSelectedVenueId] = useState<string | null>(null);
  const [date, setDate] = useState<string>('');
  const navigate = useNavigate();

  // Fetch available venues on component mount
  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const config = {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
          };
        const response = await axios.get('http://localhost:8000/venues',{
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              ...config.headers,
            },
          }); // Assuming this hits the backend to get venues
        setVenues(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch venues');
        setLoading(false);
      }
    };
    fetchVenues();
  }, []);

  // Handle venue booking
  const handleBooking = async (venueId: string) => {
    try {
      const response = await axios.post('/venues/book', { venueId, date });
      alert('Venue booked successfully!');
      navigate('/bookings'); // Redirect to bookings page after successful booking
    } catch (err: any) {
      setError('Error booking venue. Please try again.');
    }
  };

  if (loading) {
    return <p>Loading venues...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Available Venues</h1>
      <div className="venue-list">
        {venues.length === 0 ? (
          <p>No venues available at the moment.</p>
        ) : (
          venues.map((venue) => (
            <div key={venue._id} className="venue-card">
              <h2>{venue.name}</h2>
              <p>Location: {venue.location}</p>
              <p>Capacity: {venue.capacity} people</p>
              <p>Price: ${venue.price} per day</p>
              <p>Status: {venue.isAvailable ? 'Available' : 'Not Available'}</p>
              <div>
                <label>
                  Select Date:
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </label>
                <br />
                {venue.isAvailable ? (
                  <button
                    onClick={() => handleBooking(venue._id)}
                    disabled={!date}
                  >
                    Book Venue
                  </button>
                ) : (
                  <button disabled>Not Available</button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default VenuePage;
