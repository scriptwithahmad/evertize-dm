import Link from "next/link";
import Image from "next/image";

export default function dashboard({ data }) {
  console.log(data.serviceAll);
  return (
    <div class="backCover">
      <div className="dash-wrapper">
        <div className="filterBox">
          <h1 className="mainTitle">
            <span>Services</span> that you offered
          </h1>
          <div className="innerInput">
            <input
              type="text"
              placeholder="Search..."
              // onChange={handleInputChange}
              // onKeyDown={handleKeyDown}
            />
            <button>Search</button>
          </div>
        </div>

        <div className="dasboard-Main">
          {data.serviceAll.map((v, i) => {
            return (
              <div key={v._id} className="das-col bg-red-300">
                <div className="das-sub-col">
                  {/* image */}
                  <div className="dasImgMain w-[130px]">
                    <Image
                      src={v.avatar}
                      alt="Image Alt"
                      width={200}
                      height={200}
                      className="das-img"
                    />
                  </div>
                  {/* info */}
                  <div className="das-info">
                    <h1 className="title mb-2 line-clamp-1">
                      {v.serviceName}
                    </h1>
                    <p className="leading-tight max-w-xl line-clamp-2 text-[14px]">
                      {v.message}
                    </p>
                  </div>
                  {/* actions */}
                  <div className="action">
                    <Link href={"/"}>
                      <i class="fa-solid fa-eye"></i>
                    </Link>
                    <Link href={`/edit/${v._id}`}>
                      <i class="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <i
                      onClick={() => delPost(v._id)}
                      class="fa-solid fa-trash"
                    ></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/addclientservice/getall");
  const data = await res.json();

  return { props: { data } };
}
