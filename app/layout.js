import Favicon from '@/app/favicon.ico'
import localFont from 'next/font/local'
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DataProvider } from "@/contexts/DataContext";
import "./globals.css";

const simplon = localFont({
  src: [
    {
      path: '../assets/fonts/SimplonNorm-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SimplonNorm-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SimplonNorm-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SimplonNorm-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
})

export const metadata = {
  title: "BuyShop",
  description: "Ecommerce application to buy clothes",
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <DataProvider>
        <body className={simplon.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </DataProvider>
    </html>
  );
}
