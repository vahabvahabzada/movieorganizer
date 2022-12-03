import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
import store from "../../redux/store";
class Movies extends Component {
    state = { 
        movies: []
    }
    componentDidMount(){
        store.subscribe(()=>{
            const state=store.getState();
            fetch(`http://www.omdbapi.com/?s=${state.searchState}&apikey=a741b8e`)
            .then((res)=>res.json())
            .then((data)=>{console.log(data.Search/*{imdbID:data.imdbID,title:data.Title,year:data.Year,poster:data.Poster}*/);this.setState({movies:data.Search})});
        })
    }
    render() { 
        return ( 
            <ul className="movies">
                {this.state.movies.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem {...movie} />
                    </li>
                ))}
            </ul>
        );
    }
}
 
export default Movies;