import CaseStudyLayout from '../components/CaseStudyLayout';
import CaseStudyContent from './CaseStudyContent';
import { caseStudies } from '../data/caseStudyData';

const data = caseStudies.storecom;

export default function StorecomCaseStudy() {
  return (
    <CaseStudyLayout
      title={data.title}
      subtitle={data.subtitle}
      liveUrl={data.liveUrl}
      hasLiveSite={data.hasLiveSite}
      heroImage={data.heroImage}
      accentColor="bg-red-600"
      projectName={data.title}
    >
      <CaseStudyContent data={data} />
    </CaseStudyLayout>
  );
}