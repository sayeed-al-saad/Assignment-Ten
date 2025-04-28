import { NavLink } from "react-router-dom";



const Navber = () => {
    return (
        <div>
            <div className="navbar flex justify-between text-black bg-[#FFF2C2]">
  <div className="flex">
    <NavLink to="/"><a className="btn btn-ghost text-xl">Dream</a></NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  px-1 space-x-3">
        <li className="hover:shadow-2xl shadow-black">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="hover:shadow-2xl shadow-black">
        <NavLink to="/about">All Tourist Spot</NavLink>
      </li>
      <li className="hover:shadow-2xl shadow-black">
        <NavLink to="/career">Add Tourists Spot</NavLink>
      </li>
      <li className="hover:shadow-2xl shadow-black">
        <NavLink to="/login">My List</NavLink>
      </li>
        </ul>
  </div>
  <div className="flex gap-5">
    <div className="dropdown dropdown-end">
      <button className="btn btn-outline btn-base-100"><NavLink to="/login">Login</NavLink></button>
    </div>
    <div className="dropdown dropdown-end">
      <button className="btn btn-outline btn-base-100"> <NavLink to="/register">Register</NavLink> </button>
    </div>

    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Navber;