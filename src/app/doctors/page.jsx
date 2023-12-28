'use client';
import Card from '@/components/Card';
import styles from '@/app/doctors/styles.module.css';
// export const metadata = {
//   title: 'Doctors',
//   description: 'This page shows a list of doctors.',
// };

export default function Doctors() {
  return (
    <section className={styles.doctors__section}>
      <h1 className={styles.doctors__Title}>Doctores</h1>
      <di className={styles.cards__container}>
        <Card />
        <Card />
        <Card />
        <Card />
      </di>
    </section>
  );
}
