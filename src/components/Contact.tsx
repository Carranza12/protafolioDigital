"use client";
import { useState } from 'react';
import styles from './Contact.module.css';
import { Mail, MessageSquare, ArrowRight, Smartphone } from 'lucide-react';

export default function Contact() {
    const [message, setMessage] = useState('');

    const handleWhatsAppClick = () => {
        // Número de teléfono del equipo (reemplazar con el real)
        const phoneNumber = "521234567890";

        // Construimos el mensaje
        const text = message ? `Hola, ${message}` : 'Hola, me gustaría recibir más información sobre sus servicios.';
        const encodedText = encodeURIComponent(text);

        // Abrimos WhatsApp
        window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
    };

    return (
        <section id="contact" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <h2>¿Tienes un proyecto en mente?</h2>
                    <p>
                        Cuéntanos tu idea y te diremos cómo hacerla realidad.
                        Al enviar este mensaje, te responderemos directamente por WhatsApp para agilizar la comunicación.
                    </p>

                    <div className={styles.contactList}>
                        <div className={styles.contactItem}>
                            <div className={styles.iconBox}><MessageSquare size={20} /></div>
                            <span>Respuesta rápida vía WhatsApp</span>
                        </div>
                        <div className={styles.contactItem}>
                            <div className={styles.iconBox}><Mail size={20} /></div>
                            <span>contacto@tudominio.com</span>
                        </div>
                    </div>
                </div>

                <form className={styles.formCard} onSubmit={(e) => e.preventDefault()}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>¿En qué podemos ayudarte?</label>
                        <textarea
                            className={styles.textarea}
                            placeholder="Describe brevemente tu proyecto: 'Necesito una app para...', 'Quiero automatizar...'"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>

                    <button
                        type="button"
                        className={styles.submitBtn}
                        onClick={handleWhatsAppClick}
                        style={{ backgroundColor: '#25D366' }} // Color de marca WhatsApp
                    >
                        Enviar a WhatsApp <Smartphone size={18} style={{ display: 'inline', marginLeft: '8px' }} />
                    </button>
                </form>
            </div>
        </section>
    );
}
