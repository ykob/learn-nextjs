import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PostForQueryTest() {
  const router = useRouter();
  const { id } = router.query;
  const [queryId, setQueryId] = useState("hoge");

  useEffect(() => {
    if (!router.isReady) return;
    setQueryId(id || "fuga");
  }, [router.query, router.isReady]);

  return <div>{queryId}</div>;
}
