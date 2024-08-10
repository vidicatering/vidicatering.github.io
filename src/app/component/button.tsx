import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "/public/js/fontawesome.js"; //

export const CreatedButton = () => {
  return (
    <Link href="/blog/create" passHref>
      <button className="flex items-center px-4 py-2 text-white bg-green-500 text-2xl rounded-lg hover:opacity-85 hover:shadow-lg duration-200 focus:outline-none">
        <span>Tambah</span>
        <FontAwesomeIcon icon={faPlus} className="h-5 w-5 ml-2 bg-white" />
      </button>
    </Link>
  );
};
export const EditButton = () => {
  return (
    <Link href="/blog/edit" passHref>
      <button className="flex items-center px-3 py-3 bg-white text-2xl rounded-lg hover:opacity-85 hover:shadow-lg duration-200 border text-gray-500 focus:outline-none">
        <span></span>
        <FontAwesomeIcon icon={faPencil} className="h-5 w-5 " />
      </button>
    </Link>
  );
};
export const DeletedButton = () => {
  return (
    <Link href="/blog/deleted" passHref>
      <button className="flex items-center px-3 py-3 bg-white text-2xl rounded-lg hover:opacity-85 hover:shadow-lg duration-200 border text-gray-500 focus:outline-none">
        <span></span>
        <FontAwesomeIcon icon={faXmark} className="h-5 w-5" />
      </button>
    </Link>
  );
};
