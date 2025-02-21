import { useState } from "react";

import folder from "/src/assets/folder.png"; 
import notifications from "/src/assets/notifications.png";
import Vectorr from "/src/assets/Vectorr.png";
import Vectorrr from "/src/assets/Vectorrr.png";
import Vectorrrr from "/src/assets/Vectorrrr.png";

const navbar = () => {
  const [search, setSearch] = useState("");

  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b w-full h-[84px]">
      {/* Search Bar */}
      <div className="flex items-center border rounded-lg px-4 py-2 w-[267px] h-[48px]">
        <img src={Vectorrrr} alt="Search" className="w-[17px] h-[17px] cursor-pointer mr-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none font-[700px] bg-transparent flex-grow text-[12px] text-gray-600"
        />
        <img src={Vectorr} alt="Search" className="w-[20px] h-[18px] cursor-pointer mr-5 text-gray-400" />
        <img src={Vectorrr} alt="Mic" className="w-[14px] h-[19px] cursor-pointer text-gray-400" />
      </div>

      {/* Navigation Links (Hidden on Small Screens) */}
      <div className="hidden md:flex space-x-10">
        <a href="#" className="font-semibold text-[12px] text-black">Dashboard</a>
        <a href="#" className="text-[#7A8699] text-[12px] hover:text-black">Credit Request</a>
        <a href="#" className="text-[#7A8699] text-[12px] hover:text-black">EPR</a>
        <a href="#" className="text-[#7A8699] text-[12px] hover:text-black">Offers</a>
        <a href="#" className="text-[#7A8699] text-[12px] hover:text-black">History</a>
      </div>

      {/* Icons */}
      <div className="flex space-x-4 text-gray-500">
        <img src={folder} alt="Folder" className="w-6 h-6 cursor-pointer" />
        <img src={notifications} alt="Bell" className="w-6 h-6 cursor-pointer" />
      </div>
    </nav>
  );
};

export default navbar;
