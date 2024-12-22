import Slider from "react-slick";
import img1 from "../../assets/banner-img.png"

function SliderSection() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <div className=" my-8 bg-gray-100">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className=" container mx-auto flex justify-center items-center  p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4">Fashionable Collection</h1>
              <p className="text-gray-600 mb-6">
                Get Free Shipping On All Orders Over $99.00
              </p>
              <button className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600">
                Shop Now
              </button>
            </div>
            <div>
              <img
                src={img1} // Replace with your image URL
                alt="Fashionable Bag"
                className="rounded mx-auto w-96"
              />
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="flex justify-center items-center bg-gray-100 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4">Exclusive Handbags</h1>
              <p className="text-gray-600 mb-6">
                Discover the Latest Trends in Bags.
              </p>
              <button className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600">
                Explore Now
              </button>
            </div>
            <div>
              <img
                src={img1}
                alt="Handbag"
                className="rounded mx-auto w-96"
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default SliderSection