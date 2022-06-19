import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      next learning
      <button onClick={() => router.push("/test/2?id=ee")}>
        Click here to read more
      </button>
    </>
  );
};

export default Home;
