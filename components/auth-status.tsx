import { getServerSession } from "next-auth/next";
// import { signOut } from "next-auth/react";
import { SignOut } from "@/components/sign-out";

import Profile from "@/components/profile";

export default async function AuthStatus() {
  const session = await getServerSession();

  const handleSignOut = async () => {
    await SignOut(); // Sign the user out
    // You can optionally redirect the user to a different page after signout.
  };

  return (
    <div className="absolute top-5 right-5 flex items-center">
      {session && (
        <>
          <div>
            <Profile />
          </div>
          <p className="text-stone-200 text-sm ml-2">
            Signed in as {session.user?.email}
          </p>
          {/* <button
            className="ml-2 bg-red-500 text-white py-2 px-4 rounded"
            onClick={handleSignOut}
          >
            Logout
          </button> */}
        </>
      )}
    </div>
  );
}
