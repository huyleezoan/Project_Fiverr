import { http } from "../../util/setting";
import {
  SET_CONG_VIEC_CHINH_THEO_LOAI,
  SET_DANH_SACH_CONG_VIEC_CHINH,
} from "./../types/QuanLyLoaiCongViecChinhType";

export const getDanhSachCongViecChinh = async (dispatch) => {
  const result = await http.get("/api/type-jobs");
  dispatch({
    type: SET_DANH_SACH_CONG_VIEC_CHINH,
    listTypeJob: result.data,
  });
};

export const getCongViecChinhTheoLoai = (maCongViecChinh) => {
  return async (dispatch) => {
    const result = await http.get(`/api/type-jobs/${maCongViecChinh}`);
    dispatch({
      type: SET_CONG_VIEC_CHINH_THEO_LOAI,
      jobMain: result.data,
    });
  };
};
