import Hero from "@/sections/hero/hero"
import AboutMe from "@/sections/about/about"
import Projects from "@/sections/projects/projects"
import Experience from "@/sections/experience/experience";

export default function Home() {
  return (
      <main className="bg-main-bg text-primary flex overflow-hidden min-h-screen flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero/>
        <AboutMe/>
        <Projects/>
        <Experience/>
      </main>
  );
}
