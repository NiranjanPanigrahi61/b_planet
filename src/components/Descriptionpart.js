import React from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../components/Nav';

const Descriptionpart = () => {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return <p>No product selected.</p>;
  }

  const { name, subtitle, careGuide = {}, description, image } = product;

  const defaultCareGuide = {
    water: 'Water your plant thoroughly,',
    light: 'Place your plant in a bright,',
    tips: 'Rotate your plant periodically to ensure even growth and dust the leaves regularly to keep them free of debris.'
  };

  const { water, light, tips } = {
    water: careGuide.water || defaultCareGuide.water,
    light: careGuide.light || defaultCareGuide.light,
    tips: careGuide.tips || defaultCareGuide.tips
  };

  const defaultSubtitle = "This is a beautiful plant that requires general care. Please follow the care guide for best results.";
  const defaultDescription = "Unfortunately, a detailed description for this product is not available. However, you can still enjoy this wonderful plant by following the care instructions provided.";

  return (
    <div className='maindiv'>
      <Nav />
      <div className="selected-picture">
        <div className="description-container">
          <h1>{name}</h1>
          <p>{subtitle || defaultSubtitle}</p>
          <h2>Plant Care Guide</h2>
          <hr />
          <div className="care-guide">
            <div>
              <strong>Water</strong>
              <p>{water}</p>
            </div>
            <hr />
            <div>
              <strong>Light</strong>
              <p>{light}</p>
            </div>
            <hr />
            <div>
              <strong>Tips</strong>
              <p>{tips}</p>
            </div>
          </div>
          <h2>Description</h2>
          <hr />
          <p>{description || defaultDescription}</p>
        </div>
        <div className="image-container">
          <img src={image} alt={name} className="main-image" />
        </div>
      </div>
    </div>
  );
}

export default Descriptionpart;
