import { auth } from "@/auth";
import GaggleHeader from "./header-client";

const HeaderParent = async () => {
  const session = await auth();
  return (
    <>
      <GaggleHeader session={session} />
    </>
  );
};

export default HeaderParent;
