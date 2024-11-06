import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
        <body>
          {children}
          <ToastContainer />
        </body>
      <Footer />
    </html>
  );
}
