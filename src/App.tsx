import React from 'react';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import { Provider } from "mobx-react"
import store from './store'
import Pages from './pages'

const App: React.FC = () => {
  return (
      <Provider {...store}>
          <Router>
              <Pages />
          </Router>
      </Provider>
  );
}

export default App;
