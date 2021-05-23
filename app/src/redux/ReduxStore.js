import { combineReducers, createStore } from "redux";
import DialogsReducer from "./DialogsReducer";
import ProfileReducer from "./ProfileReducer";
import SidebarReducer from "./SidebarReducer";

let reducers=combineReducers(
    {
        profilePage:ProfileReducer,
        dialogsPage:DialogsReducer,
        sidebar:SidebarReducer
    }
)
let store=createStore(reducers)

export default store

window.store = store
window.state=store.getState()