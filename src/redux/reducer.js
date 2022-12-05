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
        let cond=true;
        state.inTheList.forEach((item)=>{if(item.id===action.payload.id){cond=false;}})
        if(cond){
        state.inTheList.push({name:action.payload.name,year:action.payload.year,id:action.payload.id});
        }
    }
    if(action.type==="DELETE_TARGET"){
        state.inTheList.forEach((item)=>{if(item.id===action.payload.id){state.inTheList.splice(state.inTheList.indexOf(item),1)}})
    }
    if(action.type==="CLEAR_LIST"){
        state.inTheList=action.payload.content;
    }
    return state;
}

export default reducer;