import React from "react"

const Categories = ({categories}) => {
    return (
        <div className="bars">
            <div className="categ">
                <h5 className="tit">Categories</h5>
                {categories.map((category, idx) => (
                    <a href="#0" key={idx}>
                        <p>{category.name}<span>{category.count}</span></p>
                    </a>
                ))}					
            </div>
        </div>
    );
  };
  
  export default Categories;
  