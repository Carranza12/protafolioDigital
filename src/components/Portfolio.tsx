import styles from './Portfolio.module.css';

const projects = [
    { title: "E-commerce SaaS", desc: "Plataforma multi-vendor para retail." },
    { title: "Fintech Dashboard", desc: "Panel de control para análisis financiero en tiempo real." },
    { title: "AI Chatbot Integration", desc: "Sistema de atención al cliente automatizado." },
    { title: "Real Estate App", desc: "Aplicación móvil para búsqueda de propiedades." }
];

export default function Portfolio() {
    return (
        <section id="portfolio" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Proyectos Destacados</h2>

                <div className={styles.grid}>
                    {projects.map((p, index) => (
                        <div key={index} className={styles.item}>
                            <div className={styles.imagePlaceholder}>
                                Proyecto {index + 1}
                            </div>
                            <div className={styles.overlay}>
                                <h3 className={styles.projectTitle}>{p.title}</h3>
                                <p className={styles.projectDesc}>{p.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
