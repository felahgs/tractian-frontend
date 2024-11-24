import Flex from "@/components/Layout/Flex";
import styles from "./NotFound.module.scss";

import Text from "@/components/Text";

interface NotFoundProps {
  message?: string;
}

const NotFound = ({ message }: NotFoundProps) => {
  return (
    <Flex fluidH direction="column" align="center" className={styles.container}>
      <Text as="h1" className={styles.title}>
        404 - Page Not Found
      </Text>
      <Text type="caption" className={styles.message}>
        {message || "The page you're looking for does not exist."}
      </Text>
    </Flex>
  );
};

export default NotFound;
