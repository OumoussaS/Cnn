import React from "react";

function Pagination() {
  return (
    <div class="max-w-2xl mx-auto">
      <nav aria-label="Page navigation example">
        <ul class="inline-flex -space-x-px">
          <li>
            <a
              href="#"
              class="bg-white border border-gray-300 text- hover:bg-gray-100 hover:text-gray-900 ml-0 rounded-l-lg leading-tight py-2 px-3 dark:bg-slate-200 dark:border-gray-700 dark:text-black dark:hover:bg-purple-400 dark:hover:text-white"
            >
              First
            </a>
          </li>
          <li>
            <a
              href="#"
              class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-900 leading-tight py-2 px-3 dark:bg-slate-200 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-purple-400 dark:hover:text-white"
            >
              Previous
            </a>
          </li>
          <li>
            <a
              href="#"
              class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-900 leading-tight py-2 px-3 dark:bg-slate-200 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-purple-400 dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-900 leading-tight py-2 px-3 dark:bg-slate-200 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-purple-400 dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              class="bg-blue-50 border border-gray-300 text-blue-600 hover:bg-blue-100 hover:text-blue-700 py-2 px-3 dark:border-gray-700 dark:bg-purple-400 dark:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-900 leading-tight py-2 px-3 dark:bg-slate-200 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-purple-400 dark:hover:text-white"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-900 leading-tight py-2 px-3 dark:bg-slate-200 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-purple-400 dark:hover:text-white"
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-900 leading-tight py-2 px-3 dark:bg-slate-200 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-purple-400 dark:hover:text-white"
            >
              Next
            </a>
          </li>
          <li>
            <a
              href="#"
              class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-900 rounded-r-lg leading-tight py-2 px-3 dark:bg-slate-200 dark:border-gray-700 dark:text-black dark:hover:bg-purple-400 dark:hover:text-white"
            >
              Last
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
