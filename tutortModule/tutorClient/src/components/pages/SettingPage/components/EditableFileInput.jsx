import { Close, CloseOutlined, Edit } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import "./Editable.scss";
const EditableFileInput = ({
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
          onKeyDown={(e) => handleKeyDown(e, type)}
        >
          <span className="editable__content">{children}</span>
          <span
            className="editable__editIcon"
            onClick={() => setEditing(!isEditing)}
          >
            {isEditing ? <CloseOutlined /> : <Edit />}{" "}
          </span>
        </div>
      ) : (
        <div className="editable__inputWrapper">
          <span className="editable__content">
            {text || placeholder || "Add an image jpg, jpeg or Png"}
          </span>
          <span
            className="editable__editIcon"
            onClick={() => setEditing(!isEditing)}
          >
            {<Edit />}
          </span>
        </div>
      )}
    </div>
  );
};

export default EditableFileInput;
