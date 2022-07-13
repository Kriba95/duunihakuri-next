import React, { useEffect } from "react";
import { useRouter } from "next/router";

function NoLogin() {
 //console.log("uhoh")
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, [router]);
  return <div>NoLogin</div>;
}

export default NoLogin;
