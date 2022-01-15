import {
  GET_THONG_TIN_CHI_TIET_CONG_VIEC,
  SET_DANH_SACH_CONG_VIEC_THEO_TEN,
} from "../types/QuanLyCongViecType";

const stateDefault = {
  listCourse: [],
  listJobMain: [],
  detailCourse: {},
};

export const QuanLyCongViecReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DANH_SACH_CONG_VIEC_THEO_TEN: {
      state.listCourse = action.listCourse;
      return { ...state };
    }
    case GET_THONG_TIN_CHI_TIET_CONG_VIEC: {
      state.detailCourse = action.detailCourse;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
