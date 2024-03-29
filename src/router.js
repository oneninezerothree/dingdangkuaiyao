import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';

import Home from './routes/Home/Home';
import My from './routes/My/My';
import List from './routes/List/List';
import Detail from './routes/Detail/Detail';
import Search from './routes/Search/Search';
import Reg from './routes/Register/Reg';
import Login from './routes/Login/Login';



function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/my" exact component={My} />
        <Route path="/list"  component={List} />
        <Route path="/detail"  component={Detail} />
        <Route path="/search"  component={Search} />
        <Route path="/Reg"  component={Reg} />
        <Route path="/Login"  component={Login} />



      </Switch>
      
    </Router>
  );
}

export default RouterConfig;
