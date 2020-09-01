import React, { useState } from 'react';
import './App.css';
import './Component/ShowSomething/Show';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Show from './Component/ShowSomething/Show';
import Friend from './Component/Friend/Friend';
import Hello from './Component/Hello/Hello';
function App() {
  const [values, setValues] = useState(false);
  const handleFriend = () => {
    setValues(!values);
  }

  return (
    <>
      <h1>He is my Friend {values.toString()}  </h1>
      <button onClick={handleFriend} >Toggale btn</button>
      <Hello values={values} ></Hello>
      <Show></Show>
      <Router>
        <Switch>
          <Route path="/about">
            <Friend></Friend>
          </Route>
          <Route path="/">
            <h1>Upcomming web site</h1>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
