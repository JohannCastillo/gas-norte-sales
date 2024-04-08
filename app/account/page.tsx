import StatsCard from "@/components/account/overview/StatsCard";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Account() {
  const session = await getServerSession(authOptions) as any;
  
  return (
    <section className="flex flex-col">
      <header className="w-full border-b flex flex-col sm:flex-row justify-between sm:items-center pb-6">
        <h1 className="text-3xl font-bold">Hello {`${session?.user?.first_name ?? ''}`} </h1>
        <span className="text-sm">
          Signed in as {session?.user?.email ?? "unknown"}
        </span>
      </header>

      <article className="mt-6 flex flex-col gap-5">
        <div className="flex gap-9">
          <StatsCard title="Profile">
            <span>
              <span className="font-bold text-3xl">75%</span> COMPLETED
            </span>
          </StatsCard>
          <StatsCard title="Orders">
            <span>
              <span className="font-bold text-3xl">5</span> COMPLETED
            </span>
            <span>
              <span className="font-bold text-3xl">1</span> PENDING
            </span>
          </StatsCard>
        </div>
        {/* Recent orders */}
        {/* <div>
          <h1 className="text-md font-semibold">Recent orders</h1>
          cards orders
          {JSON.stringify(session)}
        </div> */}
      </article>
    </section>
  );
}
