import { Textarea } from "@headlessui/react";

const CreateForm = () => {
  return (
    <div>
      <form action="">
        <div className="mb-5">
          <label htmlFor="judul" className="block text-sm font-medium ">
            Judul Artikel
          </label>
          <input type="text" name="judul" id="judul" className="bg-gr ay-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Judul Artikel..." />
        </div>
        <div className="mb-5">
          <label htmlFor="content" className="block text-sm font-medium ">
            Judul Artikel
          </label>
          <Textarea name="content" id="content" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Judul Artikel..." />
        </div>
        <button type="submit" className="text-white bg-blue-600 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3">
          {" "}
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
