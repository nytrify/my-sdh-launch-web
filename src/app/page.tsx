import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Guide from "@/components/Guide";
import Download from "@/components/Download";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="flex-grow w-screen">
        <Banner />
        <Guide />
        <Download />
        <Footer />
      </main>
    </>
    
  );
}
