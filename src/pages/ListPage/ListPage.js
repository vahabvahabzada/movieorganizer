import React, { Component } from 'react';
import './ListPage.css';

class ListPage extends Component {
    state = {
        movies: [
            { /*title*/name: 'The Godfather', year: 1972, /*imdbID*/id: 'tt0068646' }
        ]
    }
    componentDidMount() {
        const id = this.props.match.params;
        console.log(id);
        //console.log(this.props.match);//yoxlama ucun yazdim
        // TODO: запрос к сервер на получение списка
        // TODO: запросы к серверу по всем imdbID
        fetch("https://acb-api.algoritmika.org/api/movies/list/"+id.id)
        .then(res=>res.json())
        .then(data=>{console.log(data);this.setState({movies:data.movies})})
        //this.setState({movies:this.state.movies.push()})
    }
    render() { 
        return (
            <div className="list-page">
                <h1 className="list-page__title">Мой список</h1>
                <ul>
                    {this.state.movies.map((item) => {
                        return (
                            <li key={/*item.imdbID*/item.id}>
                                <a href={"https://www.imdb.com/title/"+item.id} target="_blank" rel="noreferrer">{/*item.title*/item.name} ({item.year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
 
export default ListPage;