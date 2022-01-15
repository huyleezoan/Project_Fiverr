import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./HomeCarousel.css";
export default function HomeCarousel(props) {
  const [nameIn, setNameIn] = useState("");
  const handleChangeInput = (event) => {
    let { name, value } = event.target;
    console.log("new value: ", value);
    setNameIn(value);
  };
  return (
    <section className="search_service">
      <div
        id="search_service_carousel"
        className="carousel carousel-fade
          slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#search_service_carousel"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#search_service_carousel" data-slide-to="1"></li>
          <li data-target="#search_service_carousel" data-slide-to="2"></li>
          <li data-target="#search_service_carousel" data-slide-to="3"></li>
          <li data-target="#search_service_carousel" data-slide-to="4"></li>
        </ol>
        <div className="carousel-inner container_all">
          <div className="carousel-img">
            {props.listCarousel.map((carousel, index) => {
              return (
                <div
                  className="carousel-item active"
                  style={{ backgroundImage: `url(${carousel.img})` }}
                  key={index}
                >
                  <p>
                    {carousel.name} <b>{carousel.field}</b>
                  </p>
                </div>
              );
            })}
          </div>
          <div className="carousel-content">
            <div className="content-top">
              <h1>
                <span>
                  Find the perfect <i>freelance</i> services for your business
                </span>
              </h1>
              <div className="content-top-form">
                <form>
                  <span className="lFICM06 search-bar-icon" aria-hidden="true">
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.8906 14.6531L12.0969
                                          10.8594C12.025 10.7875 11.9313
                                          10.75 11.8313
                                          10.75H11.4187C12.4031 9.60938 13
                                          8.125 13 6.5C13 2.90937 10.0906
                                          0 6.5 0C2.90937 0 0 2.90937 0
                                          6.5C0 10.0906 2.90937 13 6.5
                                          13C8.125 13 9.60938 12.4031
                                          10.75 11.4187V11.8313C10.75
                                          11.9313 10.7906 12.025 10.8594
                                          12.0969L14.6531 15.8906C14.8
                                          16.0375 15.0375 16.0375 15.1844
                                          15.8906L15.8906 15.1844C16.0375
                                          15.0375 16.0375 14.8 15.8906
                                          14.6531ZM6.5 11.5C3.7375 11.5
                                          1.5 9.2625 1.5 6.5C1.5 3.7375
                                          3.7375 1.5 6.5 1.5C9.2625 1.5
                                          11.5 3.7375 11.5 6.5C11.5 9.2625
                                          9.2625 11.5 6.5 11.5Z"
                      ></path>
                    </svg>
                  </span>
                  <input
                    type="search"
                    placeholder="Try building mobile app"
                    name="search"
                    onChange={handleChangeInput}
                    value={nameIn}
                  />
                  <NavLink
                    to={`/listcourse/${nameIn}`}
                    className="homeCarousel-button"
                  >
                    Search
                  </NavLink>
                </form>
              </div>
              <div className="content-top-popular">
                <span>Popular: </span>
                <ul>
                  <li>
                    <a href="/" alt="">
                      Website Design
                    </a>
                  </li>
                  <li>
                    <a href="/">WordPress</a>
                  </li>
                  <li>
                    <a href="/">Logo Design</a>
                  </li>
                  <li>
                    <a href="/">NFT Art</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-bottom">
              <div className="content-bottom-video">
                <div className="content-bottom-overlay"></div>
                <video autoPlay muted loop playsInline>
                  <source
                    src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-attachments/generic_asset/asset/815b6fe5bd4cbf622ccf52576bda2e8b-1635427050879/brand%20campaign%20preview%20LP%20update%20CC"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            <a href="#" className="discover">
              <p>Discover how to get it done</p>
              <span aria-hidden="true" style={{ width: 20, height: 20 }}>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0
                              16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.92332 2.96885C9.63854 2.66807
                                  9.1768 2.66807 8.89202 2.96885C8.60723
                                  3.26963 8.60723 3.75729 8.89202
                                  4.05807L11.6958 7.01931H1.48616C1.08341
                                  7.01931 0.756918 7.36413 0.756918
                                  7.7895C0.756918 8.21487 1.08341 8.5597
                                  1.48616 8.5597H11.8436L8.89202
                                  11.677C8.60723 11.9778 8.60723 12.4654
                                  8.89202 12.7662C9.1768 13.067 9.63854
                                  13.067 9.92332 12.7662L14.0459
                                  8.41213C14.3307 8.11135 14.3307 7.62369
                                  14.0459 7.32291L13.977 7.25011C13.9737
                                  7.24661 13.9704 7.24315 13.9671
                                  7.23972L9.92332 2.96885Z"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
