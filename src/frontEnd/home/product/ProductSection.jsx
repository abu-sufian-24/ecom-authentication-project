import ProductItem from "./ProductItem";
import img1 from "../../../assets/f3.jpg"
import { useSelector } from "react-redux";


function ProductSection() {


  const { categories } = useSelector((store) => store.categories);
  const { products } = useSelector((store) => store.products);






  const updatedProducts = products.map((item) => {
    let findCat = categories.find((d) => d.id === item.productCategory);
    return {
      ...item,
      productCategory: findCat ? findCat.categoryName : 'Unknown',
    };
  });
  console.log(updatedProducts);


  // const products = [
  //   {
  //     title: 'Black Male T-Shirt',
  //     price: '20.00',
  //     originalPrice: '30.00',
  //     image: img1,
  //     rating: '★★★★★',
  //   },
  //   {
  //     title: 'Black T-Shirt Classic',
  //     price: '20.00',
  //     originalPrice: '30.00',
  //     image: img1,
  //     rating: '★★★★★',
  //   },
  //   {
  //     title: 'Stacked T-Shirts',
  //     price: '20.00',
  //     originalPrice: '30.00',
  //     image: img1,
  //     rating: '★★★★★',
  //   },
  //   {
  //     title: 'Light Blue Male Shirt',
  //     price: '20.00',
  //     originalPrice: '30.00',
  //     image: img1,
  //     rating: '★★★★★',
  //   },
  // ];


  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
      {updatedProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};


export default ProductSection