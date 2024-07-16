import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "/public/js/fontawesome.js"; // Path harus sesuai dengan struktur direktori

const IconButton = () => {
  return (
    <button className="flex items-center px-4 py-2 bg-green-500 text-white text-2xl rounded-lg hover:opacity-85 hover:shadow-lg duration-200 focus:outline-none">
      <FontAwesomeIcon icon={["fab", "whatsapp"]} className="h-5 w-5 mr-2" />
      <span>Hubungi Kami</span>
    </button>
  );
};

export default IconButton;
