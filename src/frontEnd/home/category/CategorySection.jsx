import { useSelector } from "react-redux";
import CategoruItem from "./CategoruItem";
import Slider from "react-slick";

function CategorySection() {
  const { categories } = useSelector((store) => store.categories);

  // Responsive slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller laptops
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // For mobile devices in portrait mode
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // For smaller mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Slider {...settings}>
        {categories.map((category) => (
          <CategoruItem key={category.id} category={category} />
        ))}
      </Slider>
    </div>
  );
}

export default CategorySection;