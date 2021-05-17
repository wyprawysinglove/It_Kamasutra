import { combineReducers, createStore } from "redux";
import DialogsReducer from "./DialogsReducer";
import ProfileReducer from "./ProfileReducer";
import SidebarReducer from "./SidebarReducer";

let reducers=combineReducers(
    {
        ProfileReducer:ProfileReducer,
        DialogsReducer:DialogsReducer,
        SidebarReducer:SidebarReducer
    }
)
let store=createStore(reducers)

export default store