import React from "react"

const Comments = ({title, comments}) => {
    return (
        <div className="col-md-12 mb-30">
            <div className="comment post">
                <div className="post-title text-center">
                    <h5 className="tit tit-center">{title}</h5>
                </div>
                {comments.map((comment, idx) => (
                    <div key={idx} className={"com-post " + comment.class}>
                        <div className="com-img pull-left">
                            <img src={comment.image} alt="image" />
                        </div>
                        <div className="com-content">
                            <h6>{comment.name}<span><i className="fa fa-reply" aria-hidden="true"></i> REPLY</span></h6>
                            <span className="date">{comment.date}</span>
                            <p>{comment.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
  
export default Comments;
  