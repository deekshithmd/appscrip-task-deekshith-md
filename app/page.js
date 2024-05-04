'use client'
import { ProductData } from "@/components/ProductData";
import { DataProvider } from "@/contexts/DataContext";
import "./page.css";

export default function Home() {
  return (
    <DataProvider>
      <main>
        <header>
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </header>
        <ProductData />
      </main>
    </DataProvider>
  );
}
