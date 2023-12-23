import Carousel from '@/components/Carousel';
export const metadata = {
  title: 'Home',
  description: 'This page shows last news.',
};

export default function Home() {
  return (
    <main>
      <Carousel />
    </main>
  );
}
