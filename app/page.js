'use client'
import { ProductSection } from "@/components/ProductSection";
import "./page.css";

export default function Home() {
  return (
    <main>
      <header>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p className="description">Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </header>
      <ProductSection />
    </main>
  );
}
