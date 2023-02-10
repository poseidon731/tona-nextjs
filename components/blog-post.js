import React from "react"

const BlogPost = ({title, category, blog, image, user, heart, chat }) => {
    return (
        <div className="col-md-12 mb-30">
            <div className="post">
                <div className="img-post mb-20">
                    <img src={image} alt="image" />
                </div>
                <div className="post-content">
                    <div className="post-title text-center">                        
                        {category.map((cate, idx) => (
                            <h6 key={idx}>
                                {idx > 0 &&
                                    <span> / </span>
                                }
                                <a href="#0"> {cate} </a>
                            
                            </h6>
                        ))}
                        <h5 className="tit tit-center">{title}</h5>
                    </div>
                    {blog.map((item, idx) => (
                        <p key={idx} className={ item.class + ((idx === blog.length - 1) ? "" : " mb-20")}>
                            {item.post}
                        </p>
                    ))}
                </div>
                <div className="post-info">
                    <ul>
                        <a href="#0">
                            <li><span className="icon-profile-male"></span> {user}</li>
                        </a>
                        <a href="#0">
                            <li><span className="icon-heart"></span> {heart}</li>
                        </a>
                        <a href="#0">
                            <li><span className="icon-chat"></span> {chat}</li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};
  
export default BlogPost;
  