import { getServerSession } from "next-auth/next";
import Profile from "@/components/profile";

export default async function AuthStatus() {
  const session = await getServerSession();
  return (
    <div className="absolute top-5 w-full flex justify-center items-center">
      {session && (
        <p className="text-stone-200 text-sm">
          <div>
            <Profile />
          </div>
          Signed in as {session.user?.email}
        </p>
      )}
    </div>
  );
}
