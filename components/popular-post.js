import React from "react"

const PopularPost = ({posts}) => {
    return (
        <div className="bars">
            <div className="pop-posts">
                <h5 className="tit">Popular Posts</h5>
                {posts.map((post, idx) => (
                    <div key={idx} className="pop-item">
                        <a href="#0">
                            <img src={post.image} alt="image" />
                        </a>
                        <div className="pop-info">
                            <h6>{post.title}</h6>
                            <span>{post.date}</span>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    );
};
  
export default PopularPost;
  