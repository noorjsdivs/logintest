import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";

function Header() {
  const { data: session } = useSession();
  const handleSignout = () => {
    signOut();
    toast.success("Sign out Successfully!");
  };
  return (
    <div className="bg-gray-900">
      <Toaster position="top-center" reverseOrder={false} duration={4000} />
      <div className=" text-white flex justify-between max-w-7xl mx-auto">
        <div>
          <ul className="flex gap-5 p-7">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>News</li>
          </ul>
        </div>
        <div className="flex gap-5 p-7">
          <button
            onClick={() => signIn()}
            className="hover:cursor-pointer hover:font-bold transition duration-300 ease-in-out"
          >
            Sign In
          </button>
          <button
            onClick={handleSignout}
            className="hover:cursor-pointer hover:font-bold transition duration-300 ease-in-out"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
