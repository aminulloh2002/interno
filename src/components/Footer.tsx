import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import styles from "../styles/Footer.module.css";
interface Props {}
export default function Footer(props: Props) {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.company}>
          <div className={styles.footerLogo}>
            <Image src="/images/Logo.svg" width={500} height={200} alt="logo" />
          </div>
          <p>
            It is a long established fact that a reader will be distracted
            lookings.
          </p>
          <div className={styles.footerSocialMedia}>
            <FaFacebook /> <FaTwitter />
            <FaLinkedin /> <FaInstagram />
          </div>
        </div>
        <div className={styles.footerPages}>
          <h3 className={styles.footerHeader}>Pages</h3>
          <ul className={styles.footerList}>
            <li className={styles.footerList}>About Us</li>
            <li className={styles.footerList}>Our Projects</li>
            <li className={styles.footerList}>Our Team</li>
            <li className={styles.footerList}>Contact Us</li>
            <li className={styles.footerList}>Services</li>
          </ul>
        </div>
        <div className={styles.footerServices}>
          <h3 className={styles.footerHeader}>Services</h3>
          <ul>
            <li className={styles.footerList}>Kitchen</li>
            <li className={styles.footerList}>Living Area</li>
            <li className={styles.footerList}>Bathroom</li>
            <li className={styles.footerList}>Dining Hall</li>
            <li className={styles.footerList}>Bedroom</li>
          </ul>
        </div>
        <div className={styles.footerContact}>
          <h3 className={styles.footerHeader}>Contact</h3>
          <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
          <p>contact@interno.com</p>
          <p>(123) 456 - 7890</p>
        </div>
      </footer>

      <p className={styles.copyright}>Copyright © Interno | Sliced by Me</p>
    </>
  );
}
