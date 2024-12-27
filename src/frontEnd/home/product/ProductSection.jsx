import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";


function ProductSection() {

  const { categories } = useSelector((store) => store.categories);
  const { products } = useSelector((store) => store.products);



  const updatedProducts = products.map((item) => {
    let findCat = categories.find((d) => d.id === item.productCategory);
    return {
      ...item,
      productCategory: findCat ? findCat?.categoryName : 'Unknown',

    };
  });

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
      {updatedProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};


export default ProductSection