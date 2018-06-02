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
import CheckComponent from './checkArticles'

import '../styles/BgFrame.css'
import '../styles/fontStyle.css'
//let yeomanImage = require('../images/yeoman.png');
var lengthData;

class AppComponent extends React.Component {
    readDataFromSon(length){
      lengthData = length;
    }

  render() {
    return (
      <div className="index">
      <Route exact path ='/login' component={LoginComponent}/>
        <div className="container">
        <BgFrameComponent readData={this.readDataFromSon}/>
          <Switch>
              <Route exact path='/'>
                <ArticleComponent />
              </Route>
              <Route path='/checkArticle/:id' component={CheckComponent}/>
              <Route path='/leaveMessage' component={LeaveMessageComponent}/>
              <Route path='/writeArticles' component={WriteArticlesComponent}/>
              <Route path='/picture' component={PictureShowComponent}/>
              <Route path='/demo' component={DemoComponent}/>
              <Route exact path='/manage' >
                <ManageArticlesComponent data={lengthData}/>
              </Route>
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
