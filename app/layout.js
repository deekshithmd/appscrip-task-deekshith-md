import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DataProvider } from "@/contexts/DataContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BuyShop",
  description: "Ecommerce Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <DataProvider>
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </DataProvider>
    </html>
  );
}
