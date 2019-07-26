import React from "react";
import { Switch, Route } from "react-router-dom";
import Wizard from "./components/Wizard/Wizard";
import WizardStep2 from "./components/Wizard/WizardStep2";
import WizardStep3 from "./components/Wizard/WizardStep3";
import Dashboard from "./components/Dashboard/Dashboard";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/wizard/:step" component={Wizard} />
    <Route path="/wizard/step2" component={WizardStep2} />
    <Route path="/wizard/step3" component={WizardStep3} />
  </Switch>
);
