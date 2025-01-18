/*Functionality imports*/

import React, { useEffect, useState } from 'react';
import './Events.css';

function Events() {
    ///////////////////////////
    // States
    ///////////////////////////

    /**
     * @typedef {string} events
     * @description Stores the events fetched from the backend
     */
    const [events, setEvents] = useState([]);

    /**
     * @typedef {boolean} loading
     * @description Indicates whether the data is currently loading
     */
    const [loading, setLoading] = useState(true);

    /**
     * @typedef {string|null} Error
     * @description Stores any error message encountered during API calls
     */
    const [error, setError] = useState(null);

    ///////////////////////////
    // Functions
    ///////////////////////////

    /**
     * Fetches all future events from the backend API that's connected to our google calendar API
     * 
     * @returns {Promise<Array<Object>>} - A promise resolving to a list of events
     */
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

    /**
    * Renders a loading message when the loading state is true 
    * @returns {JSX.Element} - A div element with a loading message (Can be cutomized)
     */    
    if (loading) {
        return <div className="loading">Loading events...</div>;
    }

    /**
    * Displays an error message when an error is found
    * @returns {JSX.Element} - A div element with an error message
     */    
    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    ///////////////////////////
    // TSX Rendering
    ///////////////////////////

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