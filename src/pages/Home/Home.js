import React, { useEffect } from "react";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import "./Home.css";

import listLogo from "../../json/HomeData/listLogo.json";
import listCarousel from "../../json/HomeData/listCarousel.json";
import listService from "../../json/HomeData/listService.json";
import listExplore from "../../json/HomeData/listExplore.json";
import HomeBody from "./HomeBody/HomeBody";
import { useDispatch, useSelector } from "react-redux";
import { getDanhSachCongViecChinh } from "../../redux/actions/QuanLyLoaiCongViecChinhAction";

export default function Home() {
  const { listTypeJob } = useSelector(
    (rootReducer) => rootReducer.QuanLyLoaiCongViecChinhReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDanhSachCongViecChinh);
  }, []);
  console.log(listTypeJob);
  return (
    <div>
      <HomeCarousel listCarousel={listCarousel} />
      <HomeBody
        listLogo={listLogo}
        listService={listService}
        listExplore={listExplore}
        listTypeJob={listTypeJob}
      />
    </div>
  );
}
