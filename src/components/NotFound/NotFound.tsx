import Flex from "@/components/Layout/Flex";
import styles from "./NotFound.module.scss";

import Text from "@/components/Text";

interface NotFoundProps {
  message?: string;
}

const NotFound = ({ message }: NotFoundProps) => {
  return (
    <Flex fluidH direction="column" align="center" className={styles.container}>
      <Text as="h2" className={styles.title}>
        404 - Page Not Found
      </Text>
      <Text type="caption" className={styles.message}>
        {message || "O endereço que você está tentando acessar não existe."}
      </Text>
    </Flex>
  );
};

export default NotFound;
