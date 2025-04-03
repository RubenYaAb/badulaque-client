import { Metadata } from "next";

import EmblaCarousel from "@/components/carousel/carousel";
import './styles/carousel.css';

export const metadata: Metadata = {
  title: 'Badulaque Online'
}

export default function Home() {

  return (
    <main className="flex flex-col justify-center">
      <section aria-label='featured-products' className="pt-4">
        <h1 className="text-center font-bold text-xl">Destacados</h1>
        <EmblaCarousel />
      </section>
      <section aria-label='all-products' className="pt-4">
      <h1 className="text-center font-bold text-xl">Todo</h1>
      </section>
    </main>
  );
}
