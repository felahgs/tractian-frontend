import React from "react";
import styles from "./Avatar.module.scss";

interface AvatarProps {
  initials: string;
  size?: number;
  backgroundColor?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  initials,
  size = 24,
  backgroundColor = "#2188FF",
}) => {
  return (
    <div
      className={styles.avatar}
      style={{ width: size, height: size, backgroundColor }}
    >
      {initials}
    </div>
  );
};

export default Avatar;
