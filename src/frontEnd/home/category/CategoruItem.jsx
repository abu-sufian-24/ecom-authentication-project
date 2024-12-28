
function CategoruItem({ category }) {
  const { categoryImageUrl, categoryName } = category;

  return (
    <div className="border bg-white mx-3 cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="h-[120px] w-full text-center mt-3 flex items-center justify-center">
        <img
          className="max-w-[80px] sm:max-w-[100px] md:max-w-[120px] mx-auto object-cover"
          src={categoryImageUrl}
          alt={categoryName}
        />
      </div>
      <h4 className="text-sm sm:text-base md:text-lg font-bold text-center mt-3 border-t py-2">
        {categoryName}
      </h4>
    </div>
  );
}

export default CategoruItem;