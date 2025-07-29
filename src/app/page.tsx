import Header from "@/components/common/Header";
import About from "@/components/homepage/about/About";
import Experience from "@/components/homepage/experience/Experience";
import Hero from "@/components/homepage/hero/Hero";


export default function Home() {
  return (
    <div className="">
      <Header/>
      <Hero/>
      <About/>
      <Experience/>
    </div>
  );
}
