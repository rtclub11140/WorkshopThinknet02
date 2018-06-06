import React, { Component } from 'react';
import './App.css';
import MoviesList from './components/MoviesList'
import MoviesDetail from './components/MoviesDetail'
import {BrowserRouter, Route} from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <div>
    <Route exact path="/" component={MoviesList} />
    <Route exact path="/MoviesDetail/:id" component={MoviesDetail} />
    </div>
  </BrowserRouter>
)


export default App;
