import Link from 'next/link';
import styles from '../styles/navbar.module.css';

const NavBar = () => {
    return (
    <nav className={styles.navbar}>
        <Link href="/" passHref>
            <a className={styles.logolink}>Liam Aiello</a>
        </Link>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
    </nav>
    );
};

export default NavBar;