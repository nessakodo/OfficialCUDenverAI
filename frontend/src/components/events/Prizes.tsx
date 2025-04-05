import React from 'react';
import './Prizes.css';

const Prizes = () => {
  const prizes = [
    { image: '/path/to/smartwatch.png', value: '$200', name: 'Smartwatch' },
    { image: '/path/to/earbuds.png', value: '$100', name: 'Wireless Earbuds' },
    { image: '/path/to/keyboard.png', value: '$150', name: 'Mechanical Keyboard' },
    { image: '/path/to/headphones.png', value: '$250', name: 'Noise-Cancelling Headphones' },
    { image: '/path/to/vr-headset.png', value: '$400', name: 'VR Headset' },
  ];

  return (
    <div className="prizes-container">
      <h1>Hackathon Prizes</h1>
      <div className="prizes-list">
        {prizes.map((item, index) => (
          <div key={index} className="prize-item">
            <img src={item.image} alt={item.name} className="prize-image" />
            <div className="prize-info">
              <h3>{item.name}</h3>
              <p>{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prizes;