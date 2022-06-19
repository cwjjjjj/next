import { useRouter } from "next/router";

const Test = () => {
  const router = useRouter();
  console.log("router", router);

  return <div>Test</div>;
};

export default Test;
