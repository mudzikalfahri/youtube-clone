import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import "./app.css";
import Header from "./components/header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/:slug/:id">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
