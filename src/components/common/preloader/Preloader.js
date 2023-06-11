import React from 'react';

import preloader from '../images/preloader.gif';

let Preloader = () => {
  return (
    <div>
      <img src={preloader} alt='loading' />
    </div>
  );
};

export default Preloader;
