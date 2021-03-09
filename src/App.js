import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/homepage/shop/shop.component';
import Header from './components/header/header.component';
import SignupSignInPage from './pages/homepage/sign-in-sign-up/sign-in-sign-up.components';
import { Switch, Route } from 'react-router-dom';

import './App.css'

function App() {
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

export default App;
