import React, { useEffect } from "react";
import "./ListCourse.css";

import { useDispatch, useSelector } from "react-redux";
import { getDanhSachCongViecTheoTen } from "../../redux/actions/QuanLyCongViecAction";
import { Card } from "antd";
import CardJob from "../../components/CardJob/CardJob";

const { Meta } = Card;
export default function ListCourse(props) {
  const nameList = props.match.params.name;
  const { listCourse } = useSelector(
    (rootReducer) => rootReducer.QuanLyCongViecReducer
  );
  console.log("listCourse: ", listCourse);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDanhSachCongViecTheoTen(nameList));
  }, []);
  return (
    <div className="list-course container_all">
      <div className="list-course-result ">
        <div className="result">
          <span>Results for "{nameList}"</span>
        </div>
      </div>
      <div className="result-info">
        <span>{listCourse.length} services available</span>
      </div>
      <div className="row list-course-card">
        {listCourse.map((course, index) => {
          return (
            <div className="col-3 my-3" key={index}>
              <CardJob course={course} index = {index}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}
