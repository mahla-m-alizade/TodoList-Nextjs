"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export const SearchBox = () => {
  const [SearchVal, setSearchVal] = useState("");
  const searchOnChange = (e) => {
    setSearchVal(e.target.value);
    if (e.target.value == "") {
      router.push(`/`);
    }
  };

  const handleSub = (e) => {
    e.preventDefault();

    router.push(`/search/${SearchVal}`);
  };
  const router = useRouter();

  return (
    <>
      <form
        className="h-10 relative xl:m-2 m-auto  w-[80%] max-w-md"
        onSubmit={handleSub}
      >
        <div className="flex">
          <input
            type="search"
            value={SearchVal}
            onChange={searchOnChange}
            name="search"
            id="default-search"
            className="block w-full  h-10 py-2 ps-4 pe-0 md:pe-20 text-sm text-gray-900 border border-green2 rounded-lg bg-gray-50 focus:ring-2 focus:ring-green2 focus:outline-none "
            placeholder="Search "
            required
          />
          <button
            type="submit"
            className="text-white absolute end-0 mb-0.5 h-10 bg-green2 hover:bg-blueGreen1 rounded-r-lg text-sm px-4  "
          >
            <svg
              className="w-4 h-4 text-gray-500 "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
      </form>
    </>
  );
};
