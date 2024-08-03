import React from 'react';
import { useNavigate } from 'react-router-dom';

function ButtonLink({ text, link }) {
  const navigate = useNavigate();

  return (
    <button className="contactbutton" onClick={() => navigate(link)}>
      {text}
    </button>
  );
}

export default ButtonLink;
