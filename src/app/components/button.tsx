// import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { faPencil } from "@fortawesome/free-solid-svg-icons";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";
// import "/public/js/fontawesome.js"; //

// export const CreatedButton = () => {
//   return (
//     <Link href="/blog/create" passHref>
//       <button className="flex items-center px-4 py-2 text-white bg-green-500 text-2xl rounded-lg hover:opacity-85 hover:shadow-lg duration-200 focus:outline-none">
//         <span>Tambah</span>
//         <FontAwesomeIcon icon={faPlus} className="h-5 w-5 ml-2 bg-white" />
//       </button>
//     </Link>
//   );
// };
// export const EditButton = () => {
//   return (
//     <Link href="/blog/edit" passHref>
//       <button className="flex items-center px-3 py-3 bg-white text-2xl rounded-lg hover:opacity-85 hover:shadow-lg duration-200 border text-gray-500 focus:outline-none">
//         <span></span>
//         <FontAwesomeIcon icon={faPencil} className="h-5 w-5 " />
//       </button>
//     </Link>
//   );
// };
// export const DeletedButton = () => {
//   return (
//     <Link href="/blog/deleted" passHref>
//       <button className="flex items-center px-3 py-3 bg-white text-2xl rounded-lg hover:opacity-85 hover:shadow-lg duration-200 border text-gray-500 focus:outline-none">
//         <span></span>
//         <FontAwesomeIcon icon={faXmark} className="h-5 w-5" />
//       </button>
//     </Link>
//   );
// };

"use client";

import { useFormStatus } from "react-dom";
import { clsx } from "clsx";
import Link from "next/link";
import { BsPlusCircleFill } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { deleteBlog } from "../../../lib/action";

export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();
  return (
    <button
      className={clsx(
        "px-6 py-2 rounded-xl bg-vidi text-white font-bold transition duration-200 hover:bg-white hover:text-vidi border-2 border-transparent hover:border-vidi",
        { "opacity-50 cursor-progress": pending }
      )}
      type="submit"
      disabled={pending}
    >
      {label === "upload" ? (
        <>{pending ? "Uploading..." : "Upload"}</>
      ) : (
        <>{pending ? "updating..." : "Update"}</>
      )}
    </button>
  );
};

export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link href={`/dashboard/create-post/edit/${id}`} passHref>
      <button className="flex items-center px-3 py-3 bg-white text-2xl text-gray-500 focus:outline-none">
        <CiEdit size={30} color="blue" />
      </button>
    </Link>
  );
};
export const DeleteButton = ({ id }: { id: string }) => {
  const DeleteBlogWithId = deleteBlog.bind(null, id);
  return (
    <form action={DeleteBlogWithId}>
      <button className="flex items-center px-3 py-3 bg-white text-2xl text-gray-500 focus:outline-none">
        <MdOutlineDelete size={30} color="red" />
      </button>
    </form>
  );
};

export const LoginButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full text-white bg-blue-700 font-medium rounded-lg px-5 py-2.5 text-center uppercase hover:bg-blue-800"
    >
      {pending ? "Authenticating..." : "Sign In"}
    </button>
  );
};

export const RegisterButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full text-white bg-blue-700 font-medium rounded-lg px-5 py-2.5 text-center uppercase hover:bg-blue-800"
    >
      {pending ? "Registering..." : "Register"}
    </button>
  );
};
