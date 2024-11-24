import Flex from "@/components/Layout/Flex";
import Spinner from "@/components/Spinner/Spinner";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Flex align="center" justify="center" fluid fluidH>
      <Spinner />
    </Flex>
  );
}
