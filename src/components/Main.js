require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import BgFrameConponent from './bgFrame'

//let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
         
    <BgFrameConponent/>
      </div>
     
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
