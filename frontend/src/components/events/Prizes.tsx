import React from 'react';
import './Prizes.css';
import ArduinoPic from '../images/Hackathon/PrizeArduino.png';
import BackpackRed from '../images/Hackathon/PrizeBackpack.png';
import BackpackBlack from '../images/Hackathon/PrizeBackpackBlack.png';
import BackpackWhite from '../images/Hackathon/PrizeBackpackWhite.png';
import CoffeeMaker from '../images/Hackathon/PrizeCoffeeMaker.png';
import Drone from '../images/Hackathon/PrizeDrone.png';
import HydroFlask from '../images/Hackathon/PrizeHydroFlask.png';
import Inflatable from '../images/Hackathon/PrizeInflatable.png';
import JBL from '../images/Hackathon/PrizeJBL.png';
import ScrewdriverSet from '../images/Hackathon/PrizeScrewdriverSet.png';

const Prizes = () => {
  const prizes = [
    { image: ArduinoPic, value: '$29.99', name: 'Arduino Uno REV3', link: 'https://www.amazon.com/Arduino-A000066-ARDUINO-UNO-R3/dp/B008GRTSV6', quantity: 4 },
    { image: BackpackRed, value: '$30.00', name: 'Under Armour Loudon Backpack Small Red', link: 'https://www.amazon.com/Under-Armour-Backpack-Cardinal-Metallic/dp/B0CJWCS7Z8', quantity: 3 },
    { image: BackpackBlack, value: '$30.00', name: 'Under Armour Loudon Backpack Small Black', link: 'https://www.amazon.com/Under-Armour-Loudon-Backpack-Small/dp/B0BJ4KZGDZ', quantity: 3 },
    { image: BackpackWhite, value: '$30.00', name: 'Under Armour Loudon Backpack Small White', link: 'https://www.amazon.com/Under-Armour-Unisex-Loudon-Backpack/dp/B0CJVSVYGQ', quantity: 3 },
    { image: CoffeeMaker, value: '$29.99', name: 'Black Decker 5-Cup Coffeemaker', link: 'https://www.amazon.com/BLACK-DECKER-Coffeemaker-Black-DCM600B/dp/B001NXC5YC', quantity: 4 },
    { image: Drone, value: '$44.99', name: 'Oddire Mini Drone', link: 'https://www.amazon.com/Oddire-Mini-Drone-Camera-Auto-Follow/dp/B0D9M21LYR', quantity: 4 },
    { image: HydroFlask, value: '$17.49', name: 'HydroFlask', link: 'https://www.amazon.com/Hydro-Flask-Insulated-Stainless-Standard/dp/B01KXHH0QG', quantity: 4 },
    { image: Inflatable, value: '$27.56', name: 'Inflatable boat', link: 'https://www.amazon.com/Intex-Explorer-2-Person-Inflatable-Boat/dp/B000RZFBKW', quantity: 4 },
    { image: JBL, value: '$39.95', name: 'JBL Tune 510BT', link: 'https://www.amazon.com/JBL-Tune-510BT-Ear-Headphones/dp/B08WM3LMJF', quantity: 4 },
    { image: ScrewdriverSet, value: '$10.99', name: 'Small Precision Screwdriver Set', link: 'https://www.amazon.com/Precision-Screwdriver-Security-Cleaning-Doorbell/dp/B09PY8WQHJ', quantity: 4 },
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
              <p>Available: {item.quantity}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="prize-link">
                More Info
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prizes;