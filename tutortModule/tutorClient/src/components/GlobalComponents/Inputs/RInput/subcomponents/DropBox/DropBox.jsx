import React from "react";

import "./styles/DropBox.css";

const DropBox = () => {
    return (
        <div className="dropbox">
            <input
                type="file"
                className="image_uploads"
                accept=".jpg, .jpeg, .png"
            />
            <input
                type="button"
                className="drop-image"
                accept=".jpg, .jpeg, .png"
                value={"Browse Your Device"}
            />
            <div>
                Or<br/> 
                Drag & Drop here
            </div>
        </div>
    );
}

export default DropBox;