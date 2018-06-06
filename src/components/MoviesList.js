import React, { Component } from 'react';
import Styled from 'styled-components';
import {Link} from 'react-router-dom';
import MoviesDetail from './MoviesDetail'

const ImageSize = Styled.img`
    width: 300px;
    height: 250px;
`
const TitleMovie = Styled.h1`
    color: blue;
`
class MoviesList extends Component {
  constructor(props) {
    super(props)
  }

  state = {movies : []}

  componentDidMount(){
    fetch('http://www.mocky.io/v2/5b07eec23200005400700107')
    .then(response => response.json())
    .then(movies => this.setState({movies: movies.data}))
    console.log("123");
  }
  renderCard = (movie) => {
    return (
      <div key={movie.id}>
        <ImageSize alt="example" src={movie.image}/>
        <Link to={`/MoviesDetail/${movie.id}?id=${movie.id}`}><p>{ movie.name }</p></Link>        
      </div>
    )
  }

  render() {
    console.log(this.state.movies)
    return (
      <div>
        <h3>
        {this.state.movies
          .map(movies => (this.renderCard(movies)) )
        }
        </h3>    
      </div>
    )
  }
}

export default MoviesList;
