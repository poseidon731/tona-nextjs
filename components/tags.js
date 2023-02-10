import React from "react"

const Tags = ({tags}) => {
    return (
        <div className="bars">
            <div className="tags">
                <h5 className="tit">Tag Cloud</h5><br/>
                {tags.map((tag, idx) => (
                    <a key={idx} href="" className="mr-2">
                        <span>{tag}</span>
                    </a>
                ))}	
            </div>
        </div>
    );
  };
  
  export default Tags;
  