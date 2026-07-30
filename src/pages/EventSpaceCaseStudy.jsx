import CaseStudyLayout from '../components/CaseStudyLayout';
import CaseStudyContent from './CaseStudyContent';
import { caseStudies } from '../data/caseStudyData';

const data = caseStudies.eventspace;

export default function EventSpaceCaseStudy() {
  return (
    <CaseStudyLayout
      title={data.title}
      subtitle={data.subtitle}
      liveUrl={data.liveUrl}
      hasLiveSite={data.hasLiveSite}
      heroImage={data.heroImage}
      accentColor="bg-blue-600"
      projectName={data.title}
    >
      <CaseStudyContent data={data} />
    </CaseStudyLayout>
  );
}