import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Catalog } from "@/components/Catalog";
import { Taller } from "@/components/Taller";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Catalog />
        <Taller />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
