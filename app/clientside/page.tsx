"use client";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

function MyFunction() {
  const [session, setSession] = useState<Session | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const session = await getSession();
        console.log(session);
        setSession(session);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
    </>
  );
}

export default MyFunction;
