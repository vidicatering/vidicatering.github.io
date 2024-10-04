import Link from "next/link";
import logo from "../../../../public/img/vidi_logo.png";
import Image from "next/image";
import { auth, signOut } from "../../../../auth";

const Sidebar = async () => {
  const session = await auth();

  return (
    <div className=" min-w-56 relative">
      <div className="flex flex-col h-screen justify-between bg-white">
        <div className="px-4 py-6">
          <Image src={logo} alt="Logo Vidi" className="w-36 ml-3" />

          <ul className="mt-6 space-y-1">
            <li>
              <Link
                href="/dashboard"
                className="block rounded-lg px-4 py-2 text-base font-medium text-gray-700 hover:opacity-80"
              >
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                href="/dashboard/create-post"
                className="block rounded-lg px-4 py-2 text-base font-medium text-gray-700 hover:opacity-80"
              >
                Create Post
              </Link>
            </li>

            <li>
              {session ? (
                <form
                  action={async () => {
                    "use server";
                    await signOut({ redirectTo: "/login" });
                  }}
                >
                  <button
                    type="submit"
                    className="block rounded-lg px-4 py-2 text-base font-medium text-gray-700 hover:opacity-80"
                  >
                    Sign Out
                  </button>
                </form>
              ) : (
                <Link
                  href="/login"
                  className="block rounded-lg px-4 py-2 text-base font-medium text-gray-700 hover:opacity-80"
                >
                  Sign In
                </Link>
              )}
            </li>
          </ul>
        </div>
        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          {session && (
            <div className="text-base flex items-center gap-4 bg-white p-4 hover:bg-gray-50">
              <button
                type="button"
                className="text-sm ring-2 bg-gray-100 rounded-full"
              >
                <Image
                  src={session.user.image || "/avatar.svg"}
                  alt="avatar"
                  width={64}
                  height={64}
                  className="size-10 rounded-full object-cover"
                />
              </button>
              <span className="block font-medium capitalize">
                {session.user.name}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
