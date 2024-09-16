import Image from "next/image";

type ArticleCardProps = {
  title: string;
  imageSrc: string;
  category: string;
  dateUpload: string;
};

export const ArticleCardLeft = ({ title, imageSrc, category, dateUpload }: ArticleCardProps) => {
  return (
    <div className="pb-4 mb-4">
      <div className="mt-2">
        <h1 className="text-4xl font-semibold mb-3">{title}</h1>
        <div className="flex gap-1 mb-3">
          <p className="text-sm text-red-500">{category}</p>
          <div></div>
          <p className="text-sm">| {dateUpload}</p>
        </div>
      </div>
      <Image src={imageSrc} alt={title} width={200} height={100} className="rounded max-h-80 w-full object-cover shadow-xl" />
    </div>
  );
};

export const ArticleCardRight = ({ title, imageSrc, category, dateUpload }: ArticleCardProps) => {
  return (
    <div className=" mb-4 grid grid-cols-2 gap-3 p-0 mx-0 justify-center items-center ">
      <div className="">
        <h1 className="text-xl font-semibold mb-3">{title}</h1>
        <div className="flex gap-1 mb-3">
          <p className="text-sm text-red-500">{category}</p>
          <div></div>
          <p className="text-sm">| {dateUpload}</p>
        </div>
      </div>
      <div className=" m-0 bg-purple-300 w-72 ">
        <Image src={imageSrc} alt={title} width={200} height={100} className="rounded h-40 w-full object-cover shadow-xl" />
      </div>
    </div>
  );
};
