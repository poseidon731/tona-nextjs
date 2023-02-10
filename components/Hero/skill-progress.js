import React from "react"

const SkillProgress = ({title, progress}) => {
    return (
        <div className="item-info mb-30">
            <h6>{title}</h6>
            <div className="skills-progress"><span style={{width: progress + '%'}}></span></div>
        </div>
    );
  };
  
  export default SkillProgress;
  