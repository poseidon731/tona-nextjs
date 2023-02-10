import React from "react"

const CommentForm = () => {
    return (
        <div className="col-md-12">
            <div className="com-form post">
                <div className="post-title text-center">
                    <h5 className="tit tit-center">Write A Comment</h5>
                </div>
                <div className="col-md-6 mb-30">
                    <input type="text" name="name" placeholder="Name" />
                </div>
                <div className="col-md-6 mb-30">
                    <input type="text" name="email" placeholder="E-mail" />
                </div>
                <div className="col-md-12 mb-30">
                    <textarea placeholder="Comment"></textarea>
                </div>
                <button>Post Comment</button>
            </div>
        </div>
    );
};
  
export default CommentForm;
  