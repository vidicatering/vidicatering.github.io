import IconButton from "./IconButton";

const Contact = () => {
  return (
    <div className="min-h-max  flex justify-center items-center pb-8">
      <div className="lg:max-w-7xl min-h-max w-full bg-white shadow-2xl rounded-2xl lg:mx-32 mx-10 py-12 lg:px-10 px-4 flex lg:flex-row flex-col gap-6 items-center ">
        <div className="w-3/4">
          <h1 className="lg:text-[32px] text-3xl font-semibold text-vidi">Rayakan Momen Spesialmu Bersama VIDI Catering!</h1>
        </div>
        <div className="">
          <IconButton />
        </div>
      </div>
    </div>
  );
};

export default Contact;
