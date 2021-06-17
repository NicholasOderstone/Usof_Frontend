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
function App() {
  return (
    <Router>
    	<Header isLogedin={false}/> 
		<Switch>
			<Route path="/" exact component={Main}/>

		</Switch>
    </Router>
  );
}

export default App;
