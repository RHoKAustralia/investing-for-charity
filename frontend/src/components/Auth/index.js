import React from 'react';
import Cookies from 'js-cookie';

const getLoginUrl = redirect =>
  `https://investingforcharity.auth.ap-southeast-2.amazoncognito.com/login?response_type=token&client_id=8ld8ojjs0lh7ebkse6194t8aj&redirect_uri=${encodeURIComponent(
    redirect
  )}`;

const loginUrl = getLoginUrl('https://localhost:3000/');

export default class Auth extends React.Component {
  state = { authenticated: false };

  componentDidMount() {
    // cookie authenticated
    if (Cookies.get('id_token')) {
      this.setState({ authenticated: true });
      return;
    }

    const hashValues = window.location.hash
      .slice(1)
      .split('&')
      .reduce((acc, keyValue) => {
        const [key, value] = keyValue.split('=');
        return { ...acc, [key]: value };
      }, {});

    const { id_token, expires_in } = hashValues;

    // check if just logged in
    if (id_token) {
      Cookies.set('id_token', id_token, {
        expires: new Date(Date.now() + expires_in * 1000),
			});
			
			window.history.replaceState({}, document.title, window.location.pathname);

      this.setState({ authenticated: true });
      return;
    }

    window.location.href = loginUrl;
  }

  render() {
    return this.state.authenticated && this.props.children;
  }
}
