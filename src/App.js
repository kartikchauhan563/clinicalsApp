import "./App.css";
import { Route, Switch } from "react-router-dom";
import CollectClinicals from "./components/CollectClinicals";
import ChartGenerator from "./components/ChartGenerator";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/patientDetails/:patientId"
          component={CollectClinicals}
        />
        <Route exact path="/addPatient" component={AddPatient} />
        <Route exact path="/analyze/:patientId" component={AnalyzeData} />
        <Route
          exact
          path="/chart/:componentName/:patientId"
          component={ChartGenerator}
        />
      </Switch>
    </div>
  );
}

export default App;
