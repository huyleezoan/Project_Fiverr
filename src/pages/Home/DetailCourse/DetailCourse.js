import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getThongTinChiTietCongViec } from "../../../redux/actions/QuanLyCongViecAction";
import "./DetailCourse.css";
export default function DetailCourse(props) {
  const { detailCourse } = useSelector(
    (rootReducer) => rootReducer.QuanLyCongViecReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getThongTinChiTietCongViec(props.match.params.id));
  }, []);
  console.log(detailCourse);
  return (
    <div className="container_all detailCourse">
      <div className="gig-gage">
        <div className="main"></div>
        <div className="side-bar">
          {detailCourse.name}
          <img src={detailCourse.image} alt="" />
        </div>
      </div>
    </div>
  );
}
