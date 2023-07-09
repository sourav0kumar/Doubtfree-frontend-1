import React, { useState } from "react";


const SearchBar = ({searchQuery, setSearchQuery }) => {
  // const [searchQuery, setSearchQuery] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setUploadedImage(file);
    // Perform image upload logic
    console.log("Uploaded image:", file);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    // onClear();
  };

  return (
    <div>
      <h2 className="mb-6 mt-2 text-3xl font-bold tracking-tight text-center text-black-900 lg:mb-8 lg:text-3xl">
        ACE WITH VERIFIED ANSWERS
      </h2>

      <div className="flex items-center justify-center mt-2">
        <div className="w-full  bg-white-600 shadow-md">
          <div className="flex items-center space-x-4 px-4 py-2">
            <div className="relative flex-grow">
              <input
                type="text"
                className="w-max-full py-2 pl-10 pr-4 text-gray-800 bg-transparent border-none focus:outline-none"
                placeholder="Search your Questions"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                className="absolute w-5 h-5 text-gray-500 left-3 top-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                {/* Path for the search icon */}
              </svg>
            </div>

            {searchQuery && (
              <button
                className="px-1 py-2 text-gray-600"
                onClick={handleClearSearch}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            )}

            <button
              className="px-3 py-2 text-white bg-gray-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
              onClick={handleSearch}
            >
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
