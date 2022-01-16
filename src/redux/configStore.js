import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";
import { QuanLyCongViecReducer } from "./reducers/QuanLyCongViecReducer";
import { QuanLyLoaiCongViecChinhReducer } from './reducers/QuanLyLoaiCongViecChinhReducer';
import { QuanLyNguoiDungReducer } from './reducers/QuanLyNguoiDungReducer';

const rootReducer = combineReducers({
  QuanLyCongViecReducer,
  QuanLyLoaiCongViecChinhReducer,
  QuanLyNguoiDungReducer
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
