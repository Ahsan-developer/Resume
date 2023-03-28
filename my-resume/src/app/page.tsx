import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import NavBar from "../components/navbar";
import HomePage from "./home/page";
import AboutPage from "./about/page";
import ServicesPage from "./whatido/page";
import ResumePage from "./resume/page";
import PortfolioPage from "./portfolio/page";
import ClientSpeakPage from "./clientspeak/page";
import ContactPage from "./contact/page";
import Footer from "@/components/common/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main id="main-wrapper">
      <header>
        <NavBar />
      </header>
      <div id="content">
        <HomePage />
        <AboutPage />
        <ServicesPage />
        <ResumePage />
        <PortfolioPage />
        <ClientSpeakPage />
        <ContactPage />
      </div>
      <Footer />
    </main>
  );
}
