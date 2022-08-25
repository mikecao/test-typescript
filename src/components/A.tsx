import { ReactElement } from "react";
import styles from "./A.css";

export type AProps = {
  name: string;
};

export function A({ name }: AProps): ReactElement {
  return <h1 className={styles.a}>{name}</h1>;
}

export default A;
