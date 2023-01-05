import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Auth0Provider
        domain="shafqatdeveloper.us.auth0.com"
        clientId="fGOyGu9jem98CuEc1azQAUp4XK6vGRE0"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </Provider>
  </BrowserRouter>
);
