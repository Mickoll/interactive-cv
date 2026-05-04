import { CommandCenter } from "@/components/CommandCenter";
import { CaseStudyMap, MissionTimeline, RecruiterPanel, SkillMatrix, ValuePipeline } from "@/components/Sections";

export default function HomePage() {
  return (
    <main>
      <CommandCenter />
      <ValuePipeline />
      <MissionTimeline />
      <SkillMatrix />
      <CaseStudyMap />
      <RecruiterPanel />
    </main>
  );
}
