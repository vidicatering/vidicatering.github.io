import Image from "next/image";
import Link from "next/link";

type ArticleCardProps = {
  title: string;
  content: string;
  imageSrc: string;
  category: string;
  dateUpload: string;
  id: string;
};

export const ArticleCardLeft = ({
  title,
  content,
  imageSrc,
  category,
  dateUpload,
  id,
}: ArticleCardProps) => {
  return (
    <Link href={`/blog/${id}`}>
      <div className="pb-4 mb-4">
        <Image
          src={imageSrc}
          alt={title}
          width={1920}
          height={720}
          className="rounded-xl max-h-96 w-full object-cover shadow-xl"
        />
        <div className="mt-5">
          <h1 className="text-4xl font-medium mb-3 leading-tight ">{title}</h1>
          <p
            className="text-xl line-clamp-3 text-gray-500 tracking-wide"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div className="flex gap-1 mt-5">
            <p className="text-lg text-red-500 font-medium">{category}</p>
            <p className="text-lg">| {dateUpload}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const ArticleCardRight = ({
  title,
  content,
  imageSrc,
  category,
  dateUpload,
  id,
}: ArticleCardProps) => {
  return (
    <Link href={`/blog/${id}`}>
      <div className=" mb-4 grid grid-cols-2 gap-5 p-0 mx-0 justify-center items-center w-full">
        <div className="">
          <h1 className="text-xl font-medium mb-3 leading-tight line-clamp-3 ">
            {title}
          </h1>
          <p
            className="text-xl line-clamp-2 text-gray-500 tracking-wide"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div className="flex gap-1 mt-5">
            <p className="text-lg text-red-500 font-medium">{category}</p>
            <p className="text-lg">| {dateUpload}</p>
          </div>
        </div>
        <div className="">
          <Image
            src={imageSrc}
            alt={title}
            width={1920}
            height={720}
            className="h-full w-full object-cover rounded-xl shadow-xl"
          />
        </div>
      </div>
    </Link>
  );
};
export const ArticleCardRecomendation = ({
  title,
  content,
  imageSrc,
  category,
  dateUpload,
  id,
}: ArticleCardProps) => {
  return (
    <Link href={`/blog/${id}`}>
      <div className=" mb-4 grid grid-cols-2 gap-5 p-0 mx-0 justify-center items-center w-full">
        <div className="">
          <h1 className="text-lg font-medium mb-3 leading-tight line-clamp-2">
            {title}
          </h1>
          <p
            className="text-md line-clamp-2 text-gray-500 tracking-wide"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
        <div className="h-32 overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            width={1920}
            height={720}
            className="h-full w-full object-cover rounded-xl shadow-xl"
          />
        </div>
      </div>
    </Link>
  );
};

export const ArticleCardLatest = ({
  title,
  content,
  imageSrc,
  category,
  dateUpload,
  id,
}: ArticleCardProps) => {
  const truncateContent = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  return (
    <Link href={`/blog/${id}`}>
      <div className=" mb-4 grid grid-cols-2 gap-14 p-0 mx-0 justify-center items-center ">
        <div className=" m-0 ">
          <Image
            src={imageSrc}
            alt={title}
            width={1920}
            height={720}
            className="rounded-2xl h-[350px] w-full object-cover shadow-xl"
          />
        </div>
        <div className="">
          <h1 className="text-4xl font-medium mb-3 leading-tight ">{title}</h1>
          <p
            className="text-xl mt-5 line-clamp-3 tracking-wide"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div className="flex gap-1 mt-5">
            <p className="text-lg text-red-500 font-medium">{category}</p>
            <p className="text-lg">| {dateUpload}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const ArticleCardSmall = ({
  title,
  content,
  imageSrc,
  category,
  dateUpload,
  id,
}: ArticleCardProps) => {
  const truncateContent = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  return (
    <Link href={`/blog/${id}`}>
      <div className=" mb-4  p-0 mx-0 justify-center items-center ">
        <div className=" m-0 ">
          <Image
            src={imageSrc}
            alt={title}
            width={1920}
            height={720}
            className="rounded-2xl shadow-lg h-64 w-full object-cover sm:h-80 lg:h-72"
          />
        </div>
        <div className="">
          <h1 className="mt-4 text-lg font-medium text-gray-900 sm:text-xl line-clamp-2">
            {title}
          </h1>
          <p
            className="mt-2 max-w-sm text-gray-700 line-clamp-3 tracking-wide"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div className="flex gap-1 mt-5">
            <p className="text-lg text-red-500 font-medium">{category}</p>
            <p className="text-lg">| {dateUpload}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
