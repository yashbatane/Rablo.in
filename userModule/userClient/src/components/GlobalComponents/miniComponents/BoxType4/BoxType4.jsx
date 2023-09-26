import React from "react";
import "./BoxType4.css";

export const BoxType4 = ({ Heading1, para, thermolevel, Heading2, list }) => {
  return (
    <div className="descard-container">
      <div className="img-container">
        <img
          src="https://media.istockphoto.com/photos/happy-black-girl-talking-to-her-teacher-during-a-class-at-elementary-picture-id1091227144?k=20&m=1091227144&s=612x612&w=0&h=-7tnStjN0ef4IgIsnhy933bFkFnv0u770pVcn4-81c0="
          alt=""
        />
      </div>
      <div className="card-content">
        {/* <div className="card-contentWrapper"> */}
        <i
          className={
            "card-content-icon fa-solid fa-temperature-" +
            { thermolevel } +
            " fa-rotate-90"
          }
        ></i>

        <div className="card-title">
          <h3>{Heading1}</h3>
        </div>
        <div className="card-body">
          <p>{para}</p>
        </div>
        {/* </div> */}
      </div>
      <div className="card-content2">
        <div className="card-title2">
          <h3>{Heading2}</h3>
        </div>
        <div className="card-body2">
          <p>
            <ul>{list}</ul>
          </p>
        </div>
        <div>
          <button>START HERE</button>
        </div>
      </div>
    </div>
  );
};
