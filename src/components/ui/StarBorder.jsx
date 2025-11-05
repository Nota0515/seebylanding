import React from 'react';
import '@/index.css'; // adjust path to your project

const StarBorder = ({
  as: Component = 'div',
  className = '',
  color = '#ffffff',
  speed = '6s',
  thickness = 1,
  children,
  ...rest
}) => {
  const style = {
    '--star-color': color,
    '--star-speed': speed,
    '--star-thickness': `${thickness}px`,
    ...rest.style,
  };

  return (
    <Component className={`star-border-container ${className}`} style={style} {...rest}>
      <div className="border-gradient-bottom" />
      <div className="border-gradient-top" />
      <div className="star-border-inner">{children}</div>
    </Component>
  );
};

export default StarBorder;
