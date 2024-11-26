"use client";

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
      <h2>Algum problema ocorreu ao carregar a página. Tente novamente.</h2>
      <Button onClick={() => reset()}>Recarregar página</Button>
    </Flex>
  );
}
