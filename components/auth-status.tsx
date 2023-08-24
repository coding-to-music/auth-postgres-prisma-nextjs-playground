import { getServerSession } from "next-auth/next";
// import { signOut } from "next-auth/react";
// import { SignOut } from "@/components/sign-out";

import Profile from "@/components/profile";

export default async function AuthStatus() {
  const session = await getServerSession();

  const handleSignOut = async () => {
    // await SignOut(); // Sign the user out
    // You can optionally redirect the user to a different page after signout.
  };

  //  bg-red-500

  return (
    <div className="absolute top-5 right-5 flex items-center">
      {session && (
        <>
          <button
            className="mt-2 mb-2 mr-2 text-white py-0 px-4 rounded border border-white"
            // onClick={handleSignOut}
          >
            Logout
          </button>
          <p className="text-stone-200 text-sm mr-2">
            Signed in as {session.user?.email}
          </p>
          <div>
            <Profile />
          </div>
        </>
      )}
    </div>
  );
}
