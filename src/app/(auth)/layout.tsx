const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col items-center justify-between px-6 py-8 mx-auto min-h-screen">
        <div className="w-full bg-white rounded-xl shadow mt-0 max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;


  