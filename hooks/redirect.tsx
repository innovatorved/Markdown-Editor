import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { UseRedirectAfterSomeSecondsInterface } from "../interface/interfaces";

export default function useRedirectAfterSomeSeconds(
  redirectTo: string,
  seconds: number = 5
): UseRedirectAfterSomeSecondsInterface {
  const [secondsRemaining, setSecondsRemaining] = useState(seconds);
  const router = useRouter();

  useEffect(() => {
    if (secondsRemaining < 1) return;
    const timer = setTimeout(() => {
      setSecondsRemaining(secondsRemaining - 1);
      if (secondsRemaining < 2) router.push(redirectTo);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [router, secondsRemaining, redirectTo]);

  return { secondsRemaining };
}
