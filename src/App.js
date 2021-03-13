import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/homepage/shop/shop.component';
import Header from './components/header/header.component';
import SignupSignInPage from './pages/homepage/sign-in-sign-up/sign-in-sign-up.components';
import { Switch, Route } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';

import './App.css'
import React from 'react';

class App extends React.Component {

  /* START of Firebase OAuth */
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
            setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
            });
          })
      }
      this.setState({ currentUser: userAuth })
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  /* END of Firebase OAuth */

  render() {
    return (
      <div>
        <Header />
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
