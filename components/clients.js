import React from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper";

SwiperCore.use([Autoplay, Pagination]);

const Clients = () => {
    
  const mainSlideOptions = {
        slidesPerView: 1,
        loop: true,
        effect: "fade",
        pagination: {
            el: "#main-slider-pagination",
            type: "bullets",
            clickable: true
        },
        autoplay: {
            delay: 5000
        }
    };

    return (
		<section id="clients" className="clients mb-50">
			<div className="container">
				<div className="row">

					<div className="col-md-10 col-md-offset-1">
						<div className="client-say text-center">

                            <Swiper {...mainSlideOptions}>                                
                                <SwiperSlide>
                                    <div className="client-item text-center">
                                            
                                        <span className="icon-quote mb-50"></span><br/>

                                        <h5 className="mb-30">WHAT PEOPLE SAY ?</h5>

                                        <p className="mb-20">Phasellus luctus commodo ullamcorper a posuere rhoncus commodo elit. Aenean congue, risus utaliquam dapibus. Thanks!.</p>

                                        <h6>___ John Doe, Google Inc. ___</h6>
                                    </div>
                                </SwiperSlide>                             
                                <SwiperSlide>
                                    <div className="client-item text-center">
                                            
                                        <span className="icon-quote mb-50"></span><br/>

                                        <h5 className="mb-30">WHAT PEOPLE SAY ?</h5>

                                        <p className="mb-20">Phasellus luctus commodo ullamcorper a posuere rhoncus commodo elit. Aenean congue, risus utaliquam dapibus. Thanks!.</p>

                                        <h6>___ John Doe, Google Inc. ___</h6>
                                    </div>
                                </SwiperSlide>
                             
                                <SwiperSlide>
                                    <div className="client-item text-center">
                                            
                                        <span className="icon-quote mb-50"></span><br/>

                                        <h5 className="mb-30">WHAT PEOPLE SAY ?</h5>

                                        <p className="mb-20">Phasellus luctus commodo ullamcorper a posuere rhoncus commodo elit. Aenean congue, risus utaliquam dapibus. Thanks!.</p>

                                        <h6>___ John Doe, Google Inc. ___</h6>
                                    </div>
                                </SwiperSlide>
                                
                                <div className="swiper-pagination" id="main-slider-pagination"></div>
                            </Swiper>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
  };
  
  export default Clients;
  