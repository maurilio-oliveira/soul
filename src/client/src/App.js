import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'react-bootstrap';
import Container from './container/container';
import { Button } from 'react-bootstrap';

function App() {
  return (
<Router>
  <Switch>
  <Route exact path={"/header"} component={Container} />
    <Route exact path="/bottom">
      <Button variant="primary" active={true} >alert</Button>
      </Route>
  </Switch>
</Router>
  );
}

export default App;
