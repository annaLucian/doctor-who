import Card from '@/components/Card';
import styles from '@/app/doctors/styles.module.css';
import { getData, filterData } from '@/services/doctor';
export const metadata = {
  title: 'Doctors | Doctor who',
  description: 'This page shows a list of doctors.',
};

export default async function Doctors({ searchParams }) {
  const doctorsData = await getData();
  const searchParam = searchParams.search;
  const filteredDoctors = filterData(doctorsData, searchParam);

  // retorno en caso haya busqueda q?=blabla pero no obtenga doctores
  if (searchParam && filteredDoctors.length === 0) return <div>Not found</div>;

  return (
    <section className={styles.doctors__section}>
      <h1 className={styles.doctors__Title}>Doctores</h1>
      <div className={styles.cards__container}>
        {filteredDoctors.map((el) => (
          <Card key={el.id} doctor={el} />
        ))}
      </div>
    </section>
  );
}
