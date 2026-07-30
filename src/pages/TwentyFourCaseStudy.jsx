import CaseStudyLayout from '../components/CaseStudyLayout';
import CaseStudyContent from './CaseStudyContent';
import { caseStudies } from '../data/caseStudyData';

const data = caseStudies.twentyfour;

export default function TwentyFourCaseStudy() {
  return (
    <CaseStudyLayout
      title={data.title}
      subtitle={data.subtitle}
      liveUrl={data.liveUrl}
      accentColor={data.accentColor}
      projectName={data.title}
    >
      <CaseStudyContent data={data} />
    </CaseStudyLayout>
  );
}