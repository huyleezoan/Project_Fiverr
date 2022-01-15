import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCongViecChinhTheoLoai } from "../../../redux/actions/QuanLyLoaiCongViecChinhAction";
import "./TypeJobMarketplace.css";
export default function TypeJobMarketplace(props) {
  const { jobMain } = useSelector(
    (rootReducer) => rootReducer.QuanLyLoaiCongViecChinhReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCongViecChinhTheoLoai(props.match.params.id));
  }, []);
  console.log(jobMain);
  return (
    <div className="container_all typejobmarketplace">
      <h1 className="text-center my-5">{jobMain.name}</h1>
      <div className="lists-wrapper">
        <ul className="side-menu">
          <li className="selected-category">{jobMain.name}</li>
          {jobMain.subTypeJobs?.map((subJob, index) => {
            return (
              <li>
                <a href="/categories/programming-tech/ecommerce-services?source=side-menu">
                  {subJob.name}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="main-content">
          <a
            href="/categories/programming-tech/wordpress-services?source=gallery-listing"
            className="medium desktop"
          >
            <span className="image-wrapper">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/6df5a306fe5e08d4af6eeabfe96fca13-1581867938519/desktop_programming_and_tech_wordpress.jpg"
                alt="WordPress"
              />
            </span>
            <span
              className="lFICM06 icon desktop"
              aria-hidden="true"
              style={{ width: 16, height: 16 }}
            >
              <svg
                width={8}
                height={16}
                viewBox="0 0 8 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" />
              </svg>
            </span>
            WordPress
          </a>
          <a
            href="/categories/programming-tech/web-cms-services?source=gallery-listing"
            className="medium desktop"
          >
            <span className="image-wrapper">
              <img
                src="https://fiverr-res.cloudinary.com/w_iw_div_3.0,q_auto,f_auto/general_assets/categories/assets/f3/desktop_programming_and_tech_websites_and_builders_cms.jpg"
                alt="Website Builders & CMS"
              />
            </span>
            <span
              className="lFICM06 icon desktop"
              aria-hidden="true"
              style={{ width: 16, height: 16 }}
            >
              <svg
                width={8}
                height={16}
                viewBox="0 0 8 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" />
              </svg>
            </span>
            Website Builders &amp; CMS
          </a>
          <a
            href="/categories/programming-tech/ecommerce-services?source=gallery-listing"
            className="medium desktop"
          >
            <span className="image-wrapper">
              <img
                src="https://fiverr-res.cloudinary.com/w_iw_div_3.0,q_auto,f_auto/general_assets/categories/assets/f3/desktop_programming_and_tech_ecommerce_medium.jpg"
                alt="E-Commerce Development"
              />
            </span>
            <span
              className="lFICM06 icon desktop"
              aria-hidden="true"
              style={{ width: 16, height: 16 }}
            >
              <svg
                width={8}
                height={16}
                viewBox="0 0 8 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" />
              </svg>
            </span>
            E-Commerce Development
          </a>
          <a
            href="/categories/programming-tech/game-development?source=gallery-listing"
            className="medium desktop"
          >
            <span className="image-wrapper">
              <img
                src="https://fiverr-res.cloudinary.com/w_iw_div_3.0,q_auto,f_auto/general_assets/categories/assets/f3/desktop_programming_and_tech_game_development.jpg"
                alt="Game Development"
              />
            </span>
            <span
              className="lFICM06 icon desktop"
              aria-hidden="true"
              style={{ width: 16, height: 16 }}
            >
              <svg
                width={8}
                height={16}
                viewBox="0 0 8 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" />
              </svg>
            </span>
            Game Development
          </a>
          <a
            href="/categories/programming-tech/mobile-app-services?source=gallery-listing"
            className="medium desktop"
          >
            <span className="image-wrapper">
              <img
                src="https://fiverr-res.cloudinary.com/w_iw_div_3.0,q_auto,f_auto/general_assets/categories/assets/f3/desktop_programming_and_tech_mobile_apps_and_web.jpg"
                alt="Mobile Apps"
              />
            </span>
            <span
              className="lFICM06 icon desktop"
              aria-hidden="true"
              style={{ width: 16, height: 16 }}
            >
              <svg
                width={8}
                height={16}
                viewBox="0 0 8 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" />
              </svg>
            </span>
            Mobile Apps
          </a>
          <a
            href="/categories/programming-tech/electronics-engineering?source=gallery-listing"
            className="medium desktop"
          >
            <span className="image-wrapper">
              <img
                src="https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/d3a7e63007ded2b03b2e3fc8dff27b2e-1639552954761/electronics-engineering.jpg"
                alt="Electronics Engineering"
              />
            </span>
            <span
              className="lFICM06 icon desktop"
              aria-hidden="true"
              style={{ width: 16, height: 16 }}
            >
              <svg
                width={8}
                height={16}
                viewBox="0 0 8 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" />
              </svg>
            </span>
            Electronics Engineering
            <span className="fmFFGHM badge ZeFDQDI jZ81ziH h18IWLb">New</span>
          </a>
          <a
            href="/categories/programming-tech/blockchain-cryptocurrency?source=gallery-listing"
            className="medium desktop"
          >
            <span className="image-wrapper">
              <img
                src="https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/4202dfc7e0be02f18fb41cd3623d9d46-1639564238716/blockchain.jpg"
                alt="Blockchain & Cryptocurrency"
              />
            </span>
            <span
              className="lFICM06 icon desktop"
              aria-hidden="true"
              style={{ width: 16, height: 16 }}
            >
              <svg
                width={8}
                height={16}
                viewBox="0 0 8 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" />
              </svg>
            </span>
            Blockchain &amp; Cryptocurrency
          </a>
          <a
            href="/categories/programming-tech/development-for-streamers?source=gallery-listing"
            className="medium desktop"
          >
            <span className="image-wrapper">
              <img
                src="https://fiverr-res.cloudinary.com/w_iw_div_3.0,q_auto,f_auto/v1/attachments/generic_asset/asset/68391e95e848506ec4d0139a3242376d-1593423507356/425.jpg"
                alt="Development for Streamers"
              />
            </span>
            <span
              className="lFICM06 icon desktop"
              aria-hidden="true"
              style={{ width: 16, height: 16 }}
            >
              <svg
                width={8}
                height={16}
                viewBox="0 0 8 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" />
              </svg>
            </span>
            Development for Streamers
          </a>
          <a
            href="/categories/programming-tech/web-programming-services?source=gallery-listing"
            className="medium desktop"
          >
            <span className="image-wrapper">
              <img
                src="https://fiverr-res.cloudinary.com/w_iw_div_3.0,q_auto,f_auto/general_assets/categories/assets/f3/desktop_programming_and_tech_web_programming_medium.jpg"
                alt="Web Programming"
              />
            </span>
            <span
              className="lFICM06 icon desktop"
              aria-hidden="true"
              style={{ width: 16, height: 16 }}
            >
              <svg
                width={8}
                height={16}
                viewBox="0 0 8 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" />
              </svg>
            </span>
            Web Programming
          </a>
          <a
            href="/categories/programming-tech/desktop-app-services?source=gallery-listing"
            className="medium desktop"
          >
            <span className="image-wrapper">
              <img
                src="https://fiverr-res.cloudinary.com/w_iw_div_3.0,q_auto,f_auto/general_assets/categories/assets/f3/desktop_programming_and_tech_desktop_applications.jpg"
                alt="Desktop Applications"
              />
            </span>
            <span
              className="lFICM06 icon desktop"
              aria-hidden="true"
              style={{ width: 16, height: 16 }}
            >
              <svg
                width={8}
                height={16}
                viewBox="0 0 8 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" />
              </svg>
            </span>
            Desktop Applications
          </a>
          <a
            href="/categories/programming-tech/online-coding-lessons?source=gallery-listing"
            className="medium desktop"
          >
            <span className="image-wrapper">
              <img
                src="https://fiverr-res.cloudinary.com/w_iw_div_3.0,q_auto,f_auto/v1/attachments/generic_asset/asset/c742c55bd290d64928f0d981314b7cc8-1585147382706/Online%20Coding%20Lessons.jpg"
                alt="Online Coding Lessons"
              />
            </span>
            <span
              className="lFICM06 icon desktop"
              aria-hidden="true"
              style={{ width: 16, height: 16 }}
            >
              <svg
                width={8}
                height={16}
                viewBox="0 0 8 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" />
              </svg>
            </span>
            Online Coding Lessons
          </a>
          <a
            href="/categories/programming-tech/chatbots?source=gallery-listing"
            className="medium desktop"
          >
            <span className="image-wrapper">
              <img
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto/v1/attachments/generic_asset/asset/6df5a306fe5e08d4af6eeabfe96fca13-1581868000665/desktop_programming_and_tech_chatbots_new%201.jpg"
                alt="Chatbots"
              />
            </span>
            <span
              className="lFICM06 icon desktop"
              aria-hidden="true"
              style={{ width: 16, height: 16 }}
            >
              <svg
                width={8}
                height={16}
                viewBox="0 0 8 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" />
              </svg>
            </span>
            Chatbots
          </a>
          <a
            href="/categories/programming-tech/cybersecurity-data-protection?source=gallery-listing"
            className="medium desktop"
          >
            <span className="image-wrapper">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/6df5a306fe5e08d4af6eeabfe96fca13-1581868000662/%D0%A1ybersecurity%201.jpg"
                alt="Cybersecurity & Data Protection"
              />
            </span>
            <span
              className="lFICM06 icon desktop"
              aria-hidden="true"
              style={{ width: 16, height: 16 }}
            >
              <svg
                width={8}
                height={16}
                viewBox="0 0 8 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" />
              </svg>
            </span>
            Cybersecurity &amp; Data Protection
          </a>
          <a
            href="/categories/programming-tech/support-it-services?source=gallery-listing"
            className="medium desktop"
          >
            <span className="image-wrapper">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/6df5a306fe5e08d4af6eeabfe96fca13-1581868000663/desktop_programming_and_tech_support_and_it%201.jpg"
                alt="Support & IT"
              />
            </span>
            <span
              className="lFICM06 icon desktop"
              aria-hidden="true"
              style={{ width: 16, height: 16 }}
            >
              <svg
                width={8}
                height={16}
                viewBox="0 0 8 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" />
              </svg>
            </span>
            Support &amp; IT
          </a>
          <a
            href="/categories/programming-tech/file-conversion-services?source=gallery-listing"
            className="medium desktop"
          >
            <span className="image-wrapper">
              <img
                src="https://fiverr-res.cloudinary.com/w_iw_div_3.0,q_auto,f_auto/general_assets/categories/assets/f3/desktop_programming_and_tech_convert_files_medium.jpg"
                alt="Convert Files"
              />
            </span>
            <span
              className="lFICM06 icon desktop"
              aria-hidden="true"
              style={{ width: 16, height: 16 }}
            >
              <svg
                width={8}
                height={16}
                viewBox="0 0 8 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" />
              </svg>
            </span>
            Convert Files
          </a>
          <a
            href="/categories/programming-tech/user-testing-services?source=gallery-listing"
            className="medium desktop"
          >
            <span className="image-wrapper">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/6df5a306fe5e08d4af6eeabfe96fca13-1581868000672/desktop_programming_and_tech_user_testing_new%201.jpg"
                alt="User Testing"
              />
            </span>
            <span
              className="lFICM06 icon desktop"
              aria-hidden="true"
              style={{ width: 16, height: 16 }}
            >
              <svg
                width={8}
                height={16}
                viewBox="0 0 8 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" />
              </svg>
            </span>
            User Testing
          </a>
          <a
            href="/categories/programming-tech/qa-services?source=gallery-listing"
            className="medium desktop"
          >
            <span className="image-wrapper">
              <img
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto/v1/attachments/generic_asset/asset/6df5a306fe5e08d4af6eeabfe96fca13-1581868000670/desktop_programming_and_tech_qa_new%201.jpg"
                alt="QA & Review"
              />
            </span>
            <span
              className="lFICM06 icon desktop"
              aria-hidden="true"
              style={{ width: 16, height: 16 }}
            >
              <svg
                width={8}
                height={16}
                viewBox="0 0 8 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z" />
              </svg>
            </span>
            QA &amp; Review
          </a>
        </div>
      </div>
    </div>
  );
}
