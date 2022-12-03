import React, { Component } from 'react';
import './MovieItem.css';
import store from "../../redux/store";
import { addToList } from "../../redux/actions";
class MovieItem extends Component {
    state={
        title:this.props.Title,
        year:this.props.Year,
        poster:this.props.Poster,
        id:this.props.imdbID
    }
    addToListHandler=(name,year,id)=>{
        console.log("works");
        store.dispatch(addToList(name,year,id));
    }
    render() {
        //const { title, year, poster } = this.props;
        /*let title=this.props.Title;
        let year=this.props.Year;
        let poster=this.props.Poster;*/
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={this.state.poster} alt={this.state.title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{this.state.title}&nbsp;({this.state.year})</h3>
                    <button type="button" className="movie-item__add-button" onClick={()=>this.addToListHandler(this.state.title,this.state.year,this.state.id)}>Добавить в список</button>
                </div>
            </article>
        );
    }
}
 
export default MovieItem;