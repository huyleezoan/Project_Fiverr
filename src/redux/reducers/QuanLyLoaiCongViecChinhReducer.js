import {
  SET_CONG_VIEC_CHINH_THEO_LOAI,
  SET_DANH_SACH_CONG_VIEC_CHINH,
} from "./../types/QuanLyLoaiCongViecChinhType";

const stateDefault = {
  listTypeJob: [],
  jobMain: {},
};

export const QuanLyLoaiCongViecChinhReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DANH_SACH_CONG_VIEC_CHINH: {
      state.listTypeJob = action.listTypeJob;
      return { ...state };
    }
    case SET_CONG_VIEC_CHINH_THEO_LOAI: {
      state.jobMain = action.jobMain;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
