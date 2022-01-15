import React from "react";
import "./CardJob.css";
export default function CardJob(props) {
  const { course, index } = props;
  return (
    <div className="card">
      <img
        src={course.image}
        alt=""
        style={{ width: "100%", height: "200px" }}
        onError={(e) => (
          (e.target.onerror = null),
          (e.target.src = `https://picsum.photos/${course._id}`)
        )}
      />
      <div className="card-body px-2 pb-0">
        <div className="avatar" style={{ display: "flex" }}>
          <div style={{ width: 20, height: 20, borderRadius: "50%" }}>
            <img
              src={`https://picsum.photos/${index}`}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
              }}
            />
          </div>
          <div style={{ marginLeft: "8px", fontWeight: "bold" }}>
            {course._id}
          </div>
        </div>
        <p className="card-text mt-2 avatar-text">{course.name}</p>
        <div className="rating my-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1792 1792"
              width="15"
              height="15"
            >
              <path
                fill="currentColor"
                d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
              ></path>
            </svg>
            {course.rating}
            <span className="text-num">({course.type.subTypeJobs.length})</span>
          </span>
        </div>
      </div>
      <div className="heart-price px-2">
        <div>
          <span
            className="heart-icon"
            aria-hidden="true"
            style={{ width: 16, height: 16 }}
          >
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z" />
            </svg>
          </span>
        </div>
        <a href="#" className="price-icon">
          <small>Starting at</small>
          <span>${course.price}</span>
        </a>
      </div>
    </div>
  );
}
