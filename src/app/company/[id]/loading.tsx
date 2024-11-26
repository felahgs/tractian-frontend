import Flex from "@/components/Layout/Flex";
import Spinner from "@/components/Spinner/Spinner";

export default function Loading() {
  return (
    <Flex align="center" justify="center" fluid fluidH>
      <Spinner />
    </Flex>
  );
}
