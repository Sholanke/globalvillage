import React, { useEffect } from "react";
import { HashRouter, Route, Switch, useLocation } from "react-router-dom";
import { AboutPage } from "../pages/About";
import { CareersPage } from "../pages/Careers";
import { ContactPage } from "../pages/Contact";
import { HomePage } from "../pages/Home";

export default function Routes() {
  return (
    <HashRouter>
      <RoutesSwitch />
    </HashRouter>
  );
}

function RoutesSwitch() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/careers" component={CareersPage} />
      <Route exact path="/contact" component={ContactPage} />
    </Switch>
  );
}
