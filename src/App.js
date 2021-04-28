import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import TopPage from './components/TopPage/TopPage';
import AboutMePage from './components/AboutMePage/AboutMePage';
import BasicStancePage from './components/BasicStancePage/BasicStancePage';
import WorksPage from './components/WorksPage/WorksPage';
import { useState } from 'react';
import GlobalMenu from './components/GlobalMenu/GlobalMenu';

export default function App() {
  const [isActive, setIsActive] = useState(false);
  function menuToggle() {
    setIsActive(!isActive);
  }

  return (
    <div className='App'>
      <Router>
        <Header isActive={isActive} menuToggle={menuToggle} />
        <GlobalMenu open={isActive} menuToggle={menuToggle} />
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
