import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './routes';
function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          {routes.map((route) => (
            <Route
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
