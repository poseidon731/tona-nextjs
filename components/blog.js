import React from "react"
import Link from "next/link";

import img01 from "../assets/img/blog/b1.jpg";
import img02 from "../assets/img/blog/b2.jpg";
import img03 from "../assets/img/blog/b3.jpg";

const blogs = [
    {
        title: "We Love To Design",
        category: "ART / WEB DESIGN",
        image: img01,
        content: "Fusce elementum, erat quis volutpat porta, neque massa, ut tincidunt eros est nec diamneque massa, ut tincidunt eros est necFusce elementum, erat quis",
        user: "Admin",
        url: "/blog/single-post",
        heart: 120,
        chat: 34,
    },
    {
        title: "We Love To Design",
        category: "ART / WEB DESIGN",
        image: img02,
        content: "Fusce elementum, erat quis volutpat porta, neque massa, ut tincidunt eros est nec diamneque massa, ut tincidunt eros est necFusce elementum, erat quis",
        user: "Admin",
        url: "/blog/single-post",
        heart: 120,
        chat: 34,
    },
    {
        title: "We Love To Design",
        category: "ART / WEB DESIGN",
        image: img03,
        content: "Fusce elementum, erat quis volutpat porta, neque massa, ut tincidunt eros est nec diamneque massa, ut tincidunt eros est necFusce elementum, erat quis",
        user: "Admin",
        url: "/blog/single-post",
        heart: 120,
        chat: 34,
    }
]

const Blog = () => {
    return (
        <section className="blog section-padding">
			<div className="container">
				<div className="text-center mb-50">
					<h4 className="tit tit-center">LATEST NEWS</h4>
				</div>
				<div className="row">
                    {blogs.map((blog, idx) => (
                        <div className="col-md-4" key={idx}>
                            <div className="post">
                                <div className="img-post">
                                    <img src={blog.image} alt="image" />
                                    <div className="img-overlay">
                                        <Link href={blog.url}>
                                            <span className="icon-attachment"></span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="post-content">
                                    <div className="post-title text-center">
                                        <h6><a href="#0">{blog.category}</a></h6>
                                        <Link href={blog.url}>
                                            <h5 className="tit tit-center">{blog.title}</h5>
                                        </Link>
                                    </div>
                                    <p>{blog.content}</p>
                                </div>
                                <div className="post-info">
                                    <ul>
                                        <a href="#0">
                                            <li><span className="icon-profile-male"></span> {blog.user}</li>
                                        </a>
                                        <a href="#0">
                                            <li><span className="icon-heart"></span> {blog.heart}</li>
                                        </a>
                                        <a href="#0">
                                            <li><span className="icon-chat"></span> {blog.chat}</li>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
				</div>
			</div>
		</section>
    );
  };
  
  export default Blog;
  