import Image from "next/image";
import Link from "next/link";
import { toast, Toaster } from "react-hot-toast";

const Users = ({ data }) => {
  // console.log(data.message);

  const delTeamMember = async (id) => {
    try {
      if (window.confirm("Do you want to Delete this User") === true) {
        const res = await fetch(`/api/register/${id}`, {
          method: "DELETE",
        });
        if (
          toast.success("User is Delete Successfully", {
            duration: 2000,
            position: "top-center",
          })
        ) {
          window.location.reload();
        } else {
          toast.error("Something went Wrong");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    }
  };

  return (
    <>
      <Toaster />
      <div className="bg-[#0A121E] h-full max-h-full py-8 px-8 text-white">
        <div className="rounded-lg border border-[#eeeeee23] bg-[#13243a] overflow-hidden">
          <div className="py-6 px-4 md:px-6 xl:px-7.5 bg-[#C7D1DD]">
            <h4 className="text-2xl font-extrabold text-black">
              Your Login Users
            </h4>
          </div>

          <div className="grid grid-cols-3 border-t text-gray-300 border-[#eeeeee1c] py-2 px-4 sm:grid-cols-7 md:px-6 2xl:px-7.5">
            <div className="col-span-2 flex items-center">
              <p className="font-normal">Full Name</p>
            </div>
            <div className="col-span-1 hidden items-center sm:flex">
              <p className="font-normal">User Name</p>
            </div>
            <div className="col-span-2 flex items-center">
              <p className="font-normal">Email</p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="font-normal">Is Admin</p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="font-normal">Action</p>
            </div>
          </div>

          {data?.message?.map((product, key) => (
            <div
              className="grid grid-cols-5 border-t border-[#eeeeee15] py-3 px-4 sm:grid-cols-7 md:px-6 2xl:px-7.5"
              key={key}
            >
              <div className="col-span-2 flex items-center">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <Image
                      src={product.avatar}
                      className="rounded-full h-12 w-12 object-cover"
                      width={35}
                      height={35}
                      alt="Product"
                    />
                  <p className="text-sm text-gray-300 hover:text-gray-100">
                    {product.fullName}
                  </p>
                </div>
              </div>
              <div className="col-span-1 hidden items-center sm:flex">
                <p className="text-sm text-gray-400 hover:text-gray-300">
                  {product.userName}
                </p>
              </div>
              <div className="col-span-2 flex items-center">
                <p className="text-sm text-gray-400 hover:text-gray-300">
                  {product.email}
                </p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-sm text-gray-400 hover:text-gray-300">
                  {product.isAdmin == true ? (
                    <span className="p-1 px-4 rounded-2xl bg-[#173153] text-green-300">
                      True
                    </span>
                  ) : (
                    <span className="p-1 px-4 rounded-2xl bg-[#173153] text-red-300">
                      False
                    </span>
                  )}
                </p>
              </div>
              <div className="col-span-1 flex items-center">
                <div
                  title="Delete User"
                  class="text-gray-500 hover:text-gray-400 cursor-pointer"
                >
                  <i
                    onClick={() => delTeamMember(product._id)}
                    class="fa-regular fa-trash-can mr-2 text-sm"
                  ></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Users;

export async function getServerSideProps() {
  // const res = await fetch("http://localhost:3000/api/register");
  const res = await fetch("https://evertize.vercel.app/api/register");
  const data = await res.json();

  return { props: { data } };
}
