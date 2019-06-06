import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppState from './AppState';

export default class Admin extends React.Component {
  logout() {
    AppState.logout();
    const { history } = this.props;
    history.replace('/login');
  }

  render() {
    return AppState.loggedIn ? (
      <div>
        <h1>Admin Component</h1>
        <button onClick={this.logout.bind(this)} type="button">Logout</button>
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

Admin.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};
