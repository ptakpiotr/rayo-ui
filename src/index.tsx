import React from "react";
import { render } from "react-dom";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "./features/notifications";
import accountReducer from "./features/account";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Provider } from "react-redux";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const store = configureStore({
  reducer: {
    notification: notificationReducer,
    account: accountReducer,
  },
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://localhost:7090/graphql",
  }),
});

render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
