import styles from '@/components/Form/CustomToast/style.module.css';
import toast, { Toaster } from 'react-hot-toast';
export const notify = () => toast.success('Tu mensaje ha sido enviado.');
export default function CustomToaster() {
  return (
    <Toaster
      position="bottom-center"
      reverseOrder={false}
      gutter={30}
      containerClassName={styles.toasterContact}
      containerStyle={{
        bottom: 150,
      }}
      toastOptions={{
        className: '',
        duration: Infinity,
        style: {},
      }}
    />
  );
}
