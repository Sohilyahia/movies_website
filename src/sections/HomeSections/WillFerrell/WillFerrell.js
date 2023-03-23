import "./WillFerrell.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { WillFerrellCard } from "../../../components";

let API_KEY = "&api_key=e09688488e47eddfb6a9c40e8ae46475";
let Base_url = "https://api.themoviedb.org/3";
let url =
  Base_url +
  "/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc" +
  API_KEY;


function WillFerrell() {
  const [willFerrell, setWillFerrell] = useState([]);
  
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setWillFerrell(data.results);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 12,
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
      <p className="header-WillFerrell">Will Ferrell Best Comedies Films</p>
      <Slider {...settings}>
        {willFerrell.map((rated) => (
          <WillFerrellCard key={rated.id} rated={rated}/>
        ))}
      </Slider>
    </>
  );
}

export default WillFerrell;
