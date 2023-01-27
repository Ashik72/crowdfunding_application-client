import React, { useContext, useState } from 'react';
import {Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const DashboardSideBar = ({ dashboardToggle, setDashboardToggle }) => {
  const [dropdown, setDropdown] = useState(false);
  const {user} = useContext(AuthContext);
  return (
    <div className={`w-[320px] h-full lg:block hidden py-4 px-6 bg-[#010424] text-gray-300 font-semibold tracking-[1px] font-serif transition-all duration-500 ${dashboardToggle ? 'lg:ml-0 ml-[-300px]' : "ml-0"} lg:static absolute z-50`}>
      <div className='flex justify-between items-center transition-all duration-200 mb-4 p-3 hover:bg-[#5764ec] rounded-full'>
        <Link to="/"><i className="fa-solid fa-house text-xl"></i>
        <span className='text-[18px] ml-1'>HOME</span>
        </Link>
        <i onClick={()=>setDashboardToggle(!dashboardToggle)} className="fa-solid fa-xmark text-2xl -mt-4 lg:hidden block"></i>
      </div>
      <ul className='grid gap-3'>

        <NavLink to="overview" className={({ isActive}) =>
          isActive
            ? "flex justify-between items-center transition-all duration-300 bg-[#5764ec] text-[#d9d9db] py-1 px-2 rounded-full"
            : "flex justify-between items-center transition-all duration-300 hover:bg-[#5764ec] hover:text-[#d9d9db] py-1 px-2 rounded-full"
        }>
          
          <p>
            <i className="fa-solid fa-chart-line mr-2"></i>
            <span>Overview</span>
          </p>
          <i className="fa-solid fa-chevron-right ml-2"></i>
        </NavLink>
        <NavLink to="user" className={({ isActive}) =>
          isActive
            ? "flex justify-between items-center transition-all duration-300 bg-[#5764ec] text-[#d9d9db] py-1 px-2 rounded-full"
            : "flex justify-between items-center transition-all duration-300 hover:bg-[#5764ec] hover:text-[#d9d9db] py-1 px-2 rounded-full"
        }>
          
          <p>
            <i className="fa-solid fa-user-tie mr-2"></i>
            <span className=''>{user?.displayName}</span>
          </p>
          <i className="fa-solid fa-chevron-right ml-2"></i>
        </NavLink>
        <NavLink onClick={() => setDropdown(!dropdown)} className="flex justify-between items-center transition-all duration-300 hover:bg-[#5764ec] hover:text-[#d9d9db] py-1 px-2 rounded-full">
          <p className='text-gray-200'>
            <i className="fa-solid fa-hand-holding-dollar mr-2"></i>
            <span className=''>Donations</span>
          </p>
          {dropdown ? <i className="fa-solid fa-chevron-down ml-2 text-gray-200"></i>:
            <i className="fa-solid fa-chevron-right text-gray-200"></i>}
        </NavLink>
        {
          dropdown && <>
            <NavLink to="activity" className={({ isActive}) =>
              isActive
                ? "ml-8 flex justify-between items-center transition-all duration-300 bg-[#5764ec] text-[#d9d9db] py-1 px-2 rounded-full"
                : "ml-8 flex justify-between items-center transition-all duration-300 hover:bg-[#5764ec] hover:text-[#d9d9db] py-1 px-2 rounded-full"
            }>Avtivity</NavLink>
            <NavLink to="bankdonors" className={({ isActive}) =>
              isActive
                ? "ml-8 flex justify-between items-center transition-all duration-300 bg-[#5764ec] text-[#d9d9db] py-1 px-2 rounded-full"
                : "ml-8 flex justify-between items-center transition-all duration-300 hover:bg-[#5764ec] hover:text-[#d9d9db] py-1 px-2 rounded-full"
            }>Bank Donation</NavLink>
            {/* <NavLink to="carddonate" className={({ isActive }) =>
              isActive
                ? "ml-8 flex justify-between items-center transition-all duration-300 bg-[#5764ec] text-[#d9d9db] py-1 px-2 rounded-full"
                : "ml-8 flex justify-between items-center transition-all duration-300 hover:bg-[#5764ec] hover:text-[#d9d9db] py-1 px-2 rounded-full"
            }>Bkash Donation</NavLink> */}
          </>
        }
        <NavLink to="donors" className={({ isActive, isPending }) =>
          isActive
            ? "flex justify-between items-center transition-all duration-300 bg-[#5764ec] text-[#d9d9db] py-1 px-2 rounded-full"
            : "flex justify-between items-center transition-all duration-300 hover:bg-[#5764ec] hover:text-[#d9d9db] py-1 px-2 rounded-full"
        }>
          <span>
            <i className="fa-solid fa-user-group mr-2"></i>
            <span>Donors</span>
          </span>
          <i className="fa-solid fa-chevron-right ml-2"></i>
        </NavLink>
        {/* <NavLink to="admin" className={({ isActive, isPending }) =>
          isActive
            ? "flex justify-between items-center transition-all duration-300 bg-[#5764ec] text-[#d9d9db] py-1 px-2 rounded-full"
            : "flex justify-between items-center transition-all duration-300 hover:bg-[#5764ec] hover:text-[#d9d9db] py-1 px-2 rounded-full"
        }>
          <span>
            <i className="fa-solid fa-users-gear mr-2"></i>
            <span>Admin</span>
          </span>
          <i className="fa-solid fa-chevron-right ml-2"></i>
        </NavLink> */}
      </ul>
    </div>
  );
};

export default DashboardSideBar;