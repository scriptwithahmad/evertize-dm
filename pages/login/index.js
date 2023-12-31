import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useUser } from "@/UserContext";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { setUser } = useUser();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const formDataChangeHandler = (e) => {
    const inputValue = e.target.value;
    setFormData({ ...formData, [e.target.name]: inputValue });

    if (e.target.name === "email") {
      setIsValidEmail(inputValue !== "");
    }

    if (e.target.name === "password") {
      setIsValidPassword(inputValue !== "");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post("/api/login/", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.success) {
        toast.success("Login Successfully!");

        const user = response.data.user;
        setUser(user);

        // Store user data in localStorage
        localStorage.setItem("user", JSON.stringify(user));

        setFormData({
          email: "",
          password: "",
        });

        // Redirect to home page after successful login
        router.push("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section class="bg-[#eee]">
        <div class="flex flex-col items-center justify-center px-6 py-2 mx-auto md:h-full md:py-8 lg:py-10">
          <div class="w-full rounded-lg shadow border my-8 mt-24 lg:my-0 lg:mt-14 sm:max-w-md xl:p-0 bg-white">
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
                    className={`p-3 border ${
                      isValidEmail ? "border-gray-300" : "border-red-500"
                    } text-neutral-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:text-orange-600 focus:border-primary-600 block min-h-full w-full bg-transparent outline-none transition-all duration-200 ease-linear focus:border-orange-600`}
                    id="exampleFormControlInput22"
                    onChange={formDataChangeHandler}
                    name="email"
                    placeholder="Email"
                  />
                </div>
                {/* Password  ----------------------------*/}
                <div class="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="password"
                    className={`p-3 border ${
                      isValidEmail ? "border-gray-300" : "border-red-500"
                    } text-neutral-500 sm:text-sm rounded-lg focus:ring-primary-600 focus:text-orange-600 focus:border-primary-600 block min-h-full w-full bg-transparent outline-none transition-all duration-200 ease-linear focus:border-orange-600`}
                    id="exampleFormControlInput22"
                    onChange={formDataChangeHandler}
                    name="password"
                    placeholder="Password"
                  />
                </div>
                {/* New Account ----------------------*/}
                <div>
                  {/* gpt  ---------*/}
                  <button
                    type="submit"
                    class="w-full mb-3 text-white bg-[#E77818] transition-colors hover:bg-[#fa7f13] focus:focus:ring-4 ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    {loading ? "Loading.." : "Sing In"}
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
