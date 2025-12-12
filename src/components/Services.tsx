import styles from './Services.module.css';
import { Terminal, Cpu, Rocket, Layout, Database } from 'lucide-react';

const services = [
    {
        icon: <Terminal />,
        title: "Software a la Medida",
        desc: "Desarrollamos soluciones robustas y escalables adaptadas 100% a las necesidades específicas de tu negocio."
    },
    {
        icon: <Rocket />,
        title: "Desarrollo de MVPs",
        desc: "Lanzamos tu idea al mercado rápido. Construimos Productos Mínimos Viables enfocados en validación y crecimiento."
    },
    {
        icon: <Cpu />,
        title: "Automatización & IA",
        desc: "Optimizamos tus procesos integrando Inteligencia Artificial y scripts de automatización para ahorrar tiempo y costes."
    },
    {
        icon: <Layout />,
        title: "SaaS & Plataformas Web",
        desc: "Creamos arquitecturas multi-tenant y sistemas complejos listos para escalar usuarios a nivel global."
    },
    {
        icon: <Database />,
        title: "Soluciones Personalizadas",
        desc: "Desde integraciones de API hasta paneles de administración complejos. Si lo imaginas, lo programamos."
    }
];

export default function Services() {
    return (
        <section id="services" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.sectionTitle}>Nuestros Servicios</h2>
                    <p style={{ color: '#a1a1aa' }}>Ingeniería de software de alto nivel para resolver problemas reales.</p>
                </div>

                <div className={styles.grid}>
                    {services.map((s, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {s.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{s.title}</h3>
                            <p className={styles.cardDesc}>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
