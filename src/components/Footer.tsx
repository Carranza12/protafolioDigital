import styles from './Footer.module.css';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.copy}>
                &copy; {new Date().getFullYear()} Francisco Carranza & Christian Chiquito. Todos los derechos reservados.
            </p>
            <div className={styles.socials}>
                {/*  <a href="#" className={styles.socialLink}><Github size={18} /></a>
                <a href="#" className={styles.socialLink}><Linkedin size={18} /></a>
                <a href="#" className={styles.socialLink}><Twitter size={18} /></a> */}
            </div>
        </footer>
    );
}
