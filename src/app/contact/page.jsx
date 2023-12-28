'use client';
import ContactImage from '@/components/ContactImage';
import Form from '@/components/Form';
import styles from '@/app/contact/styles.module.css';
import { metadata } from '@/components/ContactImage';
export default function Contact() {
  return (
    <section className={styles.contactPage}>
      <h1 className={styles.titleContact__mobile}>
        Envia tu mensaje al Doctor
      </h1>
      <p className={styles.textoRequired}>
        Todos los campos con (*) son obligatorios
      </p>
      <div className={styles.contactFormImage}>
        <ContactImage />
        <Form />
      </div>
    </section>
  );
}
