export function setFilm(name){
    return{type:'SET_FILM',payload:{name:name}}
}
/*export function searchFilm(film){
    return{ type:'SEARCH_FILM',payload:{}}
}*/
export function addToList(filmName,filmYear,filmId){
    return{type:'ADD_TO_LIST',payload:{name:filmName,year:filmYear,id:filmId}}
}

export function deleteTarget(removeId){
    return{type:'DELETE_TARGET',payload:{id:removeId}}
}
export function clearList(){
    return{type:'CLEAR_LIST',payload:{content:[]}}
}
//all of action function should be declared here