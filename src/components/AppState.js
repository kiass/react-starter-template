const AppState = {
  loggedIn: false,
  login() {
    this.loggedIn = true;
  },
  logout() {
    this.loggedIn = false;
  }
};

export default AppState;
