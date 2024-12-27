import { useSelector } from "react-redux";
import CategoruItem from "./CategoruItem"
import Slider from "react-slick";

function CategorySection() {
  const { categories } = useSelector((store) => store.categories);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (

    <div className="container mx-auto  py-8">
      <Slider {...settings}>
        {categories.map((category) => (
          <CategoruItem key={category.id} category={category} />
        ))}
      </Slider>
    </div>


  )
}

export default CategorySection