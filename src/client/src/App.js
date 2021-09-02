import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'react-bootstrap';
import './container/front/componets/scss/components.scss'
import { ROUTERS } from './container/back-end/actions/enuns/router-enuns/routers-enuns';
import Amostra from './container/front/componets/amostra/amostra' 
import Containers from './container/front/componets/amostra/amostra-containers';
import LogginPage from './container/pages/loggin/loggin-page';

function App() {
  return (
<Router>
  <Switch>
    <Route exact path={""}>
     <Amostra></Amostra>
      </Route>
      <Route exact path="/componentes/conteiners">
     <Containers></Containers>
      </Route>
      <Route exact path="/1">
        <LogginPage></LogginPage>
      </Route>
  </Switch>
</Router>
  );
}

export default App;
