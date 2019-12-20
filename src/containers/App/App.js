import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import PageLayout from "../../components/PageLayout/PageLayout";
import Routes from "../Routes";

const App = () => (
  <Router>
    <PageLayout>
      <Routes />
    </PageLayout>
  </Router>
);

export default App;
