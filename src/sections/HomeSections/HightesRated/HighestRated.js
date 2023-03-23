import "./HighestRated.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HighestRateCard } from "../../../components/index";
import { useEffect, useState } from "react";

let API_KEY = "&api_key=e09688488e47eddfb6a9c40e8ae46475";
let Base_url = "https://api.themoviedb.org/3";
let url =
  Base_url +
  "/discover/movie?with_genres=18&primary_release_year=2014" +
  API_KEY;

// main Component
function HighestRated() {
  const [highestRated, setHighestRated] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.results)
        setHighestRated(data.results);
      });
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
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
      <p className="header-drama">Best Drama</p>
      <Slider {...settings}>
        {highestRated.map((rated) => (
          <HighestRateCard key={rated.id} rated={rated} />
        ))}
      </Slider>
    </>
  );
}

export default HighestRated;
