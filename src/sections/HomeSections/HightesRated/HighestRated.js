import "./HighestRated.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HighestRateCard } from "../../../components/index";
import { useEffect, useState } from "react";

let API_KEY = "&api_key=e09688488e47eddfb6a9c40e8ae46475";
let Base_url = "https://api.themoviedb.org/3";
let url = Base_url + "/movie/upcoming?" + API_KEY;

// main Component
function HighestRated() {
  const [highestRated, setHighestRated] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setHighestRated(data.results);
      });
  }, []);

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 2,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <p className="header-slick">Best Upcoming</p>
      <Slider {...settings}>
        {highestRated.map((rated) => (
          <HighestRateCard key={rated.id} rated={rated} />
        ))}
      </Slider>
    </>
  );
}

export default HighestRated;
