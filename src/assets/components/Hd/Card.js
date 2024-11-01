import React, { useState } from 'react';

const Card = ({ children, onClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSize = () => {
    setIsExpanded(!isExpanded);
    onClick();
  };
};

export default Card;
