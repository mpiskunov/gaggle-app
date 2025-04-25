"use client";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
//import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn("authentik");
    } else if (status === "authenticated") {
      router.push("/");
    }
  }, [router, status]);

  return <div></div>;
}
