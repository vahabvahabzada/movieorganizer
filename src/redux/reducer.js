const initialState={
    searchState:"first",
    inTheList:[]//ozunde list-e elave olunmus ad ve ilden ibaret film obyektleri saxlayir   
}

const reducer=(state=initialState,action)=>{
    if(action.type==="SET_FILM"){
        state.searchState=action.payload.name;
    }
    /*if(action.type==='SEARCH_FILM'){
    }*/
    if(action.type==="ADD_TO_LIST"){
        state.inTheList.push({name:action.payload.name,year:action.payload.year,id:action.payload.id});
    }
    return state;
}

export default reducer;