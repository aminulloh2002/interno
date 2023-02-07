import { FaLongArrowAltRight } from "react-icons/fa";
import styles from "../styles/Button.module.css";
interface Props {
  children: String;
  customClass?: String;
}
export default function Button(props: Props): JSX.Element {
  const customClass = props.customClass as keyof typeof styles;
  return (
    <button className={`${styles.button} ${styles[customClass]}`}>
      {props.children}
      <span className={styles.buttonIcon}>
        <FaLongArrowAltRight />
      </span>
    </button>
  );
}
