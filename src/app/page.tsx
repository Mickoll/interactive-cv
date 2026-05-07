import { CommandCenter } from "@/components/CommandCenter";
import { CaseStudyMap, MissionTimeline, RecruiterPanel, SkillMatrix } from "@/components/Sections";

export default function HomePage() {
  return (
    <main>
      <CommandCenter />
      <RecruiterPanel />
      <CaseStudyMap />
      <MissionTimeline />
      <SkillMatrix />
    </main>
  );
}
