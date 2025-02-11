
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "@/context/CartContext";


export default function RootLayout({ children }) {
  return (
   <html lang="en">
     <body className="bg-gray-100">
      <CartProvider>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <div className="flex-glow">{children}</div>
        <Footer />
      </div>
      </CartProvider>
     </body>
   </html>
  );
}
