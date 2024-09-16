import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "/public/js/fontawesome.js"; //

const Search = () => {
  return (
    <div className="relative flex flex-1">
      <input type="text" className="w-full border border-gray-200 py-2 pl-10 text-sm outline-2 rounded-sm" placeholder="Search..." />
      <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-3 top-2 h-5 w-5 text-gray-500" />
    </div>
  );
};

export default Search;
