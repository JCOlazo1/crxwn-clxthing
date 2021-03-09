import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/homepage/shop/shop.component';
import Header from './components/header/header.component';
import SignupSignInPage from './pages/homepage/sign-in-sign-up/sign-in-sign-up.components';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';

import './App.css'
import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  /* START of Firebase OAuth */
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  /* END of Firebase OAuth */

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route 
            exact
            path='/'
            component={HomePage}
          />
          <Route 
            path='/shop'
            component={ShopPage}
          />
          <Route 
            path='/signin'
            component={SignupSignInPage}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
