import styles from './Team.module.css';
import { Linkedin, Github, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Team() {
    return (
        <section id="team" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>El Equipo</h2>

                <div className={styles.grid}>
                    {/* Francisco */}
                    <div className={styles.card}>
                        <div style={{ position: 'relative', width: '150px', height: '150px', margin: '0 auto 1.5rem', borderRadius: '50%', overflow: 'hidden', border: '4px solid #0a0a0a' }}>
                            <Image
                                src="/img/carranza.jpg"
                                alt="Francisco Carranza"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <h3 className={styles.name}>Francisco Carranza</h3>
                        <span className={styles.role}>Lead Developer & Arquitecto</span>
                        <p className={styles.bio}>
                            Especialista en desarrollo de soluciones escalables a la medida.
                            Más de 4 años de experiencia construyendo desde MVPs ágiles hasta
                            sistemas empresariales complejos.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="GitHub">
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Christian */}
                    <div className={styles.card}>
                        <div style={{ position: 'relative', width: '150px', height: '150px', margin: '0 auto 1.5rem', borderRadius: '50%', overflow: 'hidden', border: '4px solid #0a0a0a' }}>
                            <Image
                                src="/img/WhatsApp Image 2025-12-11 at 17.41.22_b3f1100f.jpg"
                                alt="Christian Chiquito"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <h3 className={styles.name}>Christian Chiquito</h3>
                        <span className={styles.role}>Full Stack Developer & AI Specialist</span>
                        <p className={styles.bio}>
                            Experto en automatización de procesos e integración de Inteligencia Artificial.
                            Enfocado en crear software que no solo funciona, sino que optimiza negocios reales.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="Contact">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
