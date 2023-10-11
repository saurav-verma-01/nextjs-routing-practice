import Link from "next/link";
import styles from "./navbar.module.css";

const NavBar = () => (
  <header className={styles.header}>
    {" "}
    <p>
      <Link href="/">CRICKET REVOLUTION</Link>
    </p>
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link href="/bats">BATS</Link>
        </li>
        <li>
          <Link href="/">BATTING PADS</Link>
        </li>
        <li>
          <Link href="/">GLOVES</Link>
        </li>

        <li>
          <Link href="/">CRICKET WHITES</Link>
        </li>
        <li>
          <Link href="/">SIGN IN</Link>
        </li>
        <li>
          <Link className={styles.cta} href="/">
            SIGN UP
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
