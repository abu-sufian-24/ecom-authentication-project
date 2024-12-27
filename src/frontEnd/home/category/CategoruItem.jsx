

function CategoruItem({ category }) {

  const { categoryImageUrl, categoryName } = category;
  return (
    <div className="border bg-white mx-3 cursor-pointer ">
      <div className="h-[120px] w-full text-center mt-3 ">
        <img className="max-w-[120px] mx-auto object-cover " src={categoryImageUrl} alt={categoryName} />
      </div>

      <h4 className="text-lg font-bold text-center mt-3 border-t py-2 ">{categoryName}</h4>

    </div>
  )
}

export default CategoruItem