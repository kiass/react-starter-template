import React from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

const ContactInfo = ({ match }) => (
  <h1>
    Welcome to
    {match.params.location}
  </h1>
);

ContactInfo.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      location: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

const Contact = ({ match }) => (
  <div>
    <h1>Contact Component</h1>
    <div className="links">
      <NavLink to={`${match.url}/india`} className="link">
        India Office
      </NavLink>
      <NavLink to={`${match.url}/Us`} className="link">
        Us Office
      </NavLink>
    </div>

    <Switch>
      <Route
        exact
        path={match.url}
        render={() => <h4>Please select an office.</h4>}
      />
      <Route path={`${match.url}/:location`} component={ContactInfo} />
      <Route render={() => <h2>No office found.</h2>} />
    </Switch>
  </div>
);

Contact.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
};

export default Contact;
