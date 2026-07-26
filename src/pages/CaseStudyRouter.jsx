import { useParams } from 'react-router-dom';
import PaypulseCaseStudy from './PaypulseCaseStudy';
import ComingSoon from './ComingSoon';

// Map slugs to their custom page components
const caseStudyPages = {
  paypulse: PaypulseCaseStudy,
  // storecom: StorecomCaseStudy,   // ← Add when designed
  // eventspace: EventSpaceCaseStudy, // ← Add when designed
  // elevana: ElevanaCaseStudy,
  // prechips: PrechipsCaseStudy,
  // twentyfour: TwentyFourCaseStudy,
};

export default function CaseStudyRouter() {
  const { slug } = useParams();
  const PageComponent = caseStudyPages[slug];

  if (!PageComponent) {
    return <ComingSoon />;
  }

  return <PageComponent />;
}