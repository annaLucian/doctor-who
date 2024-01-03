import styles from './error.module.css';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <h2>404 | página no encontrada</h2>
        <h6>Oh, madre mía. creo que seria mejor regresar a la TARDIS!!</h6>
        <p>
          Puedes seguir explorando más contenido en nuestra página
          <span className={styles.link}>
            <Link href="/">Home</Link>
          </span>
        </p>
      </div>
    </section>
  );
}
