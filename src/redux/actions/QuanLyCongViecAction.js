import { http } from "../../util/setting";
import {
  GET_THONG_TIN_CHI_TIET_CONG_VIEC,
  SET_DANH_SACH_CONG_VIEC_THEO_TEN,
} from "../types/QuanLyCongViecType";

export const getDanhSachCongViecTheoTen = (name) => {
  return async (dispatch) => {
    const result = await http.get(`/api/jobs/by-name?name=${name}`);
    dispatch({
      type: SET_DANH_SACH_CONG_VIEC_THEO_TEN,
      listCourse: result.data,
    });
  };
};

export const getThongTinChiTietCongViec = (maCongViec) => {
  return async (dispatch) => {
    const result = await http.get(`/api/jobs/${maCongViec}`);
    dispatch({
      type: GET_THONG_TIN_CHI_TIET_CONG_VIEC,
      detailCourse: result.data,
    });
  };
};
