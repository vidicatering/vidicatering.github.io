import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import "/public/js/fontawesome.js"; // Path harus sesuai dengan struktur direktori

const IconButton = () => {
  return (
    <button className="flex items-center px-4 py-2 bg-green-500 text-white text-2xl rounded-lg hover:opacity-85 hover:shadow-lg duration-200 focus:outline-none" type="button">
      <FontAwesomeIcon icon={["fab", "whatsapp"]} className="h-5 w-5 mr-2" />
      <Link href="https://api.whatsapp.com/send?phone=628112546265" passHref target="_blank" rel="noopener noreferrer">
        <span>Hubungi Kami</span>
      </Link>
    </button>
  );
};

export default IconButton;
