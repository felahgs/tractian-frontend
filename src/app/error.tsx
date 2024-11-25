"use client"; // Error boundaries must be Client Components

import Button from "@/components/Button";
import Flex from "@/components/Layout/Flex";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Flex direction="column" align="center">
      <h2>Something went wrong while loading the page!</h2>
      <Button onClick={() => reset()}>Reload the page</Button>
    </Flex>
  );
}
