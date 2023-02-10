import React from "react"
import Skills from "./skills"
import imgHero from "../../assets/img/hero.jpg";

const Hero = () => {
    return (
        <section className="hero section-padding">
			<div className="container mb-80">
				<div className="row">

					<div className="col-sm-4">
						<div className="hero-img">
							<img src={imgHero} alt="image" />
						</div>
					</div>

					<div className="col-sm-7 col-sm-offset-1">
						<div className="hero-item">
							<div className="tit">
								<h4>I AM A WEB DESIGNER</h4>
							</div>
							<div className="content mb-20">
								<p className="mb-20">Fusce quis volutpat porta, ut tincidunt eros est nec diam erat quis volutpat porta, neque massa, ut tincidunt eros est nec diam FusceFusce quis volutpat porta, ut tincidunt eros est nec diam erat quis volutpat porta, neque massa, ut tincidunt eros est nec diam FusceFusce quis volutpat porta, ut tincidunt eros est nec diam erat quis volutpat porta, neque massa, ut tincidunt eros est nec diam FusceFusce quis volutpat porta, ut tincidunt eros est nec diam erat quis volutpat porta, neque massa, ut tincidunt eros est nec diam Fusce</p>
								<p>Fusce quis volutpat porta, ut tincidunt eros est nec diam erat quis volutpat porta, neque massa, ut tincidunt eros est nec diam FusceFusce quis volutpat portaFusce quis volutpat porta, ut tincidunt eros est nec diam erat quis volutpat porta</p>
							</div>

							<div className="social-icon">
								<a href="#0">
									<span><i className="fa fa-facebook" aria-hidden="true"></i></span>
								</a>
								<a href="#0">
									<span><i className="fa fa-twitter" aria-hidden="true"></i></span>
								</a>
								<a href="#0">
									<span><i className="fa fa-youtube" aria-hidden="true"></i></span>
								</a>
								<a href="#0">
									<span><i className="fa fa-linkedin" aria-hidden="true"></i></span>
								</a>
								<a href="#0">
									<span><i className="fa fa-github" aria-hidden="true"></i></span>
								</a>
							</div>
						</div>
					</div>
					<div className="clear-fix"></div>
				</div>
            </div>

            <Skills></Skills>
        </section>
    );
  };
  
  export default Hero;
  