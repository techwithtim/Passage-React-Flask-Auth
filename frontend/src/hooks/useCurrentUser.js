import { useState, useEffect } from "react";
import { PassageUser } from "@passageidentity/passage-auth/passage-user";

export function useCurrentUser() {
  const [result, setResult] = useState({
    isLoading: true,
    isAuthorized: false,
    username: "",
  });

  useEffect(() => {
    let cancelRequest = false;
    new PassageUser().userInfo().then((userInfo) => {
      if (cancelRequest) return;

      if (userInfo === undefined) {
        setResult({
          isLoading: false,
          isAuthorized: false,
          username: "",
        });
        return;
      }
      setResult({
        isLoading: false,
        isAuthorized: true,
        username: userInfo.email ? userInfo.email : userInfo.phone,
      });
    });
    return () => {
      cancelRequest = true;
    };
  }, []);

  return result;
}
