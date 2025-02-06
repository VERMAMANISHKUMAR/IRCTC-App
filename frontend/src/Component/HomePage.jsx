import React, { useState, useEffect } from 'react';
import "../StyleComponent/HomePage.css";
import train_1 from '../assets/train-1.jpg';
import train_3 from '../assets/train-3.jpg';
import train_4 from '../assets/train-4.jpg';
import train_5 from '../assets/train-5.webp';
import train_6 from '../assets/train-6.webp';
import train_7 from '../assets/train-7.webp';
import train_8 from '../assets/train-8.avif';

function HomePage() {
  const images = [
    train_1,  // Correct image import
    train_3,
    train_4,
    train_5,
    train_6,
    train_7,
    train_8

  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div
      className="main-container"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out',
      }}
    >
      <form className="form-container">
        <h1>Book Your Train Ticket</h1>
        <label htmlFor="from">From</label>
        <input
          className="form-group"
          type="text"
          placeholder="Enter Departure Station"
        />
        <label htmlFor="to">To</label>
        <input
          className="form-group"
          type="text"
          placeholder="Enter Arrival Station"
        />
        <label htmlFor="date">Date</label>
        <input
          className="form-group"
          type="date"
          placeholder="Enter the Date"
        />
        <button type="button">Search Trains</button>
      </form>
    </div>
  );
}

export default HomePage;
