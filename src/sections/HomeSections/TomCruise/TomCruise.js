import "./TomCruise.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { TomCruiseCard } from "../../../components";
let API_KEY = "&api_key=e09688488e47eddfb6a9c40e8ae46475";
let Base_url = "https://api.themoviedb.org/3";
let url =
  Base_url +
  "/discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc" +
  API_KEY;

function TomCruise() {
  const [tomCruise, setTomCruise] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.results)
        setTomCruise(data.results);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 578,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <p className="header-WillFerrell">Best Of Tom Cruise</p>
      <Slider {...settings}>
        {tomCruise.map((rated) => (
          <TomCruiseCard key={rated.id} rated={rated} />
        ))}
      </Slider>
    </>
  );
}

export default TomCruise;
