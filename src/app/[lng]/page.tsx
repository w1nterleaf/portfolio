

import About from "@/components/homepage/about/About";
import Contacts from "@/components/homepage/contacts/Contacts";
import Experience from "@/components/homepage/experience/Experience";
import Hero from "@/components/homepage/hero/Hero";
import Portfolio from "@/components/homepage/portfolio/Portfolio";
import Skills from "@/components/homepage/skillset/Skills";

interface PageProps {
     params: Promise<{
          lng: string;
     }>;
}
export default async function Home({ params }: PageProps) {
     const { lng } = await params;
  return (
    <main>
      <Hero lng={lng} />
      <About lng={lng}/>
      <Experience lng={lng}/>
      <Skills lng={lng}/>
      <Portfolio />
      <Contacts lng={lng}/>
    </main>
  );
}
