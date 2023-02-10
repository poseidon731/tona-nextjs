import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper-bundle.min.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/et-line.css";
import '../assets/css/responsive.css'
import '../assets/css/style.css'
import React, {useState, useEffect} from "react"
import Loading from '../components/loading'
import Router from "next/router";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
      <Component {...pageProps} />
      )}
    </>
  )
}

export default MyApp
