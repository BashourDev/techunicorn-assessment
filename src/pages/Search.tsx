import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import ProductsList from "../components/ProductsList";

export default function Search({ search }) {
  const [products, setProducts] = useState([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState([]);

  const getCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  };

  const getProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log("p", data);
    setProducts(data);
  };

  const getByCategory = async (cat) => {
    setSelectedFilter(cat);
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${cat}`
    );
    const data = await res.json();
    console.log("pbc", data);
    setProducts(data);
  };

  useEffect(() => {
    setProducts((oldProducts) =>
      oldProducts.filter((p) => p.title.includes(search))
    );
    console.log(search);
  }, [search]);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  return (
    <div className="bg-gray-100">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <div className="mt-4 border-t border-gray-200">
                  <h3 className="sr-only">Categories</h3>
                  <ul
                    role="list"
                    className="font-medium text-gray-900 px-2 py-3"
                  >
                    {categories.map((category) => (
                      <li
                        className={`${
                          selectedFilter === category ? "text-orange-700" : ""
                        }`}
                        key={category}
                      >
                        <button
                          className="flex justify-between w-full items-center"
                          onClick={() => getByCategory(category)}
                        >
                          <BsChevronRight className="rotate-180" />
                          <span className="w-full">{category}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex items-baseline justify-between pt-5 pb-6 border-b border-gray-200">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Search Results for{" "}
              <span className="text-2xl font-medium">"{search}"</span>
            </h1>

            <div className="flex items-center">
              <button
                type="button"
                className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FiFilter className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
              {/* Filters */}
              <div className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200"
                >
                  {categories.map((category) => (
                    <li
                      className={`${
                        selectedFilter === category ? "text-orange-700" : ""
                      }`}
                      key={category}
                    >
                      <button
                        onClick={() => getByCategory(category)}
                        className="flex w-full justify-between items-center"
                      >
                        <span>{category}</span>
                        <BsChevronRight />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <ProductsList products={products} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
