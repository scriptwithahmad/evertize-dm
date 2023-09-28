import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const formDataChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/login/", {
        ...formData,
      });
      console.log(formData);
      toast.success("Login Successfully!");
      setFormData({
        email: "",
        password: "",
      });
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <>
      <section class="bg-[#eee]">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0">
          <div class="w-full rounded-lg shadow border my-8 sm:max-w-md xl:p-0 bg-white">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <Link
                href="/"
                class="flex items-center mb-6 text-2xl font-semibold text-gray-900"
              >
                <img
                  class="w-14 h-12 object-contain p-2 rounded-md mr-3 shadow-md"
                  src="/elogo.png"
                  alt="logo"
                />
                Evertize
              </Link>
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create an Account
              </h1>
              <form onSubmit={submitHandler} class="space-y-4 md:space-y-6">
                {/* Email  -------------------------------*/}
                <div class="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="email"
                    class="peer p-3 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block min-h-full w-full bg-transparent outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 focus:border-blue-600"
                    id="exampleFormControlInput22"
                    onChange={formDataChangeHandler}
                    name="email"
                  />
                  <label
                    for="exampleFormControlInput22"
                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:text-blue-500 peer-focus:bg-gray-50 peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Email
                  </label>
                </div>
                {/* Password  ----------------------------*/}
                <div class="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="password"
                    class="peer p-3 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block min-h-full w-full bg-transparent outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 focus:border-blue-600"
                    id="exampleFormControlInput22"
                    onChange={formDataChangeHandler}
                    name="password"
                  />
                  <label
                    for="exampleFormControlInput22"
                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:text-blue-500 peer-focus:bg-gray-50 peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Password
                  </label>
                </div>
                {/* New Account ----------------------*/}
                <div>
                  <button
                    type="submit"
                    class="w-full mb-3 text-white bg-blue-500 transition-colors hover:bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign In
                  </button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link
                      href="/register"
                      class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
