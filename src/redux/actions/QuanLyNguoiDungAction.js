import { http } from "../../util/setting";
import { SET_THONG_TIN_CHI_TIET_NGUOI_DUNG } from "./../types/QuanLyNguoiDungType";

export const getThongTinChiTietNguoiDung = (maNguoiDung) => {
  return async (dispatch) => {
    const result = await http.get(`/api/users/${maNguoiDung}`);
    dispatch({
      type: SET_THONG_TIN_CHI_TIET_NGUOI_DUNG,
      detailPerson: result.data,
    });
  };
};
