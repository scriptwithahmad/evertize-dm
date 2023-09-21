import TopBanner from "@/components/Topbar";
import { useState } from "react";
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import { Switch } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [agreed, setAgreed] = useState(false);

  return (
    <>
      <TopBanner Route="Contact" />
      <div className="bg-[#ffffff]">
        <div className="isolate max-w-[1200px] m-auto px-6 py-24 sm:py-16 lg:px-8">
          <div
            className="relative inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            aria-hidden="true"
          >
            <div
              className="absolute left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contact sales
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Aute magna irure deserunt veniam aliqua magna enim voluptate.
            </p>
          </div>
          <form
            action="#"
            method="POST"
            className="mx-auto mt-10 max-w-2xl sm:mt-10 px-6 py-8 bg-opacity-60 bg-slate-100 shadow-lg backdrop-filter backdrop-blur-md border border-opacity-20 border-white border-solid rounded-lg"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {/* FULL NAME */}
              <div>
                <label
                  htmlFor="fName"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Full Name
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="text"
                    name="fName"
                    id="fName"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline focus:animate-pulse focus:outline-1 focus:outline-[#E77918] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* USER NAME */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Username
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline focus:animate-pulse focus:outline-1 focus:outline-[#E77918] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* EMAIL */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline focus:animate-pulse focus:outline-1 focus:outline-[#E77918] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* PASSWORD */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="Password"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="password"
                    name="Password"
                    id="Password"
                    autoComplete="organization"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* NUMBER */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Phone number
                </label>
                <div className="relative mt-2.5">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <label htmlFor="country" className="sr-only">
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:outline focus:animate-pulse focus:outline-1 focus:outline-[#E77918] sm:text-sm"
                    >
                      <option disabled>select one</option>
                      <option>Pak</option>
                      <option>Ind</option>
                      <option>Ban</option>
                      <option>Afg</option>
                    </select>
                  </div>
                  <input
                    type="tel"
                    required
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-40 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline focus:animate-pulse focus:outline-1 focus:outline-[#E77918] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* MESSAGE */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline focus:animate-pulse focus:outline-1 focus:outline-[#E77918] sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="btn block w-full rounded-md"
                //   className="block w-full rounded-md bg-[#E77918] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#ff7e0d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Let's talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
