import { memo } from "react";
import { useRouter } from "next/router";

const Category = () => {
  const {
    query: { id },
  } = useRouter();
  return <>Category: {id}</>;
};

export default memo(Category);
