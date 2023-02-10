import React from "react"

const AboutMe = ({image, comment }) => {
    return (
        <div className="bars">
            <div className="about-bar">
                <h5 className="tit">About Me</h5><br/>
                <img src={image} alt="image" />
                <p>{comment}</p>
            </div>
        </div>
    );
};
  
export default AboutMe;
  