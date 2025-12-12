import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                Dev<span>Team</span>
            </div>
            <div className={styles.links}>
                <a href="#" className={styles.link}>Inicio</a>
                <a href="#services" className={styles.link}>Servicios</a>
                <a href="#team" className={styles.link}>Equipo</a>
                <a href="#contact" className={styles.link}>Contacto</a>
            </div>
        </nav>
    );
}
