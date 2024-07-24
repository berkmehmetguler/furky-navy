import Feature from "./Components/Features/Feature";
import Hero from "./Components/Hero/Hero";
import TopBanner from "./Components/Banner/TopBanner";
import Conversations from "./Components/Conversations/Conversations";
import Footer from "./Components/Footer/Footer";
import Brands from "./Components/Brands/Brands";

export default function Home() {
  return (
    <main className="h-screen ">
             
      <TopBanner />
      
      <Hero />
 
      <Brands/>
      <Feature />
      <Conversations/>
      <Footer />
    </main>
  );
}
