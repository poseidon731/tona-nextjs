import React, { useEffect, useState, useRef } from "react"
import { Modal } from "react-bootstrap"

import img01 from "../assets/img/portfolio/01.jpg";
import img02 from "../assets/img/portfolio/02.jpg";
import img03 from "../assets/img/portfolio/03.jpg";
import img04 from "../assets/img/portfolio/04.jpg";
import img05 from "../assets/img/portfolio/05.jpg";
import img06 from "../assets/img/portfolio/06.jpg";
import img07 from "../assets/img/portfolio/07.jpg";
import img08 from "../assets/img/portfolio/08.jpg";
import img09 from "../assets/img/portfolio/09.jpg";


const defFilters = [
    { label: 'All', key: ''},
    { label: 'Brand', key: 'brand'},
    { label: 'Design', key: 'web'},
    { label: 'Photo', key: 'photo'},
    { label: 'Video', key: 'video'},
]

const data = [
    {
        image: img01,
        link: "../assets/img/portfolio/01.jpg",
        category: "VIDEO",
        class: "video",
        filter: ["video"]
    },
    {
        image: img02,
        link: "../assets/img/portfolio/02.jpg",
        category: "DESIGN",
        class: "web",
        filter: ["video"]
    },
    {
        image: img03,
        link: "../assets/img/portfolio/03.jpg",
        category: "BRAND",
        class: "brand",
        filter: ["video"]
    },
    {
        image: img04,
        link: "../assets/img/portfolio/04.jpg",
        category: "PHOTO",
        class: "photo",
        filter: ["video"]
    },
    {
        image: img05,
        link: "../assets/img/portfolio/05.jpg",
        category: "DESIGN",
        class: "web",
        filter: ["video"]
    },
    {
        image: img06,
        link: "../assets/img/portfolio/06.jpg",
        category: "PHOTO",
        class: "photo",
        filter: ["video"]
    },    
    {
        image: img07,
        link: "../assets/img/portfolio/07.jpg",
        category: "VIDEO",
        class: "video",
        filter: ["video"]
    },
    {
        image: img08,
        link: "../assets/img/portfolio/08.jpg",
        category: "BRAND",
        class: "brand",
        filter: ["video"]
    },
    {
        image: img09,
        link: "../assets/img/portfolio/09.jpg",
        category: "Design",
        class: "web",
        filter: ["video"]
    },
]

const Portfolio = () => {
    const [currentFilter, setCurrentFilter] = useState('')
    const [gallery, setGallery] = useState(data)
    const [galleryH, setGalleryH] = useState(0)
    const [modalShow, setModalShow] = useState(false)
    const [currentImage, setCurrentImage] = useState()

    let row = 3
    useEffect(() => {
        resizeHandler();
        window.addEventListener('resize', resizeHandler);        
        setTimeout(resizeHandler, 100);
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, [])

    const resizeHandler = () => {
        onFilter(currentFilter)
    }

    const animateLayout = () => {
        let animateFinish = true;
        let newGallery = gallery.map((item) => {
            if( item.opacity < 1 ) {
                item.opacity += 0.05;
                if( item.opacity >= 1 ) {
                    item.opacity = 1;
                } else {
                    animateFinish = false;
                }
            } else {
                if( Math.abs(item.newLeft - item.left) > Math.abs(item.padX) ||
                    Math.abs(item.newTop - item.top) > Math.abs(item.padY)) {
                    item.left += item.padX
                    item.top += item.padY
                    animateFinish = false;
                } else {
                    item.left = item.newLeft;
                    item.top = item.newTop
                }
            }
            return item;
        })

        setGallery(newGallery)
        if( !animateFinish )
            setTimeout(animateLayout, 20)
    }

    const onFilter = (f) => {
        let height = 0;
        let idx = 0;
        
        let w = 390
        let h = 300
        
        if( window.innerWidth < 768 ) {
            row = 1
        } else {
            row = 3
        }

        let items = document.getElementsByClassName("item-img")
        
        if( items.length > 0 ) {
            w = items[0].offsetWidth
            h = items[0].offsetHeight
        }
        
        let newGallery = gallery.map((item) => {
            item.newLeft = (idx % row) * w
            item.newTop = parseInt(idx / row) * h
            item.opacity = 1
            height = item.newTop + h;

            if( !item.visible ) {
                item.opacity = 0;
                item.left = item.newLeft
                item.top = item.newTop                
            } else {
                item.padX = (item.newLeft - item.left) / 10
                item.padY = (item.newTop - item.top) / 10
            }

            if( f === '' || item.class === f ) {
                item.visible = true
                idx++;
            } else {
                item.visible = false;
            }
            return item;
        })

        setGallery(newGallery)
        setGalleryH(height)
        setCurrentFilter(f)

        setTimeout(animateLayout, 20)
    }

    return (
        <section className="portfolio section-padding">
			<div className="container">
				<div className="section-head text-center mb-50">
					<h5 className="tit tit-center">SOME OF WORK</h5>
				</div>

				<div className="row">

					<div className="filtering text-center mb-50 w-100">
                        {defFilters.map((item,idx) => (
                            <span key={idx} className={item.key === currentFilter ? "active" : ""}
                                    onClick={() => onFilter(item.key)}>{item.label}</span>  
                        ))}
					</div>

					<div className="gallery text-center" style={{position: 'relative', width: '100%', height: galleryH + 'px'}}>
                        {gallery.map((item, idx) => (item.visible &&
                            <div className={"col-md-4 item-img " + item.class} key={idx} 
                                    style={{ position: 'absolute', top: item.top + 'px', left: item.left + 'px', opacity: item.opacity}}>
                                <img src={item.image} alt="image" />
                                <div className="item-img-overlay">
                                    <div className="v-middle">
                                        <span className="icon" onClick={() => {
                                            setCurrentImage(item.image)
                                            setModalShow(true)}
                                        }></span>
                                    </div>
                                    <div className="overlay-info text-center">
                                        <p>{item.category}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
					</div>

                    <Modal
                        size="lg"
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        dialogClassName="centered-modal-dialog"
                    >
                        <Modal.Body className="portfolio-modal-body">
                            <img src={currentImage} alt="image" />
                            <button title="Close (Esc)" type="button" className="mfp-close" onClick={() => setModalShow(false)}>×</button>
                        </Modal.Body>
                    </Modal>
				</div>
			</div>
		</section>
    )
}

export default Portfolio;