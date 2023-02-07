import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
export default function Navbar(props: any): JSX.Element {
  return (
    <nav className={styles.navbar}>
      <Image
        src="/images/Logo.svg"
        className={styles.navLogo}
        height={50}
        width={150}
        alt="logo"
      />
      <ul className={styles.navbarNav}>
        <li className={styles.navLink}>
          <Link href={"/"}>Home </Link>
        </li>
        <li className={styles.navLink}>
          <Link href={"/pages"}>Pages </Link>
        </li>
        <li className={styles.navLink}>
          <Link href={"/services"}>Services </Link>
        </li>
        <li className={styles.navLink}>
          <Link href={"/project"}>Project </Link>
        </li>
        <li className={styles.navLink}>
          <Link href={"/blog"}>Blog </Link>
        </li>
        <li className={styles.navLink}>
          <Link href={"/contact"}>Contact </Link>
        </li>
      </ul>

      {/* <div className={styles.navigationToggle} >
        <span className={styles.navigationIcon}></span>
      </div> */}
    </nav>
  );
}
