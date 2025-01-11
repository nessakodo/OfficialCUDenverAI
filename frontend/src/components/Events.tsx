import React, { useEffect, useState } from 'react';
import './events.css';

function Events() {
    // States for managing events, loading state, and errors
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch events from the backend on component mount
    useEffect(() => {
        fetch('http://localhost:8080/events')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setEvents(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    // Loading state
    if (loading) {
        return <div className="loading">Loading events...</div>;
    }

    // Error state
    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    // Render the list of events
    return (
        <div className="events-container">
            <h1>Upcoming Events</h1>
            <div className="events-list">
                {events.length === 0 ? (
                    <div>No events available.</div>
                ) : (
                    events.map((event, index) => (
                        <div key={index} className="event-item">
                            <h2>{event.summary}</h2>
                            <p>{event.description}</p>
                            <p>
                                <strong>Date:</strong> {event.start}
                            </p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Events;