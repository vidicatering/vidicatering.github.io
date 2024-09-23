import Link from "next/link";

const Category = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 pt-8 mt-8 border-t">
      <div className="h-32 rounded-xl overflow-hidden hover:shadow-2xl duration-500">
        <Link href="#">
          <div className="bg-[url('/img/tipsCategory.webp')] bg-cover w-full h-full hover:">
            <div className="bg-black w-full h-full bg-opacity-30 flex justify-center items-center text-center">
              <h3 className="text-white font-bold text-4xl">News</h3>
            </div>
          </div>
        </Link>
      </div>
      <div className="h-32 rounded-xl overflow-hidden hover:shadow-2xl duration-500 ">
        <Link href="#">
          <div className="bg-[url('/img/newsCategory.webp')] bg-cover w-full h-full ">
            <div className="bg-black w-full h-full bg-opacity-30 flex justify-center items-center text-center">
              <h3 className="text-white font-bold text-4xl">Tips</h3>
            </div>
          </div>
        </Link>
      </div>
      <div className="h-32 rounded-xl overflow-hidden hover:shadow-2xl duration-500">
        <Link href="#">
          <div className="bg-[url('/img/resepCategory.webp')] bg-cover w-full h-full">
            <div className="bg-black w-full h-full bg-opacity-30 flex justify-center items-center text-center">
              <h3 className="text-white font-bold text-4xl">Resep</h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Category;
