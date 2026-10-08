
import AboutCTA from "@/components/about/AboutCTA";
import AboutHero from "@/components/about/AboutHero";
import OurMission from "@/components/about/OurMission";
import OurStory from "@/components/about/OurStory";
import OurTeam from "@/components/about/OurTeam";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <OurMission />
      <OurTeam />
      <AboutCTA /> 
    </>
  );
}
