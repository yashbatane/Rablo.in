import { Edit } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import "./Editable.scss";
const Editable = ({
  childRef,
  text,
  type,
  placeholder,
  children,
  ...props
}) => {
  const [isEditing, setEditing] = useState(false);
  useEffect(() => {
    if (childRef && childRef.current && isEditing === true) {
      childRef.current.focus();
    }
  }, [isEditing, childRef]);
  // Event handler while pressing any key while editing
  const handleKeyDown = (event, type) => {
    // Handle when key is pressed
  };

  return (
    <div className="editable__inputWrapperOuter" {...props}>
      {isEditing ? (
        <div
          className="editable__inputWrapper"
          onBlur={() => setEditing(false)}
          onKeyDown={(e) => handleKeyDown(e, type)}
        >
          <span className="editable__content">{children}</span>
          <span
            className="editable__editIcon"
            onClick={() => setEditing(!isEditing)}
          ></span>
        </div>
      ) : (
        <div className="editable__inputWrapper">
          <span className="editable__content">
            <button className="btn" style={{ backgroundColor: " #6769FF" }}>
              {props.title}
            </button>
          </span>
          <span
            className="editable__editIcon"
            onClick={() => setEditing(true)}
          ></span>
        </div>
      )}
    </div>
  );
};

export default Editable;
