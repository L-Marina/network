import React from 'react';
import preloader from '../../../assets/images/preloaders.gif';

let Preloader = () => {
  return (
    <div style={{ backgroundColor: 'aqua' }}>
      <img src={preloader} />
    </div>
  );
};

export default Preloader;
