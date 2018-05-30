import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import Login from './page/login'
import{BrowserRouter,Switch,Route} from 'react-router-dom';
// Render the main component into the dom
ReactDOM.render(
                <BrowserRouter>
                  <Switch>
                      <Route path='/login' component={Login}/>
                      <App />
                    </Switch>
                 </BrowserRouter>, document.getElementById('app'));
