import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { Auth0Provider } from "@auth0/auth0-react";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <Auth0Provider
  domain="dev-2aka8meu.us.auth0.com"
  clientId="DeeXaxUlXOgy275QoVQQNnBfjbsgWk2W"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <ChakraProvider theme={theme}>

  <StrictMode>
    <ColorModeScript />
    <App />
  </StrictMode>
  </ChakraProvider>
  </Auth0Provider>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
