require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import BgFrameComponent from './bgFrame'
import ArticleComponent from './article'
import FooterCompontent from './foot'
import '../styles/BgFrame.css'
//let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
         <div className="container">
            <BgFrameComponent>
             </BgFrameComponent>
             <ArticleComponent/>
          </div>
          <FooterCompontent/>
      </div>
     
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
