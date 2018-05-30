require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {Switch,Route} from 'react-router-dom'

import BgFrameComponent from './bgFrame'
import ArticleComponent from './article'
import FooterCompontent from './foot'
import LeaveMessageComponent from './leaveMessage'
import WriteArticlesComponent from './wrtieArticles'
import PictureShowComponent from './picture_show'
import DemoComponent from './demo'
import ManageArticlesComponent from './manageArtcles'
import LoginComponent from '../page/login'

import '../styles/BgFrame.css'
import '../styles/fontStyle.css'
//let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
      <Route exact path ='/login' component={LoginComponent}/>
        <div className="container">
        <BgFrameComponent/>
          <Switch>
              <Route exact path='/' component={ArticleComponent}/>
              <Route path='/leaveMessage' component={LeaveMessageComponent}/>
              <Route path='/writeArticles' component={WriteArticlesComponent}/>
              <Route path='/picture' component={PictureShowComponent}/>
              <Route path='/demo' component={DemoComponent}/>
              <Route path='/manage' component={ManageArticlesComponent}/>
          </Switch>
        </div>
        <FooterCompontent />
      </div>

    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
