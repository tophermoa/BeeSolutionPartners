//import logo from './logo.svg';
import './App.css';
import Input from './component/Input.js';
import Add from './component/Add.js';
import Wrapper from './Wrapper.js';

import Dashboard from './component/Dashboard.js';

import {
  HashRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
          <div>
            <div className="app-shell">
              <Switch>
                <Route path="/input" component={Input} />
                <Route path="/add" component={Add} />
                <Route path="/dash" component={Dashboard} />
                <Route path="/wrapper" component={Wrapper} />
                

                <Redirect from="/" to="/wrapper" />
              </Switch>
            </div>
          </div>
        </HashRouter>
    </div>
  );
}

export default App;
