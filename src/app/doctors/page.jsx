import Card from '@/components/Card';
import styles from '@/app/doctors/styles.module.css';
import { getData } from '@/services/doctor';
export const metadata = {
  title: 'Doctors | Doctor who',
  description: 'This page shows a list of doctors.',
};

export default async function Doctors() {
  const doctorsData = await getData();
  return (
    <section className={styles.doctors__section}>
      <h1 className={styles.doctors__Title}>Doctores</h1>
      <div className={styles.cards__container}>
        {doctorsData.map((el) => (
          <Card key={el.id} doctor={el} />
        ))}
      </div>
    </section>
  );
}
