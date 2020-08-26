import React, { memo } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

const Button = ({ children, className, type, ...props }) => {
  return (
    <div className={cn(styles.button, className)} {...props}>
      {children}
    </div>
  );
};

export default memo(Button);
