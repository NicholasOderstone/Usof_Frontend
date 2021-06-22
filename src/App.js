import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Header from './components/ui/js/Header'
import Main from './components/js/Main'
import PostPage from './components/js/PostPage'
import Posts from './components/js/Posts'
function App() {
  return (
    <Router>
    	<Header isLogedin={false}/>
		<Switch>
			<Route path="/" exact component={Main}/>
      <Route path="/post/:id" render={({match}) => (  <PostPage post_id={match.params.id} />)}/>
      <Route path="/posts/" component={Posts} />
      <Route path="/posts/:search"  render={({match}) => (  <Posts search={match.params.search} />)}/>
		</Switch>
    </Router>
  );
}

export default App;
