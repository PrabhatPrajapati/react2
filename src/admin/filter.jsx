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
    <div className="w-[450px] mx-auto ">
  {/* Header */}
  <div className="flex justify-between items-center border-b px-4 py-3 bg-white sticky top-0 z-10">
    <h2 className="text-[18px] font-[500] font-poppins">Filters</h2>
    <button onClick={handleClearAll} className="text-red-500 text-[18px] font-[300]">
      Clear All
    </button>
  </div>

  {/* Main Content (Scrollable if needed) */}
  <div className="flex flex-1 overflow-y-auto">
    {/* Sidebar for filter categories */}
    <ul className="w-[200px] space-y-3 bg-[#F6F6F6] border-r h-full overflow-y-auto">
      {Object.keys(options).map((filter) => (
        <li
          key={filter}
          className={`text-[14px] font-[400] font-poppins cursor-pointer py-2 px-3 rounded ${
            activeFilter === filter ? "bg-white font-medium" : ""
          }`}
          onClick={() => setActiveFilter(filter)}
        >
          {filter}
        </li>
      ))}
    </ul>

    {/* Filter Options (Scrollable) */}
    <div className="w-[300px] pl-4 mb-4 overflow-y-auto">
      {options[activeFilter] && options[activeFilter].length > 0 ? (
        <>
          <div className="flex items-center space-x-2 mb-6">
            <input
              type="checkbox"
              onChange={handleSelectAll}
              checked={selectedFilters.length === options[activeFilter].length}
              className="w-[15px] h-[15px]"
            />
            <span className="text-[14px] font-[400] font-poppins">SELECT ALL</span>
          </div>

          <div className="mr-7">
            {options[activeFilter].map((option) => (
              <div key={option.value} className="space-y-2">
                <div className="flex items-center cursor-pointer space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedFilters.includes(option.value)}
                    onChange={() => toggleFilter(option.value)}
                    className="mt-1"
                  />
                  <span
                    className="text-[14px] font-[400] font-poppins cursor-pointer"
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
            <div className="mr-28 mt-2 p-2 mb-3 border-t border-gray-200">
              <h3 className="text-[14px] font-[500] font-poppins text-[#060C0D] mb-2">
                Select <span className="text-[#04A2D1]">Recycler</span>
              </h3>

              <ul className="space-y-2">
                {categoryOptions.map((category, index) => (
                  <li key={index} className="cursor-pointer text-[14px] font-poppins font-[400] p-2 rounded hover:bg-gray-100">
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

  {/* Footer (Fixed at the Bottom) */}
  <div className="flex justify-between pt-4 px-4 pb-4 bg-white sticky bottom-0 border-t">
    <button className="text-[16px] font-[400] font-poppins px-4 py-2 rounded text-gray-700">
      Cancel
    </button>
    <button className="font-[600] text-[16px] w-[151px] h-[48px] font-poppins bg-[#04A2D1] text-white px-4 py-2 rounded">
      Apply Now
    </button>
  </div>
</div>

  );
}

export default filter;
