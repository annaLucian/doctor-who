import Carousel from '@/components/Carousel';
export const metadata = {
  title: 'Home | Doctor Who',
  description: 'This page shows last news.',
};

export default function Home() {
  return (
    <main>
      <Carousel />
    </main>
  );
}
