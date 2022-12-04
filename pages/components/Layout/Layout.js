import Navbar from "./Navbar";
import Footer from "./Footer";
import localFont from "@next/font/local";

const poppins = localFont({
  src: "./font/RobotoSlab-VariableFont_wght.ttf",
});

export default function Layout({ children }) {
  return (
    <div className={poppins.className}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
