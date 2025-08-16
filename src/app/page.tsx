import Header from "@/components/common/header/Header";
import About from "@/components/homepage/about/About";
import Contacts from "@/components/homepage/contacts/Contacts";
import Experience from "@/components/homepage/experience/Experience";
import Hero from "@/components/homepage/hero/Hero";
import Portfolio from "@/components/homepage/portfolio/Portfolio";
import Skills from "@/components/homepage/skillset/Skills";


export default function Home() {
  return (
    <div className="">
      <Header/>
      <Hero/>
      <About/>
      <Experience/>
      <Skills/>
      <Portfolio/>
      <Contacts/>
    </div>
  );
}
