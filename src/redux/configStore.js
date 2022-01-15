import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";
import { QuanLyCongViecReducer } from "./reducers/QuanLyCongViecReducer";
import { QuanLyLoaiCongViecChinhReducer } from './reducers/QuanLyLoaiCongViecChinhReducer';
<img src="" alt="" />

const rootReducer = combineReducers({
  QuanLyCongViecReducer,
  QuanLyLoaiCongViecChinhReducer
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
