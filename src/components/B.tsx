import { ReactElement } from "react";
import styles from "./B.module.css";
import Logo from "../assets/logo.svg";

export type BProps = {
  name: string;
};

export function B({ name }: BProps): ReactElement {
  return (
    <h2 className={styles.b}>
      {name}
      <Logo />
    </h2>
  );
}

export default B;
