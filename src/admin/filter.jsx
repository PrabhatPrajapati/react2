import React from "react";
import { useState } from "react";

function filter() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [activeFilter, setActiveFilter] = useState("Producer Type");
  const [showCategories, setShowCategories] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(null); // Track clicked label

  const options = {
    "Waste Type": [
      { label: "Producer (P)", value: "producer" },
      { label: "Brand Owner (BO)", value: "brand-owner" },
      { label: "Importer (I)", value: "importer" },
    ],
    "Producer Type": [
      { label: "Producer (P)", value: "producer" },
      { label: "Brand Owner (BO)", value: "brand-owner" },
      { label: "Importer (I)", value: "importer" },
    ],
    "Recycler Type": [
      { label: "Recycler (R)", value: "recycler" },
      { label: "Brand Owner (BO)", value: "brand-owner" },
      { label: "Importer (I)", value: "importer" },
    ],
    "Product Type": [
      { label: "Producer (P)", value: "producer" },
      { label: "Brand Owner (BO)", value: "brand-owner" },
      { label: "Importer (I)", value: "importer" },
    ],
    "Credit Type": [
      { label: "Credit (C)", value: "producer" },
      { label: "Brand Owner (BO)", value: "brand-owner" },
      { label: "Importer (I)", value: "importer" },
    ],
    "Recycler State": [
      { label: "Recycler State (R)", value: "producer" },
      { label: "Brand Owner (BO)", value: "brand-owner" },
      { label: "Importer (I)", value: "importer" },
    ],
    "Price Per Credit": [
      { label: "Price Per Credit (p)", value: "producer" },
      { label: "Brand Owner (BO)", value: "brand-owner" },
      { label: "Importer (I)", value: "importer" },
    ],
    "Proof of Availability": [
      { label: "Proof of Availability (p)", value: "producer" },
      { label: "Brand Owner (BO)", value: "brand-owner" },
      { label: "Importer (I)", value: "importer" },
    ],
    Documents: [
      { label: "Documents (D)", value: "producer" },
      { label: "Brand Owner (BO)", value: "brand-owner" },
      { label: "Importer (I)", value: "importer" },
    ],
    Ratings: [
      { label: "Ratings (R)", value: "producer" },
      { label: "Brand Owner (BO)", value: "brand-owner" },
      { label: "Importer (I)", value: "importer" },
    ],
  };
  const categoryOptions = [
    "Category I",
    "Category II",
    "Category III",
    "Category IV",
  ];

  const handleLabelClick = (label) => {
    setSelectedLabel((prevLabel) => (prevLabel === label ? null : label));
    setShowCategories((prevShow) =>
      selectedLabel === label ? !prevShow : true
    );
  };

  const toggleFilter = (value) => {
    setSelectedFilters((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleSelectAll = () => {
    setSelectedFilters(options[activeFilter].map((opt) => opt.value));
  };

  const handleClearAll = () => {
    setSelectedFilters([]);
    setShowCategories(false); // Hide categories when clearing filters
  };

  return (
    <div className="w-[450px]  mx-auto ">
    <div className="flex justify-between  items-center border-b pb-3 ">
      <h2 className="text-[18px] font-[500px] font-poppins">Filters</h2>
      <button onClick={handleClearAll} className="text-red-500 text-[18px] font-[300px]">
        Clear All
      </button>
    </div>
    <div className="flex">
      {/* Sidebar for filter categories */}
      <ul className="w-[200px]  space-y-3 bg-[#F6F6F6] border-r ">
        {Object.keys(options).map((filter) => (
          <li
            key={filter}
            className={`text-[14px] font-[400px] font-poppins cursor-pointer py-2 px-3 rounded ${activeFilter === filter ? "bg-white font-medium" : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </li>
        ))}
      </ul>

      {/* Filter Options */}
      <div className="w-[300px] pl-4 mb-4">
        {options[activeFilter] && options[activeFilter].length > 0 ? (
          <>
            <div className="flex items-center space-x-2 mb-6">
              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={selectedFilters.length === options[activeFilter].length}
                className='mt-4 w-[15px] h-[15px]' />
              <span className="text-[14px] font-[400px] mt-6 font-poppins">SELECT ALL</span>
            </div>
            <div className="mr-7">
              {options[activeFilter].map((option) => (
                <div key={option.value} className="space-y-2">
                  {/* Checkbox and Label */}
                  <div className="flex items-center cursor-pointer space-x-2">
                    <input
                      type="button"
                      checked={selectedFilters.includes(option.value)}
                      onChange={() => toggleFilter(option.value)}
                      className='mt-4' />
                    <span
                      className="text-[14px] font-[400px] m-[10px] font-poppins cursor-pointer"
                      onClick={() => handleLabelClick(option.label)}
                    >
                      {option.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Fixed Category Options below all labels */}
            {showCategories && selectedLabel && (
              <div className="mr-28 mt-2 p-2 mb-3  border-t border-gray-200">
                <h3 className="text-[14px] font-[500px] font-poppins text-[#060C0D] mb-2">
                  Select <span className="text-[#04A2D1]">Recycler</span>
                </h3>

                <ul className="space-y-2">
                  {categoryOptions.map((category, index) => (
                    <li key={index} className="cursor-pointer text-[14px] font-poppins font-[400px] p-2 rounded hover:bg-gray-100">
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        ) : (
          <p className="text-sm text-gray-500">No options available</p>
        )}
      </div>
    </div>

    {/* Footer buttons */}
    <div className="flex justify-between  pt-4 mt-4">
      <button className=" text-[16px] font-[400px] font-poppins px-4 py-2 rounded text-gray-700">Cancel</button>
      <button className="font-[600] text-[16px]  w-[151px] h-[48px]  font-poppins bg-[#04A2D1] text-white px-4 py-2 rounded">Apply Now</button>
    </div>
  </div>
  );
}

export default filter;
