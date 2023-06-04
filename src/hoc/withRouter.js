import React from 'react';
import { useParams } from 'react-router-dom';

const withRouter = (Component) => {
  let RouterIdComponent = (props) => {
    return <Component {...props} params={useParams()} />;
  };
  //return RouterIdComponent;
};

export default withRouter;
