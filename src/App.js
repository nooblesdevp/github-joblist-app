import { useStateValue } from "./Provider";
import Category from "./Components/Category/Category";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import JobsList from "./Components/JobsList/JobsList";
import Login from "./Components/Login/Login";
import ModalDesc from "./Components/ModalDesc/ModalDesc";
import MyAppFav from "./Components/MyApp/MyAppFav";
import MyAppProgress from "./Components/MyApp/MyAppProgress";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/jobslist">
            <JobsList />
          </Route>
          <Route path="/modal-description">
            <ModalDesc />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/favorite">
            <MyAppFav />
          </Route>
          <Route path="/progress">
            <MyAppProgress />
          </Route>
          <Route exact path="/">
            <Category />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
