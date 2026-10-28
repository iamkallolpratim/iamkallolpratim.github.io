import Dock from "@/components/Dock";
import ProfileCard from "@/components/ProfileCard";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Tools from "@/components/Tools";
import Contact from "@/components/Contact";
import Effects from "@/components/Effects";

export default function Home() {
  return (
    <>
      <Effects />
      <Dock />
      <div className="page">
        <div className="page-side">
          <ProfileCard />
        </div>
        <main className="page-main">
          <Hero />
          <Projects />
          <Experience />
          <Tools />
          <Contact />
        </main>
      </div>
    </>
  );
}
