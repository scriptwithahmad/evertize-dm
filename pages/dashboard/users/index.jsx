import Image from "next/image";

const productData = [
  {
    image: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&ga=GA1.2.1572214017.1676789510&semt=ais",
    name: "Apple Watch Series 7",
    category: "Electronics",
    price: 296,
    sold: 22,
    profit: 45,
  },
  {
    image: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&ga=GA1.2.1572214017.1676789510&semt=ais",
    name: "Macbook Pro M1",
    category: "Electronics",
    price: 546,
    sold: 12,
    profit: 125,
  },
  {
    image: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&ga=GA1.2.1572214017.1676789510&semt=ais",
    name: "Dell Inspiron 15",
    category: "Electronics",
    price: 443,
    sold: 64,
    profit: 247,
  },
  {
    image: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&ga=GA1.2.1572214017.1676789510&semt=ais",
    name: "HP Probook 450",
    category: "Electronics",
    price: 499,
    sold: 72,
    profit: 103,
  },
];

const Users = () => {
  return (
    <div className="bg-[#0A121E] h-full max-h-full py-8 px-8 text-white">
      <div className="rounded-lg border border-[#eeeeee75] bg-[#13243a] overflow-hidden">
        <div className="py-6 px-4 md:px-6 xl:px-7.5 bg-[#C7D1DD]">
          <h4 className="text-2xl font-extrabold text-black dark:text-white">
            Your Login Users
          </h4>
        </div>

        <div className="grid grid-cols-6 border-t text-gray-300 border-[#eeeeee41] py-2 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
          <div className="col-span-3 flex items-center">
            <p className="font-normal">Full Name</p>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="font-normal">UserName</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-normal">Email</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-normal">Is Admin</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-normal">Action</p>
          </div>
        </div>

        {productData.map((product, key) => (
          <div
            className="grid grid-cols-6 border-t border-[#eeeeee3a] py-3 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
            key={key}
          >
            <div className="col-span-3 flex items-center">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="h-15 w-15">
                  <Image
                    src={product.image}
                    width={50}
                    height={50}
                    alt="Product"
                    className="rounded-full"
                  />
                </div>
                <p className="text-sm text-gray-300 hover:text-gray-100 dark:text-black">
                  {product.name}
                </p>
              </div>
            </div>
            <div className="col-span-2 hidden items-center sm:flex">
              <p className="text-sm text-gray-400 hover:text-gray-300 dark:text-black">
                {product.category}
              </p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-gray-400 hover:text-gray-300 dark:text-black">
                ${product.price}
              </p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-gray-400 hover:text-gray-300 dark:text-black">
                {product.sold}
              </p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-meta-3">${product.profit}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
