//store.ts
import { createStore, combineReducers, Store } from "redux";
import reducers, { RootAppState } from "./reducers";

const rootReducer = combineReducers(reducers);
const store: Store<RootAppState> = createStore(rootReducer);

export default store;
