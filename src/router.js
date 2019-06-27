import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';

import Home from './routes/Home/Home';
import My from './routes/My/My';
import List from './routes/List/List';
import Detail from './routes/Detail/Detail';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/my" exact component={My} />
        <Route path="/list"  component={List} />
        <Route path="/detail"  component={Detail} />
      </Switch>
      
    </Router>
  );
}

export default RouterConfig;
