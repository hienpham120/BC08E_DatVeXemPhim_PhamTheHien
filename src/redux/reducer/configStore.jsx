import { combineReducers, createStore } from "redux";
import BaiTapDatVeReducer from "./BaiTapDatVeReducer";

const rootReducer = combineReducers({
  BaiTapDatVeReducer,
});

export const store = createStore(rootReducer);
