import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import TopPage from './components/TopPage/TopPage';
import AboutMePage from './components/AboutMePage/AboutMePage';
import BasicStancePage from './components/BasicStancePage/BasicStancePage';
import WorksPage from './components/WorksPage/WorksPage';

export default function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/aboutme' component={AboutMePage} />
          <Route path='/basicstance' component={BasicStancePage} />
          <Route path='/works' component={WorksPage} />
          <Route path='/' component={TopPage} />
        </Switch>
      </Router>
    </div>
  );
}
