import { useSelector } from "react-redux"
import { Link, Outlet } from "react-router"
import Avatar from 'react-avatar';


function Dashbord() {

  const authUser = useSelector((store) => store.auth)
  return (
    <>
      <header className="container mx-auto bg-white shadow p-4 flex justify-between items-center">
        {/* Home Button */}
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          <Link to={"/"}>Home</Link>

        </button>

        {/* Right Side Buttons */}
        <div className="flex space-x-4">
          <Link to={"/creatProduct"} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Create new Product
          </Link>
          <Link to={"/creatCategori"} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Create new Category
          </Link>
        </div>
      </header>
      <h1 className="text-4xl text-center"><Avatar name={authUser.user.name} round={true} />{authUser.user.name}</h1>
      <div className="py-5">
        <Outlet />
      </div>

    </>
  )
}

export default Dashbord