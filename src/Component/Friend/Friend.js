import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Topic from '../Topic/Topic';

const Friend = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <a href={`${url}/rendering`}>Rendering with React</a>
        </li>
        <li>
          <a href={`${url}/components`}>Components</a>
        </li>
        <li>
          <a href={`${url}/props-v-state`}>Props v. State</a>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic></Topic>
        </Route>
      </Switch>
    </div>
  );
};


export default Friend;