import { getServerSession } from "next-auth/next";

export default async function AuthStatus() {
  const session = await getServerSession();
  return (
    <div>
      {session && (
          <span>Signed in as {session.user?.email}</span>
      )}
    </div>
  );
}
