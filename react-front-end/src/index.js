import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Auth0Provider } from '@auth0/auth0-react';
// import App from './App';

// ReactDOM.render(
//   <Auth0Provider
//     domain="dev-qjdcbbx3eysy3fhu.us.auth0.com"
//     clientId="Y1NVmWMUUQWgFSjJvX1cOKPNjp9ORUvF"
//     authorizationParams={{
//       redirect_uri: window.location.origin
//     }}
//   >
//     <App />
//   </Auth0Provider>,
//   document.getElementById('root')
// );