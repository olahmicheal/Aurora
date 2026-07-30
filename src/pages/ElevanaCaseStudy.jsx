import CaseStudyLayout from '../components/CaseStudyLayout';
import CaseStudyContent from './CaseStudyContent';
import { caseStudies } from '../data/caseStudyData';

const data = caseStudies.elevana;

export default function ElevanaCaseStudy() {
  return (
    <CaseStudyLayout
      title={data.title}
      subtitle={data.subtitle}
      liveUrl={data.liveUrl}
      hasLiveSite={data.hasLiveSite}
      heroImage={data.heroImage}
      accentColor="bg-amber-500"
      projectName={data.title}
    >
      <CaseStudyContent data={data} />
    </CaseStudyLayout>
  );
}