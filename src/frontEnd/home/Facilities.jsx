import img1 from "../../assets/car.png";
import img2 from "../../assets/cart.png";
import img3 from "../../assets/clock.png";
import img4 from "../../assets/clock.png";
import img5 from "../../assets/clock.png";

function Facilities() {
  const features = [
    {
      icon: img1,
      title: "Fast Delivery",
      description: "Start from $10",
    },
    {
      icon: img2,
      title: "Money Guarantee",
      description: "7 Days Back",
    },
    {
      icon: img3,
      title: "365 Days",
      description: "For free return",
    },
    {
      icon: img4,
      title: "Payment",
      description: "Secure system",
    },
    {
      icon: img5,
      title: "Online Support",
      description: "24/7 daily",
    },
  ];

  return (
    <div className="bg-gray-50 py-10 shadow-lg rounded-md">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="mb-4 w-14 h-14"
            />
            <div className="ml-2">
              <h3 className="font-bold text-lg text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Facilities;
