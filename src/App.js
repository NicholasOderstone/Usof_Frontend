import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Header from './components/ui/Header'
import Main from './components/Main'
import PostPage from './components/PostPage'
function App() {
  return (
    <Router>
    	<Header isLogedin={false}/> 
		<Switch>
			<Route path="/" exact component={Main}/>
      <Route path="/post/:id" render={({match}) => (  <PostPage post_id={match.params.id} />)}/>
		</Switch>
    </Router>
  );
}

export default App;
