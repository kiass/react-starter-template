import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Dashboard from './components/Dashboard';
import useStyles from './style';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Login from './components/Login';


// eslint-disable-next-line react/jsx-filename-extension
const About = () => <h1>About Component</h1>;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }

  setOpen(isOpen) {
    this.setState(() => ({ open: isOpen }));
  }

  handleDrawerOpen = () => {
    this.setOpen(true);
  };

  handleDrawerClose = () => {
    this.setOpen(false);
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.root}>
        <Router>
          <CssBaseline />
          <Navbar isOpen={open} handleDrawerOpen={this.handleDrawerOpen} />
          <Sidebar
            isOpen={open}
            handleDrawerClose={this.handleDrawerClose}
          />

          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
              <div className="views">
                <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/login" component={Login} />
                </Switch>
              </div>
            </Container>
          </main>
        </Router>
      </div>
    );
  }
}
App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};
export default withStyles(useStyles)(App);
