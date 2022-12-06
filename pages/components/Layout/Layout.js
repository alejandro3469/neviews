import Navbar from "../navbar/Navbar";
import Footer from "./Footer";
import localFont from "@next/font/local";

const robotoSerif = localFont({
  src: [
    {
      path: "./fonts/RobotoSerif-Thin.ttf",
      weight: '100',
      style: 'normal',
    },
    {
      path: "./fonts/RobotoSerif-ThinItalic.ttf",
      weight: '100',
      style: 'italic',
    },
    {
      path: "./fonts/RobotoSerif-ExtraLight.ttf",
      weight: '200',
      style: 'normal',
    },
    {
      path: "./fonts/RobotoSerif-ExtraLightItalic.ttf",
      weight: '200',
      style: 'italic',
    },
    {
      path: "./fonts/RobotoSerif-Light.ttf",
      weight: '300',
      style: 'normal',
    },
    {
      path: "./fonts/RobotoSerif-LightItalic.ttf",
      weight: '300',
      style: 'italic',
    },
    {
      path: "./fonts/RobotoSerif-Regular.ttf",
      weight: '400',
      style: 'normal',
    },
  ]
});

export default function Layout({ children }) {
  return (
    <div className={robotoSerif.className}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
