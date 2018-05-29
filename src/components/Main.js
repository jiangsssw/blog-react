require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import BgFrameComponent from './bgFrame'
import ArticleComponent from './article'
import FooterCompontent from './foot'
import LeaveMessageComponent from './leaveMessage'
import WriteArticlesComponent from './wrtieArticles'
import PictureShowComponent from './picture_show'
import DemoComponent from './demo'
import ManageArticlesComponent from './manageArtcles'

import '../styles/BgFrame.css'
import '../styles/fontStyle.css'
//let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
         <div className="container">
            <BgFrameComponent>
             </BgFrameComponent>
             <ArticleComponent/>
             <LeaveMessageComponent/>
             <WriteArticlesComponent/>
             <PictureShowComponent/>
             <DemoComponent/>
             <ManageArticlesComponent/>
          </div>
          <FooterCompontent/>
      </div>
     
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
