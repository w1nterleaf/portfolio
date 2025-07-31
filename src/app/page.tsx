import Header from "@/components/common/Header";
import About from "@/components/homepage/about/About";
import Experience from "@/components/homepage/experience/Experience";
import Hero from "@/components/homepage/hero/Hero";
import Skills from "@/components/homepage/skillset/Skills";


export default function Home() {
  return (
    <div className="">
      <Header/>
      <Hero/>
      <About/>
      <Experience/>
      <Skills/>
    </div>
  );
}
