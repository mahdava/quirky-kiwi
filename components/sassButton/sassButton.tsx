import cx from "classnames";
import { FC } from "react";
import styles from "./sassButton.module.scss";

interface SassButtonProps {
  variant?: "default" | "cancel" | "alert";
  className?: string;
  children: React.ReactElement | string;
}

const SassButton: FC<SassButtonProps> = ({
  variant = "default",
  className = "",
  children,
}) => (
  <button className={cx(styles["button-" + variant], className)}>
    {children}
  </button>
);

export default SassButton;
