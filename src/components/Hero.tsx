import styles from './Hero.module.css';
import { ArrowRight, Code2 } from 'lucide-react';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <span className={styles.badge}>
                Desarrolladores Independientes • Francisco & Christian
            </span>

            <h1 className={styles.title}>
                Creamos soluciones digitales que impulsan el futuro.
            </h1>

            <p className={styles.subtitle}>
                Más de 4 años transformando negocios con Software a la Medida,
                MVPs escalables y Automatizaciones con Inteligencia Artificial.
            </p>

            <div className={styles.actions}>
                <a href="#contact" className={styles.primaryBtn}>
                    Iniciar Proyecto <ArrowRight size={20} />
                </a>
                <a href="#services" className={styles.secondaryBtn}>
                    <Code2 size={20} /> Ver Servicios
                </a>
            </div>
        </section>
    );
}
