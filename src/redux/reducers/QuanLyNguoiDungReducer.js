import { SET_THONG_TIN_CHI_TIET_NGUOI_DUNG } from "./../types/QuanLyNguoiDungType";
const stateDefault = {
  detailPerson: {},
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_THONG_TIN_CHI_TIET_NGUOI_DUNG: {
      state.detailPerson = action.detailPerson;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
