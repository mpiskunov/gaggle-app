"use client";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

const SignInWrapper = () => {
  const router = useRouter();
  const { status } = useSession();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (status === "unauthenticated") {
      const callbackUrl = searchParams.get("callbackUrl");
      signIn("authentik", { redirect: true, redirectTo: callbackUrl ?? "/" });
    } else if (status === "authenticated") {
      router.push("/");
    }
  }, [router, searchParams, status]);

  return null; // Or a loading indicator if you prefer
};

export default function Page() {
  return (
    <Suspense>
      <SignInWrapper />
    </Suspense>
  );
}
