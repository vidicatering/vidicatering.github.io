import IconButton from "./IconButton";

const Contact = () => {
  return (
    <div className="min-h-max  flex justify-center items-center pb-8">
      <div className="max-w-7xl min-h-max w-full bg-white shadow-2xl rounded-2xl mx-32 py-12 px-10 flex items-center ">
        <div className="w-3/4">
          <h1 className="text-[32px] font-semibold text-vidi">Rayakan Momen Spesialmu Bersama VIDI Catering!</h1>
        </div>
        <div className="">
          <IconButton />
        </div>
      </div>
    </div>
  );
};

export default Contact;
