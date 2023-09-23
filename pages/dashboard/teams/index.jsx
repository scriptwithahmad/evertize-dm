import React from "react";

const Team = ({ data }) => {
  // console.log(data.teamData);
  return (
    <div className="bg-[#0A121E] h-full py-8 px-8 text-white">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div class="flex items-center p-8 justify-between pb-4 bg-opacity-20 bg-blue-400 backdrop-filter backdrop-blur-lg backdrop-filter-blur rounded-t-lg shadow-xl border border-opacity-20 border-white">
          <div>
            <button
              id="dropdownActionButton"
              data-dropdown-toggle="dropdownAction"
              class="inline-flex items-center text-gray-500 bg-[#eee] border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              type="button"
            >
              <span class="sr-only">Action button</span>
              Action
              <svg
                class="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
          </div>
          <label for="table-search" class="sr-only">
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for users"
            />
          </div>
        </div>
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-900 uppercase bg-gray-50">
            <tr className="bg-slate-300">
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    class="w-[13] h-[13] focus:ring-[#000]"
                  />
                  <label for="checkbox-all-search" class="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" class="px-6 py-3 font-semibold">
                Name
              </th>
              <th scope="col" class="px-6 py-3 font-semibold">
                Position
              </th>
              <th scope="col" class="px-6 py-3 font-semibold">
                Status
              </th>
              <th scope="col" class="px-6 py-3 font-semibold">
                Action
              </th>
            </tr>
          </thead>
          {data.teamData.map((v, i) => {
            return (
              <tbody>
                <tr class="bg-[#eee] border-b hover:bg-gray-100">
                  <td class="w-2 px-4 py-6">
                    <div class="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-1" class="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    class="flex items-center px-6 py-2 text-gray-900 whitespace-nowrap"
                  >
                    <img
                      className="w-10 h-1w-10 rounded-full"
                      src={v.avatar}
                      alt=""
                    />
                    <div class="pl-3">
                      <div class="text-base font-normal">{v.name}</div>
                      <div class="font-light text-[14px] text-gray-500">
                        {v.email ? "" : "ahmad08@gmail.com"}
                      </div>
                    </div>
                  </th>
                  <td class="px-6 py-4">{v.design}</td>
                  <td class="px-6 py-4">
                    <div class="flex items-center">
                      <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                      Online
                    </div>
                  </td>
                  <td class="px-6">
                    <a href="#" class="font-medium text-[#E77918]">
                      <i class="fa-regular fa-trash-can"></i>
                    </a>
                    <a href="#" class="font-medium text-[#E77918]">
                      <i class="fa-regular fa-pen-to-square"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Team;

export async function getServerSideProps() {
  const res = await fetch("https://evertize.vercel.app/api/team/get-all-team");
  const data = await res.json();

  return { props: { data } };
}
