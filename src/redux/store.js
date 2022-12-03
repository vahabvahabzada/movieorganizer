import {createStore} from "redux";
import reducer from "./reducer";

let store=createStore(reducer);//creating global store
export default store;