import Head from 'next/head'
import Link from "next/link"
import BlogPost from '../../components/blog-post'
import Comments from '../../components/comments'
import CommentForm from '../../components/comment-form'
import AboutMe from '../../components/about-me'
import FollowUs from '../../components/followus'
import PopularPost from '../../components/popular-post'
import Categories from '../../components/categories'
import Tags from '../../components/tags'
import Bottom from '../../components/bottom'


import imgblog from "../../assets/img/blog/sb.jpg";
import imgblogI1 from "../../assets/img/blog/i-1.png";
import imgblogI2 from "../../assets/img/blog/i-2.png";
import imgblogI3 from "../../assets/img/blog/i-3.png";
import imgAbout from "../../assets/img/blog/about.jpg";
import imgblogB1 from "../../assets/img/blog/b1.jpg";
import imgblogB2 from "../../assets/img/blog/b2.jpg";
import imgblogB3 from "../../assets/img/blog/b3.jpg";
import imgblogB4 from "../../assets/img/blog/b4.jpg";


function SinglePost() {
    return (
        <div>
            <Head>
                <title>Single-Post</title>
            </Head>

            <header className="tona-blog" data-stellar-background-ratio="0.5">
                <div className="blog-overlay">
                    <div className="caption v-middle text-center">
                        <h1>Single Post</h1>
                        <span><Link href="/">Home /</Link></span>
                        <span><Link href="#0"> Post</Link></span>
                    </div>

                </div>
            </header>


            <section className="posts section-padding">                
                <div className="container">
                    <div className="row">
                        <div className="main-post col-sm-9">
                            <BlogPost image={imgblog}
                                category={["ART", "WEB DESIGN"]}
                                title="We Love To Design"
                                user="Admin"
                                blog={[
                                    {class:'', post: "Fusce elementum, erat quis volutpat porta, neque massa, ut tincidunt eros est nec diamneque massa, ut tincidunt eros est necFusce elementum, erat quis volutpat porta, neque massa, ut tincidunt eros est nec diamneque massa, ut tincidunt eros est nec Fusce elementum, erat quis volutpat porta, neque massa, ut tincidunt eros est nec diamneque massa, ut tincidunt eros est necFusce elementum"},
                                    {class:'tona-post', post: "Fusce elementum, erat quis volutpat porta, neque massa, ut tincidunt eros est nec diamneque massa, ut tincidunt eros est necFusce elementum, erat quis volutpat porta, neque massa"},
                                    {class:'', post: "Fusce elementum, erat quis volutpat porta, neque massa, ut tincidunt eros est nec diamneque massa, ut tincidunt eros est necFusce elementum, erat quis volutpat porta, neque massa, ut tincidunt eros est nec diamneque massa, ut tincidunt eros est nec Fusce elementum, erat quis volutpat porta, neque massa, ut tincidunt eros est nec diamneque massa, ut tincidunt eros est necFusce elementum"}
                                ]}
                                heart={120} 
                                chat={34}/>

                            
                            <Comments 
                                title="COMMENTS" 
                                comments={[
                                    {class: '', name: 'Hisham Dimo', date: 'August 6, 2015', image: imgblogI1, comment: 'Fusce elementum, erat quis volutpat porta, neque massa, ut tincidunt eros est nec diamneque massa, ut tincidunt eros est necFusce elementum, erat quis volutpat porta, neque massa' },
                                    {class: 'tona-com', name: 'Hisham Dimo', date: 'August 6, 2015', image: imgblogI2, comment: 'Fusce elementum, erat quis volutpat porta, neque massa, ut tincidunt eros est nec diamneque massa, ut tincidunt eros est necFusce elementum, erat quis volutpat porta, neque massa' },
                                    {class: '', name: 'Hisham Dimo', date: 'August 6, 2015', image: imgblogI3, comment: 'Fusce elementum, erat quis volutpat porta, neque massa, ut tincidunt eros est nec diamneque massa, ut tincidunt eros est necFusce elementum, erat quis volutpat porta, neque massa' }
                                ]}
                            />
                            <CommentForm />
                        </div>
                        
                        <div className="side-bar col-sm-3">
                            <AboutMe image={imgAbout} comment="Fusce ut tincidunt eros est nec diamneque massa, ut tincidunt eros est necFusce erat quis volutpat porta" />
                            <FollowUs />
                            <PopularPost 
                                posts={[
                                    {
                                        image: imgblogB1,
                                        title: "Web Design And Graphic",
                                        date: "August 6, 2016",
                                    },
                                    {
                                        image: imgblogB2,
                                        title: "Web Design And Graphic",
                                        date: "August 6, 2016",
                                    },
                                    {
                                        image: imgblogB3,
                                        title: "Web Design And Graphic",
                                        date: "August 6, 2016",
                                    },
                                    {
                                        image: imgblogB4,
                                        title: "Web Design And Graphic",
                                        date: "August 6, 2016",
                                    },
                                ]}
                            />

                            <Categories 
                                categories={[
                                    {name: 'Web Design', count: 20 },
                                    {name: 'Graphic Design', count: 42 },
                                    {name: 'Fashion', count: 5 },
                                    {name: 'Photography', count: 13 },
                                    {name: 'Featured', count: 22 },
                                    {name: 'Tona', count: 12 },
                                ]}
                            />

                            <Tags 
                                tags={[
                                    "Graphic", "Fashion", "Photo", "Tona", "Web",
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Bottom/>
        </div>        
    )
}

export default SinglePost;
