import React from "react";
import { Router } from "react-router-dom";
import Layout from "./layout/";
import { createBrowserHistory } from "history";
import Routes from "./routes";

const hist = createBrowserHistory();
export default function App() {
  return (
    <Router history={hist}>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );
}
