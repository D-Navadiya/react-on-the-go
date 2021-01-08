import { Switch, Route } from "react-router-dom";
import Demo from "../../routes/demo";

function App() {
  return (
    <Switch>
      <Route path="/">
        <Demo />
      </Route>
    </Switch>
  );
}

export default App;
