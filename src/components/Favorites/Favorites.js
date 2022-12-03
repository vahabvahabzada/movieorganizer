import React, { Component } from 'react';
import './Favorites.css';

import store from "../../redux/store";
import { Link } from 'react-router-dom';
class Favorites extends Component {
    state = {
        title: '',
        movies: [
            /*{ imdbID: 'tt0068646', title: 'The Godfather', year: 1972 }*/
        ],
        saveButtonClicked:false,
        saveButtonDisabled:true,
        pathID:""
    }
    
    componentDidMount(){
        store.subscribe(()=>{
        const state=store.getState();
        this.setState({movies:state.inTheList})
    })
    }
    
    deleter=(e)=>{
        //e.preventDefault();
        document.querySelector("."+e.currentTarget.id).style.display="none";
        //bura global state-de uygun obyekti silmek ucun code logic yazilmalidir
    }
    renameList=(e)=>{
        if(e.target.value===''){this.setState({saveButtonDisabled:true});document.querySelector('.favorites__save').style.background="#bbc0ce"}
        else{this.setState({saveButtonDisabled:false});document.querySelector('.favorites__save').style.background="#496DDB"}
        this.setState({title:e.target.value});
    }
    postList=()=>{
        console.log("works");
        const info={
            "title":this.state.title,
            "movies":this.state.movies
        }
        fetch("https://acb-api.algoritmika.org/api/movies/list",{
            method:'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body:JSON.stringify(info)
        })
        .then(res=>res.json())
        .then(data=>{console.log(data);this.setState({pathID:data.id})})

        /*fetch("https://acb-api.algoritmika.org/api/movies/list")
        //.then(res=>res.json())
        .then(data=>console.log(data));*/ //get ile access etmek olmur deye,post-un icinde gotururuk data-ni

        //knopka-ni linke cevirmek
        this.setState({saveButtonClicked:true})
    }
    render() { 
        return (
            <div className="favorites">
                <input value={this.state.title} className="favorites__name" onChange={this.renameList} placeholder="Enter list name"/>
                <ul className="favorites__list">
                    {this.state.movies.map((item) => {
                        return <li key={item.id} className={item.id}>{item.name}&nbsp;({item.year})<span><button id={item.id} onClick={/*(e)=>console.log(item.id)*/this.deleter} disabled={this.state.saveButtonClicked?true:false}>x</button></span></li>;
                    })}
                </ul>
                {!this.state.saveButtonClicked?<button type="button" className="favorites__save" onClick={this.postList} disabled={this.state.saveButtonDisabled}>Сохранить список</button>:<Link to={"/list/"+this.state.pathID}>Go to list</Link>}
            </div>
        );
    }
}
 
export default Favorites;


/*her sey duz isleyir,bir dene deleter i ele yazmaq lazimdi ki,yalandan sehifeden silmesin,promoy global state-den silsin,yoxsa save vuranda sehifeden silse de global state-den silmediyi ucun linke vuranda guya "silinen" filmler de dusur*/