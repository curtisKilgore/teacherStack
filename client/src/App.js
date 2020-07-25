import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StudentContainer from './components/Students/StudentContainer';

import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import Main from './components/pages/Main';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Profile from './components/Profile/Profile';
import GenericForm from './components/Form/Form';
import Posts from './components/Posts/Posts';
import Post from './components/Post/Post';
import PrivateRoute from './components/routing/PrivateRoute';
import CreateProfile from './components/Profile-Forms/CreateProfile';
import AddClass from './components/Profile-Forms/AddClass';
import EditProfile from './components/Profile-Forms/EditProfile';
import AddToDo from './components/Profile-Forms/AddToDo';
import Profiles from './components/Profiles/Profiles';

import Alert from './components/Layout/Alert';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import AuthToken from './utils/AuthToken';

import './App.css';

if (localStorage.token) {
  AuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />

          <Route exact path={'/'} component={Main}></Route>

          <section className='container'>
            <Alert />
            <Switch>
              <Route exact path={'/login'} component={Login}></Route>
              <Route exact path={'/signup'} component={SignUp}></Route>

              <Route exact path='/roster' component={StudentContainer} />
              <Route exact path={'/forum'} component={Posts}></Route>
              <Route exact path={'/posts'} component={Post}></Route>
              <Route exact path={'/profiles'} component={Profiles}></Route>
              <PrivateRoute exact path='/post/:id' component={Post} />
              <Route exact path={'/profile'} component={Profile} />
              <Route exact path='/profile/:id' component={Profile} />
              <PrivateRoute
                exact
                path='/create-profile'
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path='/edit-profile'
                component={EditProfile}
              />
              <PrivateRoute exact path='/add-todo' component={AddToDo} />
              <PrivateRoute exact path='/add-class' component={AddClass} />
              <Route exact path={'/form'} component={GenericForm}></Route>
            </Switch>
          </section>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
