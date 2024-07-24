import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from 'react-icons/fa';
import Grid from '../components/Grid'
import RecentProject from "@/components/RecentProject";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import Clients from '../components/Clients'
import Approach from '../components/Approach';
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}></FloatingNav>
        <Hero></Hero>
        <Grid></Grid>
        <RecentProject></RecentProject>
        <Clients></Clients>
        <Experience></Experience>
        <Approach>
        </Approach>
        <Footer></Footer>
      </div>
    </main>
  );
}
